---
title: "PPE Safety Detection"
excerpt: "Real-time safety monitoring workflow for construction sites using object detection, interactive analysis, reporting, and privacy-aware face blurring."
image: /assets/images/projects/ppe-safety-detection.png
lang: en
dir: ltr
alternate_url: "/ar/projects/ppe-safety-detection/"
last_modified_at: 2026-07-03
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

{% assign project = site.data.projects | where: "slug", "ppe-safety-detection" | first %}

{% assign aa_project_subtitle = "Workplace safety vision system with privacy-aware outputs" %}
{% assign aa_project_summary = "This project builds a visual monitoring system for construction-site safety. It detects workers, safety equipment, and violations, supports image/video/webcam inputs, generates reports, and includes a privacy mode that blurs faces automatically." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Construction safety monitoring needs fast detection of missing protective equipment.
- Visual systems should support multiple input modes and practical review workflows.
- Monitoring people raises privacy concerns, so the interface needs built-in privacy protection.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Site media</strong><small>image, video, and webcam</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Detection</strong><small>equipment and violations</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Privacy layer</strong><small>automatic face blurring</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Reporting</strong><small>filters and CSV logs</small></div>
</div>

## Data and inputs {#data-and-inputs}

- Roboflow Site Construction Safety Dataset.
- Started with 2,777 images and expanded to 6,630 images through augmentation.
- The isolated test set contains 287 images resized for the detection workflow.

## Technical approach {#technical-approach}

- Train a YOLOv8-based detection model for PPE and construction-site objects.
- Detect classes such as Hardhat, Safety Vest, Mask, Person, Machinery, Vehicle, and violation classes such as NO-Hardhat.
- Build a Streamlit interface for image upload, clipboard input, video processing, and webcam snapshot analysis.
- Add class filtering, confidence threshold control, CSV reporting, and face blurring.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- The system reports mAP@50 of 80.2%, precision of 89.3%, and recall of 71.7% on the test setup.
- The interface supports image, video, and webcam-based demonstrations.
- Privacy mode automatically blurs detected faces while preserving safety-compliance context.
- Class filtering and CSV export make the results easier to review after analysis.

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

- Improve recall for smaller or visually ambiguous objects.
- Add stronger field validation across sites, cameras, and lighting conditions.
- Extend reporting with trend dashboards and threshold calibration.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates applied visual AI for operational safety: combining detection, interface design, privacy protection, and reporting into one practical workflow.
