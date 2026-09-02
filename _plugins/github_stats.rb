require "httparty"
require "json"
require "time"

module Jekyll
  # Fetches live GitHub stats (per-repo and per-user) at build time and
  # exposes them as `site.data.github_stats`, so the Repositories page
  # doesn't depend on the third-party github-readme-stats image service.
  class GitHubStatsGenerator < Generator
    priority :high

    CACHE_FILE = File.join(Dir.pwd, ".github-stats-cache.json")
    CACHE_TTL = 3600 # seconds

    def generate(site)
      usernames = site.data.dig("repositories", "github_users") || []
      repo_names = site.data.dig("repositories", "project_repos") || []
      return if usernames.empty? && repo_names.empty?

      cache = load_cache
      data = cache["data"] || { "users" => {}, "repos" => {} }

      if cache_stale?(cache)
        headers = api_headers

        usernames.each do |username|
          fetched = fetch_user_stats(username, headers)
          data["users"][username] = fetched if fetched
        end

        repo_names.each do |repo_name|
          fetched = fetch_repo_stats(repo_name, headers)
          data["repos"][repo_name] = fetched if fetched
        end

        save_cache(data)
      end

      site.data["github_stats"] = data
    end

    private

    def api_headers
      headers = {
        "User-Agent" => "jekyll-github-stats",
        "Accept" => "application/vnd.github+json",
      }
      token = ENV["GITHUB_TOKEN"]
      headers["Authorization"] = "Bearer #{token}" if token && !token.empty?
      headers
    end

    def fetch_user_stats(username, headers)
      user = get_json("https://api.github.com/users/#{username}", headers)
      return nil unless user

      owned_repos = get_json("https://api.github.com/users/#{username}/repos?per_page=100&type=owner", headers) || []

      total_stars = 0
      lang_bytes = Hash.new(0)

      owned_repos.each do |repo|
        next if repo["fork"] || repo["archived"]
        total_stars += repo["stargazers_count"].to_i

        langs = get_json(repo["languages_url"], headers)
        next unless langs
        langs.each { |lang, bytes| lang_bytes[lang] += bytes }
      end

      total_bytes = lang_bytes.values.sum
      top_languages = lang_bytes.sort_by { |_, bytes| -bytes }.first(6).map do |lang, bytes|
        { "name" => lang, "percent" => total_bytes.zero? ? 0 : (bytes * 100.0 / total_bytes).round(1) }
      end

      {
        "login" => user["login"],
        "name" => user["name"],
        "avatar_url" => user["avatar_url"],
        "html_url" => user["html_url"],
        "public_repos" => user["public_repos"],
        "followers" => user["followers"],
        "following" => user["following"],
        "total_stars" => total_stars,
        "top_languages" => top_languages,
      }
    end

    def fetch_repo_stats(full_name, headers)
      repo = get_json("https://api.github.com/repos/#{full_name}", headers)
      return nil unless repo

      {
        "full_name" => repo["full_name"],
        "description" => repo["description"],
        "html_url" => repo["html_url"],
        "language" => repo["language"],
        "stargazers_count" => repo["stargazers_count"],
        "forks_count" => repo["forks_count"],
        "open_issues_count" => repo["open_issues_count"],
        "license" => repo.dig("license", "name"),
      }
    end

    def get_json(url, headers)
      response = HTTParty.get(url, headers: headers, timeout: 10)
      return nil unless response.code == 200
      response.parsed_response
    rescue StandardError => e
      Jekyll.logger.warn "GitHubStats:", "failed to fetch #{url}: #{e.class} - #{e.message}"
      nil
    end

    def load_cache
      return {} unless File.exist?(CACHE_FILE)
      JSON.parse(File.read(CACHE_FILE))
    rescue StandardError
      {}
    end

    def cache_stale?(cache)
      return true unless cache["fetched_at"]
      Time.now.to_i - cache["fetched_at"].to_i > CACHE_TTL
    end

    def save_cache(data)
      File.write(CACHE_FILE, JSON.generate({ "fetched_at" => Time.now.to_i, "data" => data }))
    rescue StandardError => e
      Jekyll.logger.warn "GitHubStats:", "failed to write cache: #{e.message}"
    end
  end
end
