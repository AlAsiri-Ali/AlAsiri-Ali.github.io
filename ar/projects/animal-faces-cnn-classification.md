---
layout: single
permalink: /ar/projects/animal-faces-cnn-classification/
title: "Animal Faces CNN Classification"
excerpt: "سير عمل لتصنيف صور وجوه الحيوانات إلى Cat وDog وWild باستخدام augmentation، callbacks، وتقييم بصري للنتائج."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/animal-faces-cnn-classification/"
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
image: /assets/images/projects/animal-faces-cnn-classification.png
---

{% assign project = site.data.projects_ar | where: "slug", "animal-faces-cnn-classification" | first %}

{% assign aa_project_subtitle = "تصنيف بصري مع تقييم متوازن" %}
{% assign aa_project_summary = "يدرّب هذا المشروع نموذج CNN لتصنيف وجوه الحيوانات إلى Cat وDog وWild. يركز على تجهيز الصور، augmentation، التدريب باستخدام callbacks، ومراجعة الأداء على مستوى الفئات." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- الفئات البصرية قد تتداخل بسبب التنوع الكبير داخل كل فئة.
- التدريب يحتاج augmentation وcallbacks لتقليل فرط التخصيص وتثبيت التعلم.
- التقييم يجب أن يراجع سلوك كل فئة، لا رقم الدقة وحده.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="مسار المشروع">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>مجموعة صور</strong><small>Cat وDog وWild</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="vision" %}</span><strong>تعلم خصائص CNN</strong><small>طبقات convolution</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>ضبط التدريب</strong><small>callbacks وcheckpoints</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>مصفوفة التباس وأمثلة</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- مجموعة Animal Faces بثلاث فئات: Cat وDog وWild.
- مدخلات RGB بحجم 128×128 مع تطبيع القيم إلى [0, 1].
- 11,706 صورة تدريب و2,924 صورة اختبار/تحقق.

## المنهجية التقنية {#technical-approach}

- استخدام كتل convolution متتابعة مع max pooling وbatch normalization وdropout.
- التدريب باستخدام Adam وearly stopping وتقليل معدل التعلم وحفظ أفضل checkpoint.
- مراجعة منحنيات التدريب، مصفوفة الالتباس، وأمثلة التنبؤ.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق النموذج دقة كلية 0.9593 عبر الفئات الثلاث.
- كانت فئة Cat الأقوى، بينما انخفض recall لفئة Wild بسبب التنوع البصري الأكبر.
- أظهرت منحنيات التدريب تقاربًا مستقرًا دون فرط تخصيص شديد.

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

- إضافة سياسات augmentation أقوى ونماذج transfer learning.
- تحليل الأخطاء حسب النوع وجودة الصورة.
- تغليف المصنف في واجهة تجريبية صغيرة.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع سير عمل التصنيف البصري كاملًا: تجهيز الصور، ضبط التدريب، مقاييس الفئات، وفحص الأخطاء بصريًا.
