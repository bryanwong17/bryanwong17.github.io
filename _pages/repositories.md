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
{% assign stats = site.data.github_stats.users[user] %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_user.liquid username=user %}

  <div class="repo p-2">
    <div class="card h-100">
      <div class="card-body text-start">
        <h5 class="card-title repo-card-title">Top Languages</h5>
        {% if stats and stats.top_languages and stats.top_languages.size > 0 %}
          <div class="lang-bar">
            {% for lang in stats.top_languages %}
              <span
                class="lang-bar-seg"
                style="width: {{ lang.percent }}%; background-color: {{ site.data.github_colors[lang.name] | default: '#8f8f8f' }};"
                title="{{ lang.name }} {{ lang.percent }}%"
              ></span>
            {% endfor %}
          </div>
          <ul class="lang-list">
            {% for lang in stats.top_languages %}
              <li>
                <span class="lang-dot" style="background-color: {{ site.data.github_colors[lang.name] | default: '#8f8f8f' }};"></span>
                {{ lang.name }} <span class="lang-percent">{{ lang.percent }}%</span>
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p class="card-text repo-fallback-text">Top languages unavailable right now.</p>
        {% endif %}
      </div>
    </div>
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
