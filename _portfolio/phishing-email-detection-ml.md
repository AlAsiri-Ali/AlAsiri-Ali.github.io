---
layout: single
title: "Phishing Email Detection with ML"
excerpt: "Security-focused email classification workflow comparing TF-IDF features, Random Forest, SVM, and Logistic Regression for phishing detection."
author_profile: false
image: /assets/images/projects/phishing-email-detection-ml.png
lang: en
dir: ltr
alternate_url: "/ar/projects/phishing-email-detection-ml/"
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

{% assign project = site.data.projects | where: "slug", "phishing-email-detection-ml" | first %}

{% assign aa_project_subtitle = "Security text classification and model comparison" %}
{% assign aa_project_summary = "This project builds and evaluates a phishing-email detection workflow using labeled email text. It compares classical machine-learning models with attention to phishing recall, false positives, feature interpretation, and practical monitoring needs." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Security classification needs more than headline accuracy; phishing recall and false positives matter.
- Text features can capture useful cues but may also learn dataset-specific artifacts.
- A useful model should balance performance, simplicity, and interpretability.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Email data</strong><small>cleaning and labels</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Text features</strong><small>TF-IDF representation</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Model comparison</strong><small>RF · SVM · LR</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Evaluation</strong><small>recall, errors, terms</small></div>
</div>

## Data and inputs {#data-and-inputs}

- 18,650 raw rows and 17,538 rows after cleaning.
- Safe Email and Phishing Email classes with an 80/20 train-test split.
- 5,000 TF-IDF features used to represent email text.

## Technical approach {#technical-approach}

- Clean missing and duplicate email records before modeling.
- Represent email text with TF-IDF features.
- Compare Random Forest, Support Vector Machine, and Logistic Regression models.
- Review confusion matrices, phishing recall, and top phishing-related terms.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- All evaluated models reached strong performance above 97% accuracy.
- Linear SVM achieved 0.9763 accuracy and a strong balance of phishing recall and operational simplicity.
- RBF SVM reached 0.9772 accuracy, but the linear SVM remained simpler to interpret.
- The selected model detected about 98% of phishing emails in the test set.

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

The project demonstrates detection modeling on available data. Operational security use would require continuous data refresh, monitoring, adversarial testing, and privacy-aware logging.

## Future development {#future-development}

- Evaluate on newer and more diverse phishing datasets.
- Add calibration, threshold tuning, and cost-sensitive error analysis.
- Test transformer-based encoders against the classical TF-IDF baseline.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates careful security-oriented model evaluation: comparing baselines, prioritizing recall, analyzing false positives, and interpreting text features with domain awareness.
