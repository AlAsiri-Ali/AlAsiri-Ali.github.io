---
title: "Titanic Survival Prediction"
excerpt: "Structured-data predictive modeling workflow with EDA, feature engineering, preprocessing, class-imbalance review, and tuned model comparison."
image: /assets/images/projects/titanic-survival-prediction-ml.png
lang: en
dir: ltr
alternate_url: "/ar/projects/titanic-survival-prediction-ml/"
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

{% assign project = site.data.projects | where: "slug", "titanic-survival-prediction-ml" | first %}

{% assign aa_project_subtitle = "Structured-data decision modeling workflow" %}
{% assign aa_project_summary = "This project builds a supervised classification workflow for the Titanic survival task. It focuses on exploratory analysis, careful feature engineering, preprocessing decisions, class-imbalance review, and model comparison for interpretable predictive modeling." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}


## Challenge {#challenge}

- Structured data often contains missing values, skewed variables, categorical fields, and correlated features.
- Predictive modeling needs careful preprocessing before model comparison can be meaningful.
- Decision tradeoffs should be evaluated with class-level precision, recall, and F1-score rather than accuracy alone.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="database" %}</span><strong>Passenger data</strong><small>demographic and ticket fields</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Feature design</strong><small>impute, encode, transform</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Model comparison</strong><small>baseline and tuned</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Evaluation</strong><small>tradeoff interpretation</small></div>
</div>

## Data and inputs {#data-and-inputs}

- 891 passenger records with the `Survived` target.
- Stratified 80/20 train-test split with 712 training rows and 179 test rows.
- Final feature matrix includes 21 engineered or encoded features.

## Technical approach {#technical-approach}

- Analyze missing values, outliers, survival distribution, and survival-related patterns.
- Engineer features such as title, deck, fare transformation, family size, travel-alone flag, age bins, and fare bins.
- Apply imputation, encoding, scaling, stratified splitting, and a SMOTE experiment after the split to avoid leakage.
- Compare Logistic Regression, SVC, Gaussian Naive Bayes, SMOTE variants, and GridSearchCV-tuned models.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- Tuned Logistic Regression and tuned SVC both reached 0.83799 test accuracy.
- Tuned Logistic Regression showed slightly stronger survivor recall and F1-score.
- Tuned SVC showed stronger survivor precision, making the final choice dependent on the preferred error tradeoff.

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

- Add calibrated probability outputs and explainability with SHAP.
- Compare ensemble stacking and additional cross-validation diagnostics.
- Package the workflow into a more reusable training and evaluation pipeline.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates disciplined structured-data modeling: feature design, preprocessing, imbalance review, model tuning, and interpretation of precision-recall tradeoffs.
