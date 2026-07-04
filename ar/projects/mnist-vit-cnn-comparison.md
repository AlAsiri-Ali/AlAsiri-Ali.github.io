---
layout: single
permalink: /ar/projects/mnist-vit-cnn-comparison/
title: "MNIST ViT vs CNN Comparison"
excerpt: "مقارنة تصنيف صور بين Vision Transformer مضبوط ونموذج CNN خفيف مع تحليل الدقة، زمن التدريب، ومصفوفات الالتباس."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/mnist-vit-cnn-comparison/"
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
image: /assets/images/projects/mnist-vit-cnn-comparison.png
---

{% assign project = site.data.projects_ar | where: "slug", "mnist-vit-cnn-comparison" | first %}

{% assign aa_project_subtitle = "مفاضلة الدقة والكفاءة في التصنيف البصري" %}
{% assign aa_project_summary = "يقارن هذا المشروع بين Vision Transformer مضبوط ونموذج CNN خفيف على عينة من MNIST. يركز على المفاضلة العملية بين دقة transfer learning وكفاءة التدريب." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- الدقة الأعلى قد تأتي بتكلفة حوسبية كبيرة.
- النماذج المرجعية البسيطة مهمة عندما تكون السرعة والموارد محدودة.
- اختيار النموذج يجب أن يراعي الدقة والزمن والتكلفة وسياق النشر.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="مسار المشروع">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>عينة MNIST</strong><small>الأرقام 0–9</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="vision" %}</span><strong>مسار ViT</strong><small>Transfer learning</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>نموذج CNN مرجعي</strong><small>تدريب خفيف</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>مراجعة المفاضلة</strong><small>دقة وزمن</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- عينة MNIST من 4,000 صورة تدريب و1,000 صورة اختبار.
- مسار Vision Transformer يحول الأرقام الرمادية إلى 224×224 RGB.
- مسار CNN يحافظ على الصيغة الرمادية الأصلية 28×28.

## المنهجية التقنية {#technical-approach}

- ضبط Vision Transformer مدرب مسبقًا لتصنيف الأرقام.
- تدريب CNN بسيط من الصفر.
- مقارنة مصفوفات الالتباس، الدقة، وزمن التدريب.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق Vision Transformer دقة 98.10%.
- حقق CNN دقة 91.50% لكنه تدرب خلال 3.76 ثانية مقارنة بـ441.03 ثانية لـViT.
- تدرب CNN أسرع بنحو 117×، ما يجعل المفاضلة واضحة.

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

- تقييم معماريات أكثر وأحجام عينات أكبر.
- إضافة مقارنة للزمن أثناء الاستدلال واستهلاك الذاكرة.
- اختبار المتانة على أرقام مشوشة أو مختلفة التوزيع.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع مقارنة منضبطة بين النماذج عبر وزن الدقة مقابل السرعة والبساطة وقيود النشر.
