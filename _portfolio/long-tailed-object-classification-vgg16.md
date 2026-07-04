---
layout: single
title: "Long-Tailed Object Classification with VGG16"
excerpt: "Computer-vision classification workflow comparing HOG+SVM with VGG16 transfer learning, augmentation, tuning, and fine-tuning on imbalanced images."
author_profile: false
image: /assets/images/projects/long-tailed-object-classification-vgg16.png
lang: en
dir: ltr
alternate_url: "/ar/projects/long-tailed-object-classification-vgg16/"
last_modified_at: 2026-07-01
classes:
  - aa-project-page
hide_title: true
hide_meta_footer: true
hide_pagination: true
share: false
breadcrumbs: false
toc: false
toc_h_min: 2
---

{% assign project = site.data.projects | where: "slug", "long-tailed-object-classification-vgg16" | first %}

{% assign aa_project_subtitle = "Transfer learning for imbalanced visual recognition" %}
{% assign aa_project_summary = "This project studies visual classification under a realistic long-tailed distribution. It compares a handcrafted-feature baseline with VGG16 transfer learning, then evaluates how augmentation, tuning, and fine-tuning affect class-level performance." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Real-world visual datasets often have uneven class distributions and varied backgrounds.
- A classical baseline is useful, but may struggle with complex visual variation.
- The evaluation needs to consider class balance, not only overall accuracy.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Open Images data</strong><small>Car · Dog · Person</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Baseline</strong><small>HOG features + SVM</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Transfer learning</strong><small>VGG16 with custom head</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Evaluation</strong><small>Accuracy and class metrics</small></div>
</div>

## Data and inputs {#data-and-inputs}

- Open Images data for three classes: Car, Dog, and Person.
- 2,402 training images and 598 validation images.
- Imbalanced, in-the-wild visual samples with diverse backgrounds and viewpoints.

## Technical approach {#technical-approach}

- Build a HOG+SVM baseline to establish traditional visual-feature performance.
- Use VGG16 as a pretrained feature extractor with a custom dense classification head.
- Apply augmentation, dropout, and learning-rate tuning to improve generalization.
- Run a fine-tuning experiment by unfreezing deeper VGG16 layers.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- HOG+SVM reached 67.00% accuracy and struggled with visual variation.
- The tuned VGG16 workflow reached 92.00% accuracy with stronger class balance.
- Fine-tuned VGG16 reached 89.30%, strong but lower than the tuned frozen-transfer setup.
- Class-level precision, recall, and F1 stayed balanced across Car, Dog, and Person.

## Implementation and code {#repository-details}

<div class="aa-case-grid">
  <div class="aa-card">
    <div class="aa-icon" aria-hidden="true">{% include aa/icon.html name="code" %}</div>
    <h3>Implementation focus</h3>
    <p>The implementation connects data preparation, modeling, evaluation, and interpretation in a structured workflow that makes the technical decisions clear.</p>
  </div>
  <div class="aa-card">
    <div class="aa-icon" aria-hidden="true">{% include aa/icon.html name="github" %}</div>
    <h3>Source code</h3>
    <p>The code is available for exploring the implementation details and extending the experiment when needed.</p>
    <p><a class="aa-button aa-button-primary" href="{{ project.links.repo }}" target="_blank" rel="noopener noreferrer">{% include aa/icon.html name="external" %}<span>Open source code</span></a></p>
  </div>
</div>

## Scope and responsible use {#operational-boundaries}

The project is a focused modeling and evaluation study. Broader use should be supported by validation on additional data, robustness checks, monitoring, and domain-specific evaluation.

## Future development {#future-development}

- Add more classes and stronger long-tail imbalance.
- Compare VGG16 with newer lightweight architectures.
- Expand interpretability with saliency maps and failure-case review.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates how to compare traditional and deep-learning approaches under realistic visual-data imbalance while using class-level evaluation to avoid misleading conclusions.
