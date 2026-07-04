---
title: "Stock Market EDA with yfinance"
excerpt: "Exploratory market-data workflow comparing multi-asset price behavior, returns, volatility, cumulative performance, and cross-asset relationships."
image: /assets/images/projects/stock-market-eda-yfinance.png
lang: en
dir: ltr
alternate_url: "/ar/projects/stock-market-eda-yfinance/"
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

{% assign project = site.data.projects | where: "slug", "stock-market-eda-yfinance" | first %}

{% assign aa_project_subtitle = "Multi-asset market exploration and risk comparison" %}
{% assign aa_project_summary = "This project analyzes seven large-cap assets across sectors to compare prices, returns, volatility, cumulative performance, and cross-asset relationships." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Multi-asset market behavior needs comparison across returns, volatility, and correlation rather than price charts alone.
- Assets from different sectors can show different risk and diversification behavior.
- Exploratory analysis needs a clean reproducible workflow before modeling.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Market data</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Returns</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Volatility</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Correlation</strong></div>
</div>

## Data and inputs {#data-and-inputs}

Daily data from 2019 onward for AAPL, MSFT, AMZN, JPM, XOM, PFE, and TSLA, with engineered returns, moving averages, Bollinger Bands, cumulative returns, and normalized prices.

## Technical approach {#technical-approach}

- Download historical market data with yfinance.
- Clean missing trading-day values and reshape into tidy format.
- Compute return, volatility, cumulative performance, and normalized metrics.
- Visualize distributions, risk, correlations, and cumulative performance.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- TSLA showed the highest daily-return volatility in the selected group.
- PFE showed the lowest volatility among the selected assets.
- AAPL and MSFT had a strong positive return correlation of about 0.69.

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

- Add sector-level aggregation and rolling-correlation analysis.
- Add risk-adjusted metrics such as Sharpe and downside deviation.
- Use the EDA outputs as a foundation for later modeling experiments.

## Technical contribution {#what-this-project-demonstrates}

The project builds a clean foundation for financial analysis by comparing risk, return, and correlation across assets.
