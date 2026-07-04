---
title: "SMS Spam Traditional NLP Classification"
excerpt: "Text-classification workflow focused on representation choices, model comparison, class imbalance, and evaluation tradeoffs."
image: /assets/images/projects/sms-spam-traditional-nlp-classification.png
lang: en
dir: ltr
alternate_url: "/ar/projects/sms-spam-traditional-nlp-classification/"
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

{% assign project = site.data.projects | where: "slug", "sms-spam-traditional-nlp-classification" | first %}

{% assign aa_project_subtitle = "Traditional text-classification workflow" %}
{% assign aa_project_summary = "This project builds a spam-detection workflow for SMS messages using classical NLP representations and machine-learning models. It emphasizes model comparison, class-level metrics, and evaluation beyond headline accuracy." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}


## Challenge {#challenge}

- Spam detection is an imbalanced text-classification task where overall accuracy can hide weak spam recall.
- Different text representations can change how classifiers separate ham and spam messages.
- Practical evaluation requires confusion matrices, recall, F1-score, and ranking behavior.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>SMS messages</strong><small>ham + spam</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Text vectors</strong><small>BoW + TF-IDF</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Model comparison</strong><small>NB + LR + SVM</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Evaluation</strong><small>F1 + ROC-AUC</small></div>
</div>

## Data and inputs {#data-and-inputs}

- 5,574 SMS messages with 4,827 ham and 747 spam messages.
- Binary text-classification task using Bag of Words and TF-IDF representations.
- The reported vocabulary size is 6,879 features with high sparsity.

## Technical approach {#technical-approach}

- Preprocess SMS text and build sparse vector representations.
- Train Naive Bayes, Logistic Regression, and Support Vector Machine models.
- Compare Bag of Words and TF-IDF across multiple classifiers.
- Review confusion matrices, ROC curves, spam recall, and spam F1-score.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- SVM with TF-IDF achieved the best reported overall accuracy at 97.67%.
- The same configuration reached a 0.90 spam F1-score.
- The comparison showed why spam recall and F1-score should be reviewed alongside accuracy.

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

The project focuses on language-data modeling and evaluation. Broader use would require domain-specific validation, edge-case assessment, monitoring, and testing on fresh data.

## Future development {#future-development}

- Evaluate transformer-based spam models against classical baselines.
- Add calibration and threshold tuning for recall-sensitive use cases.
- Test robustness on newer SMS, messaging-app, and multilingual datasets.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates careful evaluation for imbalanced text classification: comparing representations, reading class-level tradeoffs, and identifying a strong baseline workflow for spam detection.
