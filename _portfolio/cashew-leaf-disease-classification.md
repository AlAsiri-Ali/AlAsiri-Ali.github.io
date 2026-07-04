---
title: "Cashew Leaf Disease Classification"
excerpt: "Agricultural image-classification workflow comparing transfer-learning CNN architectures under class imbalance and evaluating disease recognition performance."
image: /assets/images/projects/cashew-leaf-disease-classification.png
lang: en
dir: ltr
alternate_url: "/ar/projects/cashew-leaf-disease-classification/"
last_modified_at: 2026-07-03
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

{% assign project = site.data.projects | where: "slug", "cashew-leaf-disease-classification" | first %}

{% assign aa_project_subtitle = "Agricultural image classification with transfer learning" %}
{% assign aa_project_summary = "This project develops a visual-classification workflow for identifying cashew leaf conditions across healthy and diseased categories. It compares multiple pretrained CNN architectures, uses class weighting and augmentation, and evaluates performance with class-level metrics." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Leaf disease diagnosis can be slow, subjective, and inconsistent when performed manually.
- The dataset is moderately imbalanced, with the Gummosis class much smaller than the other categories.
- A strong result needs class-level evaluation, not only overall accuracy.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Leaf images</strong><small>5 health/disease classes</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Data preparation</strong><small>splits + augmentation</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>CNN models</strong><small>EfficientNet · ResNet · VGG · DenseNet</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Evaluation</strong><small>accuracy and macro F1</small></div>
</div>

## Data and inputs {#data-and-inputs}

- 6,549 images from the CCMT Cashew subset.
- Five categories: Anthracnose, Gummosis, Leaf Miner, Red Rust, and Healthy.
- 70/15/15 train-validation-test split with 224 × 224 inputs.

## Technical approach {#technical-approach}

- Apply stratified splitting to preserve class proportions across train, validation, and test sets.
- Resize and normalize images using ImageNet statistics.
- Use augmentation including random resized crop, horizontal flip, and color jitter.
- Compare EfficientNet-B0, ResNet-18, VGG-16, and DenseNet-121 using weighted cross-entropy and early stopping.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- EfficientNet-B0 with learning rate 3e-4 achieved 98.58% test accuracy and 98.80% macro F1-score.
- EfficientNet-B0 with learning rate 1e-4 also performed strongly with 98.37% test accuracy.
- ResNet-18 and DenseNet-121 were competitive but below the best EfficientNet-B0 run.
- Remaining errors were mainly between visually similar disease categories such as Anthracnose and Leaf Miner.

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

- Add Grad-CAM or similar explainability methods.
- Evaluate MixUp, CutMix, and mobile-friendly architectures.
- Test the workflow on field images from different farms, devices, and lighting conditions.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates how to evaluate visual AI under class imbalance, compare architectures fairly, and interpret disease-classification performance beyond one headline metric.
