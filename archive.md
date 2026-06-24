---
layout: default
title: 归档
permalink: /archive/
---

# 文章归档

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
## {{ year.name }}

{% for post in year.items %}
- <span class="archive-date">{{ post.date | date: "%m-%d" }}</span> [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

{% endfor %}

{% if site.posts.size == 0 %}
还没有文章。
{% endif %}
