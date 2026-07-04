---
title: "Moving Average Backtest with PyFolio"
excerpt: "Backtesting workflow for a 50/200 moving-average crossover strategy on AAPL using Backtrader and PyFolio-style risk analysis."
image: /assets/images/projects/moving-average-backtest-pyfolio.png
lang: en
dir: ltr
alternate_url: "/ar/projects/moving-average-backtest-pyfolio/"
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

{% assign project = site.data.projects | where: "slug", "moving-average-backtest-pyfolio" | first %}

{% assign aa_project_subtitle = "Backtesting and risk analysis for a rule-based strategy" %}
{% assign aa_project_summary = "This project implements a 50/200 moving-average crossover strategy on Apple stock data and evaluates performance with Backtrader and PyFolio-style metrics." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- A profitable strategy can still underperform a passive benchmark.
- Risk-adjusted metrics and drawdown behavior matter more than final return alone.
- Backtests need assumptions about commission, position sizing, and trading frequency.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>AAPL prices</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>SMA 50/200</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Backtrader strategy</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>PyFolio metrics</strong></div>
</div>

## Data and inputs {#data-and-inputs}

AAPL daily data from 2019-01-01 to 2024-12-31 with open, high, low, close, and volume fields.

## Technical approach {#technical-approach}

- Buy when the 50-day SMA crosses above the 200-day SMA.
- Sell when the 50-day SMA crosses below the 200-day SMA.
- Use 95% of available cash on entry, no leverage, and 0.1% commission.
- Compare performance against buy-and-hold AAPL.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- The strategy ended at $116,229.76 from $100,000, with 16.23% total return.
- Maximum drawdown was 15.73%.
- Buy-and-hold AAPL delivered higher total return, which makes benchmark comparison essential.

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

- Add transaction-cost sensitivity.
- Test other lookback windows and assets.
- Add walk-forward evaluation before interpreting robustness.

## Technical contribution {#what-this-project-demonstrates}

The project emphasizes benchmark comparison, drawdown analysis, and risk-adjusted interpretation in strategy evaluation.
