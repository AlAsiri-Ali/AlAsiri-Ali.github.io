---
title: "Retail Segmentation & Market Basket Analysis"
excerpt: "Customer analytics workflow combining RFM segmentation, clustering, Apriori association rules, and business interpretation on Online Retail data."
image: /assets/images/projects/retail-segmentation-market-basket.png
lang: en
dir: ltr
alternate_url: "/ar/projects/retail-segmentation-market-basket/"
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

{% assign project = site.data.projects | where: "slug", "retail-segmentation-market-basket" | first %}

{% assign aa_project_subtitle = "Customer segmentation and association-rule analytics" %}
{% assign aa_project_summary = "This project combines RFM customer segmentation with market basket analysis to connect unsupervised learning outputs to practical customer and product decisions." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Retail transaction data needs cleaning before customer behavior becomes meaningful.
- Customer segmentation and basket analysis answer different business questions.
- Analytical outputs need interpretation that maps clusters and rules to practical actions.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Transactions</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>RFM features</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Customer clusters</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Association rules</strong></div>
</div>

## Data and inputs {#data-and-inputs}

UCI Online Retail data with 541,909 raw rows, 25,900 invoices, 4,372 customers, and 4,070 unique products.

## Technical approach {#technical-approach}

- Clean missing customer IDs, cancellations, invalid quantities, and invalid prices.
- Create Recency, Frequency, and Monetary features and compare clustering approaches.
- Build a France transaction matrix and run Apriori association-rule mining.
- Interpret segments and rules as retention, reactivation, cross-selling, and loyalty opportunities.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- K-Means produced three customer segments with silhouette 0.4599.
- The final setup identified Regular, Dormant/At-Risk, and VIP/High-Value customers.
- Market basket analysis produced 23 final rules after support, confidence, and lift filtering.

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

- Compare additional clustering methods and stability checks.
- Add cohort analysis and customer lifetime value features.
- Turn rules into ranked recommendation candidates with clearer business constraints.

## Technical contribution {#what-this-project-demonstrates}

The project connects unsupervised learning with business interpretation across customer behavior and product relationships.
