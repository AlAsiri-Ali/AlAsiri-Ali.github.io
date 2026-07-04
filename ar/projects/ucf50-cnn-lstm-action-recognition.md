---
layout: single
permalink: /ar/projects/ucf50-cnn-lstm-action-recognition/
title: "UCF50 CNN-LSTM Action Recognition"
excerpt: "سير عمل للتعرف على الأفعال في الفيديو يجمع بين استخراج الخصائص البصرية عبر CNN والنمذجة الزمنية عبر RNN/LSTM مع مقارنة الأداء."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/ucf50-cnn-lstm-action-recognition/"
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
image: /assets/images/projects/ucf50-cnn-lstm-action-recognition.png
---

{% assign project = site.data.projects_ar | where: "slug", "ucf50-cnn-lstm-action-recognition" | first %}

{% assign aa_project_subtitle = "فهم الفيديو عبر النمذجة البصرية والزمنية" %}
{% assign aa_project_summary = "يدرس هذا المشروع التعرف على الأفعال في الفيديو عبر استخراج خصائص مكانية من الإطارات باستخدام CNN ثم مقارنة RNN وLSTM للنمذجة الزمنية والتصنيف النهائي." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- تصنيف الفيديو يحتاج فهم تغير الخصائص البصرية عبر الزمن.
- مصنف الإطارات وحده لا يمثل أنماط الحركة الزمنية.
- المقارنة الجيدة تفسر اختلاف نماذج التسلسل بدل عرض الدقة فقط.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="مسار المشروع">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>مقاطع فيديو</strong><small>إطارات عينة</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="vision" %}</span><strong>مرمز CNN</strong><small>خصائص مكانية</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>نموذج تسلسلي</strong><small>RNN أو LSTM</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تنبؤ الفعل</strong><small>تقييم 50 فئة</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- مجموعة UCF50 Action Recognition من Kaggle.
- 6,681 فيديو ضمن 50 فئة أفعال.
- أخذ 15 إطارًا موزعًا بالتساوي من كل فيديو، بحجم 64×64 وتطبيع إلى [0, 1].

## المنهجية التقنية {#technical-approach}

- استخدام CNN بثلاث كتل لاستخراج خصائص الإطارات.
- تمرير تسلسل الخصائص إلى مصنفات RNN وLSTM.
- مقارنة دقة التحقق وmacro F1 لفهم أثر النمذجة الزمنية.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق CNN+LSTM دقة تحقق 0.4734 وmacro F1 بقيمة 0.4548.
- حقق CNN+RNN دقة تحقق 0.4263 وmacro F1 بقيمة 0.4071.
- يركز المشروع على تفسير المقارنة تحت قيود الدقة الزمنية وحجم التدريب.

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

- استخدام دقة إطارات أعلى وتدريب أطول.
- مقارنة 3D CNN أو نماذج فيديو حديثة.
- إضافة تحليل مصفوفة الالتباس للفئات المتشابهة بصريًا.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع الفرق بين تصنيف الصور وفهم الفيديو عبر الجمع بين استخراج الخصائص البصرية والنمذجة الزمنية.
