---
title: "Frequency-Aware Deepfake Detection"
excerpt: "Research implementation of spatial and frequency-aware deepfake detection under H.264 lossy compression and cross-dataset evaluation."
image: /assets/images/projects/deepfake-detection-compression.png
lang: en
dir: ltr
alternate_url: "/ar/projects/deepfake-detection-compression/"
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

{% assign project = site.data.projects | where: "slug", "deepfake-detection-compression" | first %}

{% assign aa_project_subtitle = "Frequency-aware robustness study for deepfake detection" %}
{% assign aa_project_summary = "This research project studies how lossy H.264 compression affects deepfake detection. It compares a spatial XceptionNet-style baseline with a hybrid model that adds frequency-domain signals through DCT features, learnable masking, and cross-attention fusion." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Deepfake detectors can perform strongly on clean benchmark data but degrade after platform recompression.
- Compression may remove or distort subtle artifacts that detectors rely on.
- A robust evaluation needs matched compression settings and external cross-dataset testing.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Deepfake detection pipeline">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="vision" %}</span><strong>Face crops</strong><small>Frame extraction and detection</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Spatial branch</strong><small>XceptionNet-style baseline</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Frequency branch</strong><small>DCT features and masking</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Fusion + metrics</strong><small>Cross-attention and video aggregation</small></div>
</div>

## Data and inputs {#data-and-inputs}

- FaceForensics++ c23 for primary training and in-distribution evaluation.
- Matched FF++ c40 setting to test heavier H.264 compression.
- Celeb-DF v2 as an external dataset for cross-dataset testing without fine-tuning.

## Technical approach {#technical-approach}

- Spatial XceptionNet-style baseline for RGB face-crop classification.
- Frequency branch based on DCT representations to capture compression-sensitive artifacts.
- Learnable frequency masking to reduce overfitting to narrow spectral cues.
- Cross-attention fusion between spatial and frequency tokens.
- Video-level aggregation across repeated random seeds for more stable reporting.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- Spatial baseline remained highly competitive under FF++ c23.
- The hybrid frequency-aware model improved the reported FF++ c40 accuracy and Celeb-DF AUC.
- The evaluation separates in-distribution performance, heavy-compression robustness, and external generalization.

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

- Add calibration curves and threshold analysis for operational decision-making.
- Evaluate more codecs, resolutions, and platform-like preprocessing chains.
- Add interpretable frequency visualizations to show what the hybrid branch is learning.

## Technical contribution {#what-this-project-demonstrates}

This project combines research-oriented AI evaluation with baseline comparison, hybrid architecture design, robustness testing, cross-dataset validation, and careful reporting across random seeds.
