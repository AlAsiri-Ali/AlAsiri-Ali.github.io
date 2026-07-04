---
layout: single
permalink: /ar/projects/
title: "المشاريع"
excerpt: "مشاريع مختارة في الأنظمة الذكية، التقييم، سير العمل التوليدية، علوم البيانات، والتحليلات."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/"
---

<p class="aa-lede">مشاريع مختارة مرتبة حسب الأهمية افتراضيًا، مع إمكانية تغيير الترتيب حسب التاريخ أو الاسم أو مساحة المشكلة.</p>

{% assign sorted_projects = site.data.projects_ar | sort: "priority" %}

<div class="aa-project-sort" data-project-sort>
  <div class="aa-project-sort__label">ترتيب المشاريع</div>
  <div class="aa-project-sort__controls" role="group" aria-label="ترتيب المشاريع">
    <button class="aa-sort-button is-active" type="button" data-sort="importance">الأهم</button>
    <button class="aa-sort-button" type="button" data-sort="newest">الأحدث</button>
    <button class="aa-sort-button" type="button" data-sort="oldest">الأقدم</button>
    <button class="aa-sort-button" type="button" data-sort="category">مساحة المشكلة</button>
    <button class="aa-sort-button" type="button" data-sort="title">الاسم</button>
  </div>
</div>

<div class="aa-grid aa-grid-2 aa-featured-projects aa-project-sort-grid" data-project-grid>
{% for project in sorted_projects %}
  {% include aa/project-card.html project=project lang='ar' %}
{% endfor %}
</div>
