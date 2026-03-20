---
layout: page
permalink: /repositories/
title: Repositories
nav: true
nav_order: 3
---

## GitHub Stats

{% if site.data.repositories.github_users %}
  {% for user in site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_user.liquid username=user %}

  <div class="repo p-2 text-center">
    <img
      class="only-light w-100"
      alt="{{ user }} top languages"
      src="https://github-readme-stats.vercel.app/api/top-langs/?username={{ user }}&theme={{ site.repo_theme_light }}&layout=compact&langs_count=8"
    >
    <img
      class="only-dark w-100"
      alt="{{ user }} top languages"
      src="https://github-readme-stats.vercel.app/api/top-langs/?username={{ user }}&theme={{ site.repo_theme_dark }}&layout=compact&langs_count=8"
    >
  </div>
</div>
  {% endfor %}
{% endif %}

---

## Selected Repositories

Code repositories related to my publications.

{% if site.data.repositories.project_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.project_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
