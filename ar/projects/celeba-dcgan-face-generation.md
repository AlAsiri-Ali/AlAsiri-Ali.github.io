---
layout: single
permalink: /ar/projects/celeba-dcgan-face-generation/
title: "CelebA DCGAN Face Generation"
excerpt: "سير عمل DCGAN لتوليد صور وجوه اصطناعية عبر تدريب مولد ومميز، حفظ عينات، checkpoints، وتحليل سلوك التدريب."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/celeba-dcgan-face-generation/"
toc: false
toc_sticky: false
last_modified_at: 2026-06-30
classes:
  - aa-project-page
hide_title: true
hide_meta_footer: true
hide_pagination: true
share: false
breadcrumbs: false
toc_h_min: 2
image: /assets/images/projects/celeba-dcgan-face-generation.png
---

{% assign project = site.data.projects_ar | where: "slug", "celeba-dcgan-face-generation" | first %}

{% assign aa_project_subtitle = "توليد صور تنافسي وتحليل سلوك التدريب" %}
{% assign aa_project_summary = "ينفذ هذا المشروع سير عمل DCGAN لتوليد صور وجوه اصطناعية على CelebA. يدرس سلوك المولد والمميز، تطور العينات، وعدم الاستقرار العملي في التدريب التنافسي." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- النمذجة التوليدية تحتاج فحصًا يتجاوز شبكة العينات النهائية.
- منحنيات خسارة GAN صعبة التفسير لأن شبكتين تتنافسان.
- قد تتحسن العينات تدريجيًا مع استمرار وجود آثار ضبابية وتشوهات.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="مسار المشروع">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>صور CelebA</strong><small>مدخلات 64×64</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>مولد</strong><small>ضوضاء إلى صورة</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="shield" %}</span><strong>مميز</strong><small>إشارة حقيقي/مزيف</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>مراجعة التدريب</strong><small>عينات وخسائر</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- مجموعة CelebA تحتوي على 202,599 صورة وجه.
- تم تغيير حجم الصور إلى 64×64 لسير عمل DCGAN.
- إعداد التدريب يستخدم 15 حقبة ويحفظ عينات وcheckpoints.

## المنهجية التقنية {#technical-approach}

- المولد يحول متجهات ضوضاء كامنة إلى صور اصطناعية.
- المميز يتعلم التفريق بين الصور الحقيقية والمولدة.
- التدريب يتتبع الشبكتين ويحفظ المخرجات عبر الحقب.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- بدأت المخرجات بإظهار بنية شبيهة بالوجوه.
- بقيت بعض التشوهات والمناطق الضبابية، وهذا متوقع في إعداد DCGAN أساسي بحجم 64×64.
- يوضح المشروع أهمية العينات والcheckpoints لتشخيص تطور التدريب.

## التنفيذ والكود {#repository-details}

<div class="aa-case-grid">
  <div class="aa-card">
    <div class="aa-icon" aria-hidden="true">{% include aa/icon.html name="code" %}</div>
    <h3>محور التنفيذ</h3>
    <p>يربط التنفيذ بين تجهيز البيانات، النمذجة، التقييم، وتفسير النتائج ضمن سير عمل منظم يوضح القرارات التقنية.</p>
  </div>
  <div class="aa-card">
    <div class="aa-icon" aria-hidden="true">{% include aa/icon.html name="github" %}</div>
    <h3>الكود المصدري</h3>
    <p>الكود متاح لاستكشاف تفاصيل التنفيذ وتوسيع التجربة عند الحاجة.</p>
    <p><a class="aa-button aa-button-primary" href="{{ project.links.repo }}" target="_blank" rel="noopener noreferrer">{% include aa/icon.html name="external" %}<span>فتح الكود المصدري</span></a></p>
  </div>
</div>

## نطاق المشروع والاستخدام المسؤول {#operational-boundaries}

هذا مشروع نمذجة وتقييم مركز. أي استخدام أوسع يحتاج تحققًا على بيانات إضافية، اختبارات متانة، مراقبة، وتقييمًا خاصًا بالسياق المقصود.

## التطوير القادم {#future-development}

- تجربة معماريات GAN أقوى ودقة أعلى.
- إضافة مقاييس كمية لجودة الصور وشبكات عينات عبر الحقب.
- استكشاف latent interpolation والتحكم في السلوك التوليدي.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع التعلم التنافسي كسير عمل: بنية النموذج، ديناميكيات التدريب، فحص العينات، وحدود النماذج التوليدية البسيطة.
