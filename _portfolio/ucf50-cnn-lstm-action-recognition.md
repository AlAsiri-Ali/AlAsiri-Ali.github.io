---
title: "UCF50 CNN-LSTM Action Recognition"
excerpt: "Video action-recognition workflow combining CNN spatial feature extraction with RNN/LSTM temporal modeling and comparative performance evaluation."
image: /assets/images/projects/ucf50-cnn-lstm-action-recognition.png
lang: en
dir: ltr
alternate_url: "/ar/projects/ucf50-cnn-lstm-action-recognition/"
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

{% assign project = site.data.projects | where: "slug", "ucf50-cnn-lstm-action-recognition" | first %}

{% assign aa_project_subtitle = "Video understanding through spatial and temporal modeling" %}
{% assign aa_project_summary = "This project studies action recognition from video by extracting frame-level spatial features with a CNN and comparing RNN/LSTM sequence models for temporal classification." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Video classification requires modeling how visual features change over time.
- A frame classifier alone cannot represent temporal movement patterns.
- Comparisons should explain why sequence models differ, not only report accuracy.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Video clips</strong><small>Sampled frames</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="vision" %}</span><strong>CNN encoder</strong><small>Spatial features</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Sequence model</strong><small>RNN or LSTM</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Action prediction</strong><small>50-class evaluation</small></div>
</div>

## Data and inputs {#data-and-inputs}

- UCF50 Action Recognition dataset from Kaggle.
- 6,681 videos across 50 action categories.
- 15 evenly spaced frames sampled per video, resized to 64×64 and normalized to [0, 1].

## Technical approach {#technical-approach}

- Use a three-block CNN to extract frame-level features.
- Feed feature sequences into RNN and LSTM classifiers.
- Compare validation accuracy and macro F1 to understand temporal modeling behavior.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- CNN+LSTM achieved 0.4734 validation accuracy and 0.4548 validation macro F1.
- CNN+RNN achieved 0.4263 validation accuracy and 0.4071 validation macro F1.
- The project emphasizes the comparison under constrained resolution and training budget.

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

- Use higher-resolution frames and longer training.
- Compare 3D CNNs or transformer-based video models.
- Add per-class confusion analysis for visually similar actions.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates the difference between image classification and video understanding by combining spatial feature extraction with temporal sequence modeling.
