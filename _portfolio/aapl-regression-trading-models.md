---
title: "AAPL Regression & Direction Models"
excerpt: "Supervised learning workflow on Apple stock data comparing next-day price regression with next-day directional classification using technical features."
image: /assets/images/projects/aapl-regression-trading-models.png
lang: en
dir: ltr
alternate_url: "/ar/projects/aapl-regression-trading-models/"
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

{% assign project = site.data.projects | where: "slug", "aapl-regression-trading-models" | first %}

{% assign aa_project_subtitle = "Supervised learning on financial time-series features" %}
{% assign aa_project_summary = "This project compares next-day price regression and next-day direction classification on Apple stock data using moving averages, returns, and chronological evaluation." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Price-level prediction and directional prediction behave very differently in markets.
- A visually reasonable price regression may still fail to create useful directional signals.
- Time-series evaluation must respect chronological order.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>AAPL data</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Technical features</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Linear regression</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Logistic classification</strong></div>
</div>

## Data and inputs {#data-and-inputs}

AAPL daily data from 2014-01-01 to 2024-01-01 with open, high, low, close, volume, SMA_10, SMA_50, and daily return features.

## Technical approach {#technical-approach}

- Create next-day targets for price and direction.
- Engineer moving-average and return features.
- Use chronological train/test splitting.
- Train linear regression and tuned logistic regression.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- Linear regression reached RMSE 2.8188 for next-day close prediction.
- Tuned logistic regression reached 51.42% direction accuracy, matching the majority-class baseline.
- The result highlights the difficulty of short-horizon directional prediction.

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

- Add walk-forward validation.
- Compare additional technical and volatility features.
- Evaluate profitability only after separating signal quality from price fit.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates careful comparison between regression accuracy and directional signal usefulness in financial ML.
