---
title: "Asthma RAG Diagnostic Assistant"
excerpt: "Controlled RAG experiment for asthma-related reasoning using a custom knowledge base, FAISS retrieval, prompt variants, and text-generation metrics."
image: /assets/images/projects/asthma-rag-diagnostic-assistant.png
lang: en
dir: ltr
alternate_url: "/ar/projects/asthma-rag-diagnostic-assistant/"
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

{% assign project = site.data.projects | where: "slug", "asthma-rag-diagnostic-assistant" | first %}

{% assign aa_project_subtitle = "Evidence-grounded diagnostic reasoning experiment" %}
{% assign aa_project_summary = "This project studies how retrieval and prompt design affect asthma-related reasoning in a controlled setting. It compares zero-shot, chain-of-thought, and neutral reasoning prompts over synthetic patient cases with local retrieval and evaluation metrics." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Clinical-style reasoning can be biased by leading prompts.
- Asthma-like symptoms need comparison against alternative explanations such as COPD-like cases.
- A controlled experiment needs synthetic cases, retrieved context, and metrics that reveal both fluency and repetition.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Synthetic case input</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>FAISS retrieval</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Prompt variant</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Local Qwen response</strong></div>
</div>

## Data and inputs {#data-and-inputs}

Custom asthma knowledge base, recursive chunks, sentence-transformer embeddings, FAISS vector store, and 10 synthetic positive/negative patient cases.

## Technical approach {#technical-approach}

- Build a local retrieval index for asthma-related context.
- Compare zero-shot, chain-of-thought, and neutral chain-of-thought prompting.
- Evaluate responses with BLEU, ROUGE-L, METEOR, Distinct-2, perplexity, and Self-BLEU.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- Neutral chain-of-thought improved objectivity in a COPD-like negative case.
- Perplexity, Self-BLEU, and Distinct-2 added useful signals beyond lexical overlap metrics.
- The project highlights that lexical metrics alone are not enough for judging reasoning quality.

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

This project demonstrates modeling and evaluation on health-related data and is not intended for clinical decision-making. Any clinical use would require external validation, expert review, calibration, and regulatory oversight.

## Future development {#future-development}

- Add stronger clinical reasoning rubrics for evaluation.
- Compare more retrieval strategies and larger local models.
- Separate citation support from final-answer fluency.

## Technical contribution {#what-this-project-demonstrates}

The project connects RAG, prompt design, diagnostic-style reasoning, and evaluation discipline in a safety-sensitive setting.
