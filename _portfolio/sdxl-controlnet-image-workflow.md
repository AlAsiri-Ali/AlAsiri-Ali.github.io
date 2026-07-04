---
title: "SDXL ControlNet Image Workflow"
excerpt: "Diffusion image workflow comparing SDXL text-to-image generation, Img2Img semantic editing, ControlNet Canny guidance, and LPIPS/PSNR evaluation."
image: /assets/images/projects/sdxl-controlnet-image-workflow.png
lang: en
dir: ltr
alternate_url: "/ar/projects/sdxl-controlnet-image-workflow/"
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

{% assign project = site.data.projects | where: "slug", "sdxl-controlnet-image-workflow" | first %}

{% assign aa_project_subtitle = "Controlled image generation and evaluation workflow" %}
{% assign aa_project_summary = "This project explores a diffusion-image workflow that starts with SDXL text-to-image generation, applies Img2Img semantic editing, uses ControlNet Canny guidance for structure, and evaluates perceptual and pixel-level change." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}

## Challenge {#challenge}

- Text-to-image models can generate strong visuals but do not always preserve structure across edits.
- Img2Img can change semantic content while also drifting from the original geometry.
- ControlNet gives a way to preserve structure while allowing style and lighting changes.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>Text prompt</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>SDXL baseline</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Img2Img edit</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>ControlNet Canny output</strong></div>
</div>

## Data and inputs {#data-and-inputs}

A futuristic city scene is used as the controlled test case, with Canny edges extracted from the baseline image for structural guidance.

## Technical approach {#technical-approach}

- Generate a baseline image with SDXL using a detailed prompt.
- Apply Img2Img to add new semantic content while keeping the general style.
- Use ControlNet Canny to transform the scene while preserving skyline geometry.
- Evaluate the resulting image with LPIPS and PSNR.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- ControlNet preserved skyline geometry more effectively than plain Img2Img.
- LPIPS captured a meaningful perceptual shift while the scene identity remained recognizable.
- The low PSNR was expected because the output changed lighting and colors substantially.

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

- Compare additional ControlNet conditions and conditioning strengths.
- Add seed sweeps to separate prompt effects from sampling variation.
- Build a small gallery that compares outputs side by side.

## Technical contribution {#what-this-project-demonstrates}

The project shows how controlled generative-image workflows can combine creative editing with structural guidance and measurable image comparison.
