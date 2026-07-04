---
title: "SMS Spam Transformer Classification"
excerpt: "Transformer-based SMS spam-classification workflow comparing zero-shot classification, fine-tuned BERT, few-shot BERT, and Flan-T5 prompting."
image: /assets/images/projects/sms-spam-transformer-classification.png
lang: en
dir: ltr
alternate_url: "/ar/projects/sms-spam-transformer-classification/"
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

{% assign project = site.data.projects | where: "slug", "sms-spam-transformer-classification" | first %}

{% assign aa_project_subtitle = "Comparative transformer strategies for text classification" %}
{% assign aa_project_summary = "This project compares several transformer-based strategies for SMS spam detection: zero-shot classification, fine-tuned BERT, few-shot BERT, and Flan-T5 prompt-based classification." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Text classification performance depends on task framing and label wording.
- Zero-shot behavior can fail when labels carry domain-specific meaning.
- A fair comparison needs consistent splits and method-level interpretation.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>SMS dataset</strong><small>Ham and spam labels</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="search" %}</span><strong>Task framing</strong><small>Zero-shot / few-shot</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Transformer model</strong><small>BERT and Flan-T5</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Comparison</strong><small>Accuracy and confusion matrices</small></div>
</div>

## Data and inputs {#data-and-inputs}

- SMS Spam Collection dataset with 5,572 messages.
- Binary labels: ham and spam.
- 3,900 training messages, 836 validation messages, and 836 test messages.

## Technical approach {#technical-approach}

- Compare zero-shot NLI-style classification, supervised fine-tuning, few-shot fine-tuning, and generative prompting.
- Evaluate accuracy and confusion matrices for each approach.
- Interpret failures caused by label ambiguity and output parsing.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- Fine-tuned BERT achieved 0.9952 accuracy and the strongest class-level scores.
- Few-shot BERT achieved 0.9294 accuracy with only 20 labeled training examples.
- Zero-shot and generative prompting results showed sensitivity to label wording and prompt/output handling.

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

- Add calibration and cost-sensitive evaluation for spam filtering.
- Test additional label wording and prompt templates.
- Compare lightweight deployable models for latency-sensitive settings.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates that modern language models need careful task framing, evaluation, and method comparison rather than assuming one strategy always works best.
