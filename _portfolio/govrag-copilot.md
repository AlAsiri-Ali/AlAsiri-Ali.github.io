---
title: "GovRAG Copilot"
excerpt: "Evidence-grounded bilingual RAG assistant for Saudi PDPL and SDAIA guidance with retrieval, citations, drafting, gap detection, and visual outputs."
image: /assets/images/projects/govrag-copilot.png
lang: en
dir: ltr
alternate_url: "/ar/projects/govrag-copilot/"
last_modified_at: 2026-06-29
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

{% assign project = site.data.projects | where: "slug", "govrag-copilot" | first %}

{% assign aa_project_subtitle = "Evidence-grounded regulatory RAG system" %}
{% assign aa_project_summary = "GovRAG Copilot is a bilingual Retrieval-Augmented Generation system designed around Saudi PDPL and SDAIA guidance. It focuses on traceable answers, structured compliance drafting, gap detection, and visual outputs grounded in source evidence." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- PDPL and related guidance can be distributed across Arabic and English regulatory documents.
- Users need answers that point back to source passages rather than unsupported model text.
- Compliance workflows often require structured outputs such as privacy notices, ROPA entries, breach drafts, and transfer assessments.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="GovRAG pipeline">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Regulatory sources</strong><small>PDPL and SDAIA documents</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Article chunks</strong><small>Arabic normalization and metadata</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="search" %}</span><strong>Hybrid retrieval</strong><small>BM25 + TF-IDF</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Grounded output</strong><small>Q&A, drafting, visuals, citations</small></div>
</div>

## Data and inputs {#data-and-inputs}

- Arabic and English regulatory documents split into article-aware chunks.
- Page, article, and citation metadata attached to retrieved passages.
- A controlled query flow that normalizes Arabic text and expands compliance terminology.

## Technical approach {#technical-approach}

- Ingestion pipeline prepares source documents and stores article-level chunks.
- Hybrid retrieval combines BM25 and TF-IDF to balance exact legal terms with broader topical matches.
- Generation layer supports extractive, local Ollama, and HuggingFace/Qwen-style backends.
- Gradio interface separates question answering, drafting, gap detection, search inspection, visuals, and project information.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- Used automated tests to check important behaviors and template outputs.
- Tracked document coverage through 238 article-level chunks.
- Focused evaluation on retrieval quality, citation discipline, faithfulness, completeness, and bilingual consistency.

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

- Add a formal retrieval benchmark with labeled question-answer-citation pairs.
- Add freshness checks for updated PDPL/SDAIA documents.
- Improve answer evaluation with stronger faithfulness and citation-support scoring.

## Technical contribution {#what-this-project-demonstrates}

GovRAG brings together practical RAG engineering: ingestion, retrieval design, multilingual handling, citation discipline, workflow UI design, visual outputs, and evaluation beyond a general chat assistant.
