---
title: "Android Galaxy Sentiment Analysis"
excerpt: "Customer sentiment analysis workflow comparing text representations, classical models, and a neural sequence model on product-related comments."
image: /assets/images/projects/android-galaxy-sentiment-analysis-nlp.png
lang: en
dir: ltr
alternate_url: "/ar/projects/android-galaxy-sentiment-analysis-nlp/"
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

{% assign project = site.data.projects | where: "slug", "android-galaxy-sentiment-analysis-nlp" | first %}

{% assign aa_project_subtitle = "Customer sentiment intelligence workflow" %}
{% assign aa_project_summary = "This project analyzes Android Galaxy-related Reddit comments as a customer-intelligence workflow. It compares preprocessing choices, text representations, and classification models to understand sentiment signals and model tradeoffs on product-related discussions." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}


## Challenge {#challenge}

- Product feedback in online discussions is noisy, imbalanced, and often short or informal.
- Sentiment analysis requires careful preprocessing, label handling, and evaluation beyond a single model score.
- Comparing traditional and neural approaches helps clarify which modeling choices work best for the available data.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Comments</strong><small>product discussions</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Preprocessing</strong><small>cleaning and balancing</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Model comparison</strong><small>traditional + neural</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Evaluation</strong><small>accuracy and F1</small></div>
</div>

## Data and inputs {#data-and-inputs}

- 1,000 raw Reddit comments related to Android Galaxy / Samsung Galaxy S25 discussions.
- The original labels include positive, negative, and neutral comments.
- Neutral comments are removed for a binary task, and the positive class is upsampled to create a balanced 752/752 dataset.

## Technical approach {#technical-approach}

- Clean text by removing HTML, lowercasing, tokenizing, removing stopwords, and lemmatizing.
- Compare Bag of Words, TF-IDF, Word2Vec, and a neural embedding approach.
- Train Logistic Regression, Support Vector Classifier, Random Forest, and Bidirectional LSTM models.
- Review confusion matrices and class-level metrics to understand model behavior.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- SVC with TF-IDF achieved the strongest reported traditional result with 97.12% accuracy and 97.07% F1-score.
- Random Forest with Word2Vec performed strongly with a 94.92% F1-score.
- The BiLSTM was competitive but did not outperform the best traditional approach on this dataset.

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

- Evaluate transformer-based sentiment models.
- Extend the workflow to multilingual or cross-product sentiment analysis.
- Add explainability tools for reviewing influential text signals.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates customer-intelligence modeling: turning informal user comments into structured sentiment signals, comparing representation strategies, and evaluating tradeoffs across model families.
