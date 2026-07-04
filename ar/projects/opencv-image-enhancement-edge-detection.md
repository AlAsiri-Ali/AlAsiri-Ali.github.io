---
layout: single
permalink: /ar/projects/opencv-image-enhancement-edge-detection/
title: "OpenCV Image Enhancement & Edge Detection"
excerpt: "سير عمل رؤية حاسوبية كلاسيكي يستخدم CLAHE وthresholding وكشف الحواف Canny وتحليل contours ومعالجة إطارات الفيديو."
author_profile: false
image: /assets/images/projects/opencv-image-enhancement-edge-detection.png
lang: ar
dir: rtl
alternate_url: "/projects/opencv-image-enhancement-edge-detection/"
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

{% assign project = site.data.projects_ar | where: "slug", "opencv-image-enhancement-edge-detection" | first %}

{% assign aa_project_subtitle = "معالجة بصرية كلاسيكية واستخراج حدود الكائنات" %}
{% assign aa_project_summary = "يستكشف هذا المشروع كيف يمكن لتقنيات معالجة الصور الكلاسيكية تحسين البنية البصرية قبل مهام الرؤية الحاسوبية اللاحقة. يطبق تحسين التباين، thresholding، كشف الحواف، تحليل contours، ومعالجة الفيديو إطارًا بإطار على عينات بصرية طبيعية." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- المشاهد الطبيعية قد تحتوي على إضاءة غير متوازنة وظلال وملمس وخلفيات مزدحمة.
- المعالجة المسبقة يجب أن تحسن وضوح البنية دون إتلاف التفاصيل المفيدة.
- ينبغي أن تظل نفس الفكرة قابلة للتفسير عند تطبيقها على الصور الثابتة وإطارات الفيديو.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>عينات بصرية</strong><small>مشاهد واقعية</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>تحسين الصورة</strong><small>تباين وthresholding</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>استخراج الحدود</strong><small>حواف وcontours</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>مراجعة الجودة</strong><small>مقارنة بصرية ورقمية</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- مجموعة صغيرة من صور واقعية من Open Images.
- مقطع فيديو قصير عولج إطارًا بإطار باستخدام منطق التحسين وكشف الحواف نفسه.
- تشمل المخرجات مقارنات CLAHE، نتائج thresholding، خرائط الحواف، contours، ومقاييس بسيطة لجودة المعالجة.

## المنهجية التقنية {#technical-approach}

- تحويل الصور إلى تدرج رمادي للتركيز على شدة الإضاءة.
- تطبيق CLAHE لتحسين التباين المحلي دون رفع السطوع بشكل مفرط.
- مقارنة Otsu وadaptive thresholding لفصل البنية عن الخلفية.
- استخدام Canny وفلترة contours لجعل الحدود أسهل للفحص.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حسّن CLAHE التباين المحلي في المشاهد الخارجية دون تشويه السطوع.
- كان adaptive thresholding أفضل مع الإضاءة غير المتوازنة مقارنة بالعتبة العامة.
- حافظ Canny على حدود مهمة مع تقليل الضوضاء البصرية.
- قدمت كثافة الحواف ومتوسط مساحة contours مؤشرات رقمية بسيطة لمقارنة المخرجات.

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

- اختبار المسار على مشاهد بصرية أكبر وأكثر تنوعًا.
- مقارنة المعالجة اليدوية مع نماذج segmentation أو detection تعلمية.
- إضافة واجهة تفاعلية للتحكم في معاملات threshold وcontour filtering.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع معالجة بصرية منضبطة: فهم بنية الصورة، مقارنة الطرق الكلاسيكية، وتحويل المدخلات الخام إلى حدود قابلة للتفسير.
