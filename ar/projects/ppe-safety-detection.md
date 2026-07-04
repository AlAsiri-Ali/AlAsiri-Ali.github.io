---
title: "PPE Safety Detection"
excerpt: "سير عمل لمراقبة السلامة في مواقع البناء باستخدام كشف بصري فوري، واجهة تفاعلية، تقارير، وطمس وجوه لحماية الخصوصية."
image: /assets/images/projects/ppe-safety-detection.png
lang: ar
dir: rtl
alternate_url: "/projects/ppe-safety-detection/"
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

{% assign project = site.data.projects_ar | where: "slug", "ppe-safety-detection" | first %}

{% assign aa_project_subtitle = "نظام رؤية للسلامة المهنية مع مخرجات تراعي الخصوصية" %}
{% assign aa_project_summary = "يبني هذا المشروع نظام مراقبة بصري لسلامة مواقع البناء. يكشف العمال ومعدات الوقاية والمخالفات، يدعم الصور والفيديو ولقطات الكاميرا، ينشئ تقارير، ويتضمن وضع خصوصية يطمس الوجوه تلقائيًا." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- مراقبة سلامة البناء تحتاج كشفًا سريعًا لغياب معدات الوقاية.
- الأنظمة البصرية العملية تحتاج دعم عدة أنواع من المدخلات وسير عمل مناسب للمراجعة.
- مراقبة الأشخاص تثير اعتبارات خصوصية، لذلك تحتاج الواجهة إلى حماية مدمجة للهوية.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>وسائط الموقع</strong><small>صورة وفيديو وكاميرا</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>كشف بصري</strong><small>معدات ومخالفات</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>طبقة خصوصية</strong><small>طمس تلقائي للوجوه</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقارير</strong><small>فلترة وسجلات CSV</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- Roboflow Site Construction Safety Dataset.
- بدأت البيانات بـ 2,777 صورة وتوسعت إلى 6,630 صورة عبر augmentation.
- تحتوي مجموعة الاختبار المعزولة على 287 صورة مهيأة لسير الكشف.

## المنهجية التقنية {#technical-approach}

- تدريب نموذج كشف مبني على YOLOv8 لمعدات الوقاية وكائنات موقع البناء.
- كشف فئات مثل Hardhat وSafety Vest وMask وPerson وMachinery وVehicle وفئات المخالفة مثل NO-Hardhat.
- بناء واجهة Streamlit لرفع الصور، اللصق من الحافظة، معالجة الفيديو، وتحليل لقطات webcam.
- إضافة فلترة فئات، التحكم في عتبة الثقة، تصدير CSV، وطمس الوجوه.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- يعرض النظام mAP@50 = 80.2% وprecision = 89.3% وrecall = 71.7% في إعداد الاختبار.
- تدعم الواجهة تجارب الصور والفيديو ولقطات الكاميرا.
- يطمس وضع الخصوصية الوجوه المكتشفة مع الحفاظ على سياق الامتثال للسلامة.
- تجعل فلترة الفئات وتصدير CSV النتائج أسهل للمراجعة بعد التحليل.

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

- تحسين recall للكائنات الصغيرة أو الغامضة بصريًا.
- إضافة تحقق ميداني أقوى عبر مواقع وكاميرات وإضاءات مختلفة.
- توسيع التقارير بلوحات اتجاهات ومعايرة للعتبات.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع ذكاءً بصريًا عمليًا للسلامة التشغيلية: يجمع بين الكشف، تصميم الواجهة، حماية الخصوصية، والتقارير في سير عمل واحد.
