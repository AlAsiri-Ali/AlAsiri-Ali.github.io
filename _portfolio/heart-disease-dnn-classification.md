---
title: "Heart Disease DNN Classification"
excerpt: "Deep neural network workflow for binary heart-disease prediction using tabular preprocessing, model tuning, ROC/AUC evaluation, and error analysis."
image: /assets/images/projects/heart-disease-dnn-classification.png
lang: en
dir: ltr
alternate_url: "/ar/projects/heart-disease-dnn-classification/"
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

{% assign project = site.data.projects | where: "slug", "heart-disease-dnn-classification" | first %}

{% assign aa_project_subtitle = "Clinical tabular modeling and diagnostic evaluation" %}
{% assign aa_project_summary = "This project builds a neural-network classifier for heart-disease prediction using structured clinical attributes. It emphasizes preprocessing, tuning, ROC/AUC evaluation, and error analysis rather than treating accuracy as the only success signal." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Tabular clinical data requires careful encoding, scaling, and split discipline.
- A useful classifier needs balanced class-level evaluation, not only overall accuracy.
- Health-related modeling should keep evaluation results clearly separated from clinical decision-making.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Structured dataset</strong><small>Clinical-style attributes</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Preprocessing</strong><small>Encoding and scaling</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>DNN classifier</strong><small>Tuned neural network</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Diagnostic evaluation</strong><small>ROC, F1, error review</small></div>
</div>

## Data and inputs {#data-and-inputs}

- Kaggle Heart Disease dataset based on UCI-style clinical attributes.
- 1,025 records, 14 original attributes, and a binary disease/no-disease target.
- Final encoded/scaled feature matrix with 27 features and a 70/10/20 train-validation-test split.

## Technical approach {#technical-approach}

- One-hot encode categorical variables and standardize numerical features.
- Train DNN variants with early stopping and validation monitoring.
- Compare baseline, improved, dropout, L2, and batch-normalized variants.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- Best model reached 0.9659 test accuracy, 0.9658 weighted F1, and 0.9813 AUC.
- Disease-class recall reached 0.9905, while only 7 out of 205 test samples were misclassified.
- The analysis reviews both aggregate metrics and the small set of errors.

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

This project demonstrates modeling and evaluation on health-related data and is not intended for clinical decision-making. Any clinical use would require external validation, expert review, calibration, and regulatory oversight.

## Future development {#future-development}

- Add external validation on another heart-disease dataset.
- Compare tree-based models and calibrated probabilities.
- Expand error analysis with feature-level interpretation.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates disciplined supervised modeling on sensitive tabular data: preprocessing, tuning, diagnostic metrics, and responsible interpretation.
