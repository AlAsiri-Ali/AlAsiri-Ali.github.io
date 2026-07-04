---
layout: single
permalink: /blog/
title: "Writing"
excerpt: "Notes on AI, projects, data, and technical learning."
author_profile: false
lang: en
dir: ltr
alternate_url: "/ar/blog/"
---

<p class="aa-lede">Technical notes and reflections on AI, data workflows, model evaluation, learning, and digital transformation.</p>

<div class="aa-callout">
  These notes share how I think about systems, evaluation, responsible AI, and the connection between technical work and real-world context.
</div>

<div class="aa-grid aa-grid-2">
{% for post in site.posts %}
  {% assign post_teaser = post.header.teaser | default: post.image.path | default: site.teaser %}
  <a class="aa-card aa-post-card" href="{{ post.url | relative_url }}">
    <div class="aa-post-thumb"><img src="{{ post_teaser | relative_url }}" alt="" loading="lazy"></div>
    <div class="aa-post-body">
      <div class="aa-meta"><span>{{ post.date | date: "%B %-d, %Y" }}</span></div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt | strip_html | truncate: 190 }}</p>
    </div>
  </a>
{% endfor %}
</div>
