---
title: "MNIST ViT vs CNN Comparison"
excerpt: "Image-classification comparison between a fine-tuned Vision Transformer and a lightweight CNN baseline with accuracy, runtime, and confusion-matrix analysis."
image: /assets/images/projects/mnist-vit-cnn-comparison.png
lang: en
dir: ltr
alternate_url: "/ar/projects/mnist-vit-cnn-comparison/"
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

{% assign project = site.data.projects | where: "slug", "mnist-vit-cnn-comparison" | first %}

{% assign aa_project_subtitle = "Accuracy–efficiency tradeoffs in visual classification" %}
{% assign aa_project_summary = "This project compares a fine-tuned Vision Transformer with a lightweight CNN baseline on an MNIST subset. It focuses on the practical tradeoff between transfer-learning accuracy and training efficiency." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Higher accuracy can come with substantial compute cost.
- Simple baselines are valuable when speed and resource constraints matter.
- Model selection should consider accuracy, latency, training cost, and the intended use context.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>MNIST subset</strong><small>Digits 0–9</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="vision" %}</span><strong>ViT branch</strong><small>Transfer learning</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>CNN baseline</strong><small>Lightweight training</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Tradeoff review</strong><small>Accuracy and time</small></div>
</div>

## Data and inputs {#data-and-inputs}

- MNIST subset with 4,000 training images and 1,000 test images.
- Vision Transformer branch resizes grayscale digits to 224×224 RGB.
- CNN branch keeps the original 28×28 grayscale format.

## Technical approach {#technical-approach}

- Fine-tune a pre-trained Vision Transformer for digit classification.
- Train a simple CNN baseline from scratch.
- Compare confusion matrices, accuracy, and training time.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- The Vision Transformer reached 98.10% accuracy.
- The CNN reached 91.50% accuracy but trained in 3.76 seconds compared with 441.03 seconds for ViT.
- The CNN trained about 117× faster, making the tradeoff clear.

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

- Evaluate more architectures and larger sample sizes.
- Add latency and memory-use comparisons.
- Test robustness on shifted or noisy digit inputs.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates disciplined model comparison by weighing accuracy against speed, simplicity, and practical use constraints.
