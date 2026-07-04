---
title: "Animal Faces CNN Classification"
excerpt: "CNN image-classification workflow for animal-face recognition across Cat, Dog, and Wild classes using augmentation, callbacks, and visual evaluation."
image: /assets/images/projects/animal-faces-cnn-classification.png
lang: en
dir: ltr
alternate_url: "/ar/projects/animal-faces-cnn-classification/"
last_modified_at: 2026-06-30
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

{% assign project = site.data.projects | where: "slug", "animal-faces-cnn-classification" | first %}

{% assign aa_project_subtitle = "Image classification workflow with balanced visual evaluation" %}
{% assign aa_project_summary = "This project trains a CNN classifier for animal-face recognition across Cat, Dog, and Wild classes. It focuses on image preprocessing, augmentation, callback-based training, and class-level performance review." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Visual classes can overlap because animal faces have high intra-class variation.
- Training needs augmentation and callbacks to reduce overfitting and stabilize learning.
- Evaluation should inspect per-class behavior, not only one headline accuracy.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Image dataset</strong><small>Cat, Dog, Wild</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="vision" %}</span><strong>CNN feature learning</strong><small>Convolutional blocks</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Training control</strong><small>Callbacks and checkpoints</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Evaluation</strong><small>Confusion matrix and samples</small></div>
</div>

## Data and inputs {#data-and-inputs}

- Animal Faces dataset with Cat, Dog, and Wild categories.
- 128×128 RGB inputs with pixel values normalized to [0, 1].
- 11,706 training images and 2,924 test/validation images.

## Technical approach {#technical-approach}

- Use stacked convolutional blocks with max pooling, batch normalization, and dropout.
- Train with Adam, early stopping, learning-rate reduction, and checkpointing.
- Review training curves, confusion matrix, and prediction examples.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- The CNN achieved 0.9593 overall accuracy across the three classes.
- Cat classification was strongest; Wild recall was lower due to greater visual diversity.
- Training and validation curves showed stable convergence without severe overfitting.

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

- Add stronger augmentation policies and transfer-learning baselines.
- Inspect failure cases by species and image quality.
- Package the classifier into a small demo interface.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates end-to-end visual classification: preprocessing, training control, class-level metrics, and visual error inspection.
