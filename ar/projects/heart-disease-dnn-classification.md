---
layout: single
permalink: /ar/projects/heart-disease-dnn-classification/
title: "Heart Disease DNN Classification"
excerpt: "سير عمل لشبكة عصبية عميقة لتصنيف خطر أمراض القلب باستخدام معالجة بيانات جدولية، ضبط النموذج، تقييم ROC/AUC، وتحليل الأخطاء."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/heart-disease-dnn-classification/"
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
image: /assets/images/projects/heart-disease-dnn-classification.png
---

{% assign project = site.data.projects_ar | where: "slug", "heart-disease-dnn-classification" | first %}

{% assign aa_project_subtitle = "نمذجة بيانات جدولية وتقييم تشخيصي" %}
{% assign aa_project_summary = "يبني هذا المشروع مصنفًا بشبكة عصبية للتنبؤ بأمراض القلب من خصائص سريرية منظمة. يركز على المعالجة المسبقة، ضبط النموذج، تقييم ROC/AUC، وتحليل الأخطاء بدل الاكتفاء بدقة إجمالية واحدة." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- البيانات السريرية الجدولية تحتاج ترميزًا وتقييسًا وانضباطًا في تقسيم البيانات.
- المصنف المفيد يحتاج تقييمًا متوازنًا لكل فئة، وليس دقة كلية فقط.
- النمذجة على بيانات ذات طابع صحي يجب أن تفصل بوضوح بين نتائج التقييم واتخاذ القرار السريري.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="مسار المشروع">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>بيانات منظمة</strong><small>خصائص بنمط سريري</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>معالجة مسبقة</strong><small>ترميز وتقييس</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>مصنف DNN</strong><small>شبكة مضبوطة</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم تشخيصي</strong><small>ROC وF1 وتحليل أخطاء</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- مجموعة Heart Disease من Kaggle المبنية على خصائص شبيهة ببيانات UCI.
- 1,025 سجلًا، و14 خاصية أصلية، وهدف ثنائي: وجود المرض أو عدمه.
- مصفوفة خصائص نهائية من 27 خاصية بعد الترميز والتقييس مع تقسيم 70/10/20.

## المنهجية التقنية {#technical-approach}

- ترميز المتغيرات الفئوية وتقييس المتغيرات العددية.
- تدريب عدة نماذج DNN مع early stopping ومتابعة التحقق.
- مقارنة النموذج الأساسي والمحسن وتجارب dropout وL2 وBatchNorm.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- أفضل نموذج حقق دقة اختبار 0.9659 وweighted F1 بقيمة 0.9658 وAUC بقيمة 0.9813.
- بلغ استدعاء فئة المرض 0.9905، مع 7 أخطاء فقط من أصل 205 عينة اختبار.
- يراجع التحليل المقاييس الكلية والأخطاء القليلة المتبقية.

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

يوضح المشروع النمذجة والتقييم على بيانات ذات طابع صحي، ولا يُستخدم لاتخاذ قرارات سريرية. أي استخدام طبي فعلي يتطلب تحققًا خارجيًا، مراجعة مختصين، معايرة، وضوابط تنظيمية.

## التطوير القادم {#future-development}

- إضافة تحقق خارجي على مجموعة بيانات أخرى.
- مقارنة نماذج شجرية واحتمالات معايرة.
- توسيع تحليل الأخطاء بتفسير الخصائص.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع نمذجة مراقبة منضبطة على بيانات حساسة: معالجة مسبقة، ضبط، مقاييس تشخيصية، وتفسير مسؤول.
