---
title: "تصنيف سرطان الثدي باستخدام Naive Bayes"
excerpt: "سير عمل لتصنيف بيانات صحية يركز على تحليل الخصائص التشخيصية، بناء نموذج مرجعي، وقراءة سلوك التقييم على مستوى الفئات."
image: /assets/images/projects/breast-cancer-naive-bayes-classification.png
lang: ar
dir: rtl
permalink: /ar/projects/breast-cancer-naive-bayes-classification/
alternate_url: "/projects/breast-cancer-naive-bayes-classification/"
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

{% assign project = site.data.projects_ar | where: "slug", "breast-cancer-naive-bayes-classification" | first %}

{% assign aa_project_subtitle = "سير عمل لتصنيف بيانات صحية" %}
{% assign aa_project_summary = "يبني هذا المشروع سير عمل تعلم آلة لتصنيف بيانات تشخيصية منظمة. يركز على التحليل الاستكشافي، تحجيم الخصائص، النمذجة الاحتمالية، وتقييم النتائج بطريقة تميز بين الدقة العامة وسلوك كل فئة." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}


## التحدي {#challenge}

- تحتاج البيانات الصحية المنظمة إلى قراءة دقيقة لأن استرجاع بعض الفئات قد يكون أهم من الدقة العامة فقط.
- الخصائص التشخيصية الرقمية تحتاج تحليلًا وتحجيمًا وتفسيرًا قبل الاعتماد على نتائج النموذج.
- النموذج المرجعي الخفيف يساعد على فهم قابلية الفصل بين الفئات قبل استخدام نماذج أكثر تعقيدًا.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>خصائص تشخيصية</strong><small>قياسات رقمية</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>تحليل وتحجيم</strong><small>مراجعة التوزيعات</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>نموذج احتمالي</strong><small>Gaussian NB</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>دقة واسترجاع</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- بيانات Breast Cancer Wisconsin من scikit-learn.
- 569 عينة مع 30 خاصية تشخيصية رقمية.
- هدف ثنائي بين benign و malignant.

## المنهجية التقنية {#technical-approach}

- مراجعة التوزيعات والارتباطات وأنماط الفئات.
- تحجيم الخصائص الرقمية قبل التدريب.
- تدريب Gaussian Naive Bayes كنموذج احتمالي سريع وقابل للتفسير.
- تقييم الدقة، precision، recall، F1-score، ومصفوفة الالتباس.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق النموذج دقة اختبار 96%.
- وصل استرجاع الفئة الخبيثة إلى 0.99 في التقييم الموثق.
- تقارب دقة التدريب والاختبار يشير إلى عدم وجود فرط ملاءمة شديد في هذا النموذج المرجعي.

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

- مقارنة نماذج إضافية ومخرجات احتمالية مُعايرة.
- إضافة أدوات تفسير للخصائص التشخيصية المؤثرة.
- اختبار المتانة على بيانات خارجية وتقسيمات تدريب مختلفة.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع أهمية التقييم المنضبط في التصنيف الحساس: فهم البيانات، بناء نموذج مرجعي قابل للتفسير، وقراءة مقاييس الفئات بدل الاعتماد على الدقة فقط.
