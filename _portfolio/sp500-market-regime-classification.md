---
title: "S&P 500 Market Regime Classification"
excerpt: "Classification workflow for short-term S&P 500 regimes using technical indicators and time-series-aware model comparison."
image: /assets/images/projects/sp500-market-regime-classification.png
lang: en
dir: ltr
alternate_url: "/ar/projects/sp500-market-regime-classification/"
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

{% assign project = site.data.projects | where: "slug", "sp500-market-regime-classification" | first %}

{% assign aa_project_subtitle = "Short-term market-regime classification experiment" %}
{% assign aa_project_summary = "This project frames S&P 500 behavior as a three-class classification problem and tests whether technical indicators can predict next-day market regimes." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Short-horizon financial classification is noisy and often dominated by majority classes.
- A model may produce acceptable accuracy while failing to separate Bullish and Bearish regimes.
- Time-series validation is needed to avoid misleading evaluation.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>S&P 500 data</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Technical indicators</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Classifiers</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Regime label</strong></div>
</div>

## Data and inputs {#data-and-inputs}

S&P 500 index data from 2020-01-01 to 2024-01-01 with daily return, SMA_20, SMA_50, and 20-day rolling volatility features.

## Technical approach {#technical-approach}

- Label next-day returns as Bullish, Sideways, or Bearish using ±0.5% thresholds.
- Compare Logistic Regression, Random Forest, and SVM.
- Use tuned versions with time-series-aware validation.
- Interpret both accuracy and balanced accuracy.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- The best accuracy was about 52.08%, while balanced accuracy stayed near one-third.
- Models leaned toward the majority Sideways regime.
- The result shows that simple indicators may structure analysis but remain weak for next-day regime prediction.

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

The analysis is intended for modeling and evaluation, not investment advice. Real trading use would require risk controls, transaction-cost modeling, out-of-sample validation, and continuous monitoring.

## Future development {#future-development}

- Add richer macro and volatility features.
- Test longer horizons and different labeling thresholds.
- Use probability calibration and uncertainty-aware reporting.

## Technical contribution {#what-this-project-demonstrates}

The project shows disciplined interpretation of weak financial ML signals instead of overstating noisy classification results.
