---
layout: single
permalink: /ar/projects/long-tailed-object-classification-vgg16/
title: "Long-Tailed Object Classification with VGG16"
excerpt: "سير عمل تصنيف بصري يقارن HOG+SVM مع VGG16 بالتعلم النقلي والضبط وfine-tuning على صور غير متوازنة."
author_profile: false
image: /assets/images/projects/long-tailed-object-classification-vgg16.png
lang: ar
dir: rtl
alternate_url: "/projects/long-tailed-object-classification-vgg16/"
last_modified_at: 2026-07-01
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

{% assign project = site.data.projects_ar | where: "slug", "long-tailed-object-classification-vgg16" | first %}

{% assign aa_project_subtitle = "تعلم نقلي للتعرف البصري في بيانات غير متوازنة" %}
{% assign aa_project_summary = "يدرس هذا المشروع التصنيف البصري في توزيع واقعي طويل الذيل. يقارن بين نموذج مرجعي يعتمد على خصائص يدوية وVGG16 بالتعلم النقلي، ثم يقيّم أثر augmentation والضبط وfine-tuning على أداء الفئات." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- مجموعات الصور الواقعية غالبًا غير متوازنة وتحتوي على خلفيات متنوعة.
- النموذج المرجعي التقليدي مفيد للمقارنة لكنه قد يضعف أمام التباين البصري المعقد.
- التقييم يحتاج إلى النظر في أداء الفئات، وليس الدقة الإجمالية فقط.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>بيانات Open Images</strong><small>Car · Dog · Person</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>نموذج مرجعي</strong><small>HOG + SVM</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>تعلم نقلي</strong><small>VGG16 مع رأس تصنيف</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>دقة ومقاييس فئات</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- بيانات Open Images لثلاث فئات: Car وDog وPerson.
- 2,402 صورة تدريب و598 صورة تحقق.
- صور واقعية غير متوازنة بخلفيات وزوايا متنوعة.

## المنهجية التقنية {#technical-approach}

- بناء نموذج HOG+SVM مرجعي لقياس أداء الخصائص التقليدية.
- استخدام VGG16 كمستخرج خصائص مدرب مسبقًا مع رأس تصنيف مخصص.
- تطبيق augmentation وdropout وضبط معدل التعلم لتحسين التعميم.
- إجراء تجربة fine-tuning عبر فتح طبقات أعمق من VGG16.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق HOG+SVM دقة 67.00% وضعف أمام التباين البصري.
- حقق VGG16 المضبوط دقة 92.00% مع توازن أفضل بين الفئات.
- حقق fine-tuned VGG16 دقة 89.30%، نتيجة قوية لكنها لم تتجاوز الإعداد المجمد المضبوط.
- بقيت precision وrecall وF1 متوازنة عبر فئات Car وDog وPerson.

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

- إضافة فئات أكثر وعدم توازن أقوى.
- مقارنة VGG16 بمعماريات أحدث وخفيفة.
- توسيع التفسير عبر saliency maps ومراجعة حالات الفشل.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع كيفية مقارنة الأساليب التقليدية والعميقة في بيانات بصرية غير متوازنة مع استخدام تقييم على مستوى الفئات لتجنب الاستنتاجات المضللة.
