---
title: "Gomoku Master"
excerpt: "Interactive strategy-game AI implementation with configurable board sizes, difficulty levels, and search-based decision logic."
image: /assets/images/projects/gomoku-master.png
lang: en
dir: ltr
alternate_url: "/ar/projects/gomoku-master/"
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

{% assign project = site.data.projects | where: "slug", "gomoku-master" | first %}

{% assign aa_project_subtitle = "Interactive strategy search system" %}
{% assign aa_project_summary = "This project implements Gomoku as a playable strategy game with an AI opponent. It focuses on board-state representation, search-based move selection, configurable difficulty, and practical game-loop design for an interactive decision-making system." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='en' %}


## Challenge {#challenge}

- A playable board-game AI needs to evaluate many possible future states while staying responsive to the player.
- Difficulty control should make the system usable for different experience levels.
- The implementation needs a clear game loop, valid-move handling, and strategic scoring rather than random action selection.

## System architecture {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>Board state</strong><small>stones and valid moves</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>Search engine</strong><small>Negamax and SSS*</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>Scoring</strong><small>line-based evaluation</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="rocket" %}</span><strong>Move output</strong><small>difficulty-aware play</small></div>
</div>

## Data and inputs {#data-and-inputs}

- The main input is the current Gomoku board state and the player's move choices.
- The game supports multiple board sizes, including 9x9, 13x13, 15x15, and 19x19.
- The AI uses difficulty levels to control the search depth and decision behavior.

## Technical approach {#technical-approach}

- Implement Gomoku rules for five-in-a-row wins across horizontal, vertical, and diagonal lines.
- Use easyAI-based game logic with Negamax search, alpha-beta pruning, and transposition tables.
- Support an additional SSS* search option for alternative game-tree exploration.
- Score board positions according to line strength so the AI can prioritize strategic patterns.

## Evaluation and results {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='en' %}

- The implementation supports interactive play against an AI opponent with configurable difficulty.
- Search-based decision logic makes the opponent evaluate board positions instead of selecting moves randomly.
- Testing and benchmarking support continued improvement of the game engine.

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

The project demonstrates game-AI search and interactive implementation. Larger boards or stronger difficulty settings may require search-cost optimization and additional usability testing.

## Future development {#future-development}

- Improve the graphical interface and player experience.
- Expand benchmarking across algorithms and difficulty levels.
- Add richer game modes, saved games, and additional strategy diagnostics.

## Technical contribution {#what-this-project-demonstrates}

The project demonstrates algorithmic AI design for interactive systems: representing a state space, evaluating decisions, controlling difficulty, and keeping the experience playable.
