---
title: "Cashew Leaf Disease Classification"
excerpt: "سير عمل تصنيف صور زراعية يقارن معماريات CNN بالتعلم النقلي تحت عدم توازن الفئات ويقيّم أداء التعرف على الأمراض."
image: /assets/images/projects/cashew-leaf-disease-classification.png
lang: ar
dir: rtl
alternate_url: "/projects/cashew-leaf-disease-classification/"
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

{% assign project = site.data.projects_ar | where: "slug", "cashew-leaf-disease-classification" | first %}

{% assign aa_project_subtitle = "تصنيف صور زراعية بالتعلم النقلي" %}
{% assign aa_project_summary = "يطور هذا المشروع سير عمل تصنيف بصري للتعرف على حالات أوراق الكاجو بين فئات صحية ومرضية. يقارن عدة معماريات CNN مدربة مسبقًا، يستخدم وزن الفئات وaugmentation، ويقيّم الأداء بمقاييس على مستوى الفئات." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- تشخيص أمراض الأوراق يدويًا قد يكون بطيئًا وذاتيًا وغير متسق.
- مجموعة البيانات غير متوازنة نسبيًا، إذ إن فئة Gummosis أصغر بكثير من بقية الفئات.
- النتيجة القوية تحتاج تقييمًا على مستوى الفئات، وليس الدقة الإجمالية فقط.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>صور أوراق</strong><small>5 فئات صحية/مرضية</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>تهيئة البيانات</strong><small>تقسيم وaugmentation</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>نماذج CNN</strong><small>EfficientNet · ResNet · VGG · DenseNet</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>دقة وmacro F1</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- 6,549 صورة من مجموعة CCMT Cashew subset.
- خمس فئات: Anthracnose وGummosis وLeaf Miner وRed Rust وHealthy.
- تقسيم تدريب/تحقق/اختبار بنسبة 70/15/15 مع مدخلات 224 × 224.

## المنهجية التقنية {#technical-approach}

- استخدام stratified splitting للحفاظ على نسب الفئات عبر التدريب والتحقق والاختبار.
- تغيير حجم الصور وتطبيعها باستخدام إحصاءات ImageNet.
- استخدام augmentation مثل random resized crop وhorizontal flip وcolor jitter.
- مقارنة EfficientNet-B0 وResNet-18 وVGG-16 وDenseNet-121 باستخدام weighted cross-entropy وearly stopping.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق EfficientNet-B0 بمعدل تعلم 3e-4 دقة اختبار 98.58% وmacro F1-score = 98.80%.
- حقق EfficientNet-B0 بمعدل تعلم 1e-4 أداءً قويًا أيضًا بدقة 98.37%.
- كانت ResNet-18 وDenseNet-121 منافسة لكنها أقل من أفضل إعداد EfficientNet-B0.
- تركزت الأخطاء المتبقية غالبًا بين فئات مرضية متشابهة بصريًا مثل Anthracnose وLeaf Miner.

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

- إضافة Grad-CAM أو طرق تفسير مشابهة.
- تقييم MixUp وCutMix ومعماريات مناسبة للأجهزة الخفيفة.
- اختبار سير العمل على صور ميدانية من مزارع وأجهزة وإضاءات مختلفة.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع كيفية تقييم الذكاء البصري تحت عدم توازن الفئات، ومقارنة المعماريات بعدل، وتفسير أداء التصنيف المرضي خارج رقم واحد للدقة.
