---
layout: single
permalink: /skills/
title: "Skills"
excerpt: "Technical skills across AI systems, machine learning, data science, evaluation, and implementation."
author_profile: false
lang: en
dir: ltr
alternate_url: "/ar/skills/"
---

<p class="aa-lede">A focused skills map across AI systems engineering, machine learning, data science, evaluation, and implementation tools.</p>

{% for group in site.data.skills %}
<section class="aa-section">
  <h2>{{ group.group }}</h2>
  <div class="aa-chip-row">
    {% for item in group.items %}<span class="aa-chip">{{ item }}</span>{% endfor %}
  </div>
</section>
{% endfor %}

## How these skills connect

| Skill area | How I apply it |
|---|---|
| AI systems engineering | Turning technical ideas into structured workflows with clear inputs, outputs, and evaluation points. |
| Machine learning and evaluation | Comparing methods, reading results carefully, and understanding what a metric does and does not prove. |
| Data science and decision modeling | Preparing data, building useful features, and translating patterns into interpretable signals. |
| Generative AI workflows | Designing controlled workflows where outputs can be reviewed, compared, and refined. |
| Implementation tools | Building structured experiments, reusable workflows, prototypes, and project structures that are easy to inspect and extend. |
