---
title: "تحليل المشاعر العربية باستخدام AraVec وLSTM"
excerpt: "سير عمل لتحليل النصوص العربية يركز على إشارات المشاعر، تمثيل اللغة، النمذجة التسلسلية، والتقييم."
image: /assets/images/projects/arabic-sentiment-aravec-lstm.png
lang: ar
dir: rtl
permalink: /ar/projects/arabic-sentiment-aravec-lstm/
alternate_url: "/projects/arabic-sentiment-aravec-lstm/"
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

{% assign project = site.data.projects_ar | where: "slug", "arabic-sentiment-aravec-lstm" | first %}

{% assign aa_project_subtitle = "سير عمل لتحليل المشاعر العربية والنمذجة التسلسلية" %}
{% assign aa_project_summary = "يدرس هذا المشروع تمثيل التغريدات العربية وتصنيف المشاعر. يقارن بين تمثيلات كلمات مسبقة التدريب ونموذج تسلسلي لفهم أثر اختيار التمثيل على التنبؤ بالمشاعر." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}


## التحدي {#challenge}

- النص العربي في الشبكات الاجتماعية يحتاج معالجة وتمثيلًا مناسبين للغة.
- متوسط متجهات الكلمات قد يفقد ترتيب الكلمات المهم لفهم المشاعر.
- مقارنة نموذج مرجعي مع نموذج تسلسلي تساعد على فهم قيمة السياق والترتيب.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>تغريدات عربية</strong><small>إيجابية وسلبية</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>تمثيل لغوي</strong><small>AraVec</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>نماذج</strong><small>ANN و LSTM</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>دقة و F1</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- 5,000 تغريدة عربية متوازنة بين المشاعر الإيجابية والسلبية.
- 2,500 تغريدة إيجابية و2,500 تغريدة سلبية.
- تقسيم تدريب/اختبار 4,000 / 1,000 تغريدة.

## المنهجية التقنية {#technical-approach}

- تحميل نموذج AraVec Twitter CBOW لتمثيل الكلمات العربية.
- بناء تمثيلات على مستوى التغريدة باستخدام متوسط المتجهات للنموذج المرجعي ANN.
- تدريب نموذج LSTM باستخدام embedding تسلسلي وطول تسلسل ثابت.
- مراجعة مقارنة النماذج، F1-score، أمثلة التشابه الدلالي، وتصور embeddings.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق نموذج LSTM دقة 83% في التقييم الموثق.
- حقق نموذج ANN باستخدام متوسط AraVec نحو 68% دقة.
- تشير المقارنة إلى أن النمذجة التسلسلية أفضل عندما يؤثر ترتيب الكلمات والسياق في المشاعر.

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

يركز المشروع على نمذجة اللغة وتقييمها. أي استخدام أوسع يتطلب تحققًا خاصًا بالمجال، تقييمًا للحالات الطرفية، مراقبة، واختبارًا على بيانات حديثة.

## التطوير القادم {#future-development}

- تقييم نماذج transformer عربية كنماذج أقوى.
- توسيع الاختبار عبر لهجات ومجالات وأساليب كتابة مختلفة.
- إضافة أدوات تفسير للكلمات المؤثرة وإشارات المشاعر.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع ممارسة نمذجة اللغة العربية: تمثيل النصوص بمتجهات مسبقة التدريب، مقارنة النماذج المرجعية والتسلسلية، وتفسير أهمية ترتيب الكلمات في تحليل المشاعر.
