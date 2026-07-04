---
layout: single
permalink: /cv/
title: "CV"
excerpt: "Ali AlAsiri professional profile: education, skills, and AI systems direction."
author_profile: false
lang: en
dir: ltr
alternate_url: "/ar/cv/"
---

## Professional profile

**Ali AlAsiri** — AI and Information Systems professional focused on intelligent systems, machine learning, data workflows, model evaluation, and decision-support applications.

My background combines **Information Systems** foundations with advanced AI study and machine-learning work. I focus on building systems that are useful, measurable, evaluated, and clear about their practical limits.

## Education

<div class="aa-grid aa-grid-2">
  <div class="aa-card">
    <h3>Professional Master in Artificial Intelligence</h3>
    <p><strong>King Abdulaziz University</strong>, Faculty of Computing and Information Technology</p>
    <p><strong>Grade:</strong> Excellent — GPA 4.98</p>
    <p><strong>Graduation:</strong> June 22, 2026</p>
  </div>
  <div class="aa-card">
    <h3>Bachelor of Information Systems</h3>
    <p><strong>King Khalid University</strong>, College of Science and Arts</p>
    <p><strong>Graduation:</strong> July 26, 2020</p>
    <p><strong>Foundation:</strong> systems analysis, databases, business-IT alignment, and information management.</p>
  </div>
</div>

## Technical skills

{% for group in site.data.skills %}
### {{ group.group }}
<div class="aa-chip-row">
{% for item in group.items %}<span class="aa-chip">{{ item }}</span>{% endfor %}
</div>
{% endfor %}

## Professional directions

<div class="aa-card">
  <div class="aa-chip-row">
    <span class="aa-chip">AI Engineer</span>
    <span class="aa-chip">Machine Learning Engineer</span>
    <span class="aa-chip">Data Scientist</span>
    <span class="aa-chip">AI Systems Engineer</span>
    <span class="aa-chip">Model Evaluation Analyst</span>
    <span class="aa-chip">Information Systems + AI</span>
  </div>
</div>

## Portfolio

The projects section highlights selected work in intelligent systems, model evaluation, and data-driven problem solving.

## Contact

For collaboration or project discussion, use the [contact page](/contact/) or email <a href="mailto:aliasiri.dev@gmail.com">aliasiri.dev@gmail.com</a>.
