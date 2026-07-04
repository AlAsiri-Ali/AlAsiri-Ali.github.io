---
layout: single
permalink: /projects/
title: "Projects"
excerpt: "Selected AI and data projects across intelligent systems, evaluation, generative workflows, data science, and analytics."
author_profile: false
lang: en
dir: ltr
alternate_url: "/ar/projects/"
---

<p class="aa-lede">Selected AI and data projects arranged by importance by default, with optional sorting by date, title, or problem space.</p>

{% assign sorted_projects = site.data.projects | sort: "priority" %}

<div class="aa-project-sort" data-project-sort>
  <div class="aa-project-sort__label">Sort projects</div>
  <div class="aa-project-sort__controls" role="group" aria-label="Project sorting">
    <button class="aa-sort-button is-active" type="button" data-sort="importance">Importance</button>
    <button class="aa-sort-button" type="button" data-sort="newest">Newest</button>
    <button class="aa-sort-button" type="button" data-sort="oldest">Oldest</button>
    <button class="aa-sort-button" type="button" data-sort="category">Problem space</button>
    <button class="aa-sort-button" type="button" data-sort="title">A–Z</button>
  </div>
</div>

<div class="aa-grid aa-grid-2 aa-featured-projects aa-project-sort-grid" data-project-grid>
{% for project in sorted_projects %}
  {% include aa/project-card.html project=project lang='en' %}
{% endfor %}
</div>
