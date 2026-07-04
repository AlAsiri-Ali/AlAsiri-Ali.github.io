---
title: "Malicious URL Detection with ML"
excerpt: "Security analytics workflow for malicious URL classification using lexical feature engineering, model comparison, ROC analysis, and precision-recall review."
image: /assets/images/projects/malicious-url-detection-ml.png
lang: en
dir: ltr
alternate_url: "/ar/projects/malicious-url-detection-ml/"
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

{% assign project = site.data.projects | where: "slug", "malicious-url-detection-ml" | first %}

{% assign aa_project_subtitle = "Lexical security classification and model evaluation" %}
{% assign aa_project_summary = "This project builds a lightweight machine-learning workflow for classifying URLs as benign or malicious without visiting the target website. It extracts structural and lexical URL patterns, compares multiple models, and evaluates detection quality with confusion matrices, ROC, and precision-recall analysis." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Malicious URLs can support phishing, malware delivery, defacement, spam, and fraud.
- A safe detection workflow should not require opening suspicious websites.
- Security use cases need recall, precision, and false-negative analysis rather than headline accuracy alone.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>URL corpus</strong><small>benign and malicious labels</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Feature extraction</strong><small>lexical URL signals</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Model comparison</strong><small>LR · RF · XGBoost</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Evaluation</strong><small>ROC, PR, and errors</small></div>
</div>

## Data and inputs {#data-and-inputs}

- 651,191 URLs with original labels for benign, phishing, malware, and defacement.
- The task is converted to binary classification: benign versus malicious.
- The split uses an 80/20 stratified train-test setup with lexical URL features.

## Technical approach {#technical-approach}

- Extract features such as URL length, digit count, special-character count, dot count, IP-address flag, HTTPS flag, and security-related keywords.
- Train and compare Logistic Regression, Random Forest, and XGBoost.
- Review accuracy, precision, recall, F1-score, ROC AUC, average precision, confusion matrix, and feature importance.
- Frame the model as a decision-support layer, not a sole blocking authority.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- Random Forest achieved the strongest reported test performance with 0.876 accuracy, 0.840 precision, 0.788 recall, and 0.813 F1-score.
- XGBoost performed competitively with 0.866 accuracy and 0.796 F1-score.
- Random Forest reached ROC AUC 0.934 and Average Precision 0.901.
- Feature importance highlighted structural signals such as special characters, dots, URL length, and digit count.

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

- Add DNS, content-based, and network-level features.
- Evaluate character-level deep learning models and adversarial manipulation.
- Build a lightweight warning interface for real-time URL screening.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates security-oriented model evaluation: designing safe features, comparing baselines, interpreting errors, and treating model outputs as support signals rather than automatic enforcement.
