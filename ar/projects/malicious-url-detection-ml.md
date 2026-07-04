---
title: "Malicious URL Detection with ML"
excerpt: "سير عمل تحليلات أمنية لتصنيف الروابط الخبيثة باستخدام هندسة خصائص نصية، مقارنة نماذج، وتحليل ROC وprecision-recall."
image: /assets/images/projects/malicious-url-detection-ml.png
lang: ar
dir: rtl
alternate_url: "/projects/malicious-url-detection-ml/"
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

{% assign project = site.data.projects_ar | where: "slug", "malicious-url-detection-ml" | first %}

{% assign aa_project_subtitle = "تصنيف أمني للروابط وتقييم النماذج" %}
{% assign aa_project_summary = "يبني هذا المشروع سير عمل تعلم آلة خفيف لتصنيف الروابط إلى آمنة أو خبيثة دون فتح الموقع المستهدف. يستخرج أنماطًا تركيبية ونصية من الرابط، يقارن عدة نماذج، ويقيّم جودة الكشف عبر مصفوفات الالتباس وتحليل ROC وprecision-recall." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- الروابط الخبيثة قد تُستخدم في التصيد، توصيل البرمجيات الخبيثة، التشويه، الرسائل المزعجة، والاحتيال.
- سير العمل الآمن يجب ألا يتطلب فتح المواقع المشبوهة.
- الاستخدامات الأمنية تحتاج تحليل الاسترجاع والدقة والإيجابيات/السلبيات الخاطئة، وليس الدقة العامة فقط.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>مجموعة روابط</strong><small>تصنيفات آمنة وخبيثة</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>استخراج خصائص</strong><small>إشارات تركيبية من الرابط</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>مقارنة نماذج</strong><small>LR · RF · XGBoost</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>ROC وPR والأخطاء</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- 651,191 رابطًا مع تصنيفات أصلية تشمل benign وphishing وmalware وdefacement.
- تحولت المهمة إلى تصنيف ثنائي: روابط آمنة مقابل روابط خبيثة.
- استخدم المشروع تقسيمًا طبقيًا 80/20 للتدريب والاختبار مع خصائص نصية للرابط.

## المنهجية التقنية {#technical-approach}

- استخراج خصائص مثل طول الرابط، عدد الأرقام، عدد الرموز الخاصة، عدد النقاط، وجود IP، وجود HTTPS، وكلمات مرتبطة بالخداع أو الأمان.
- تدريب ومقارنة Logistic Regression وRandom Forest وXGBoost.
- مراجعة الدقة، precision، recall، F1، ROC AUC، Average Precision، مصفوفة الالتباس، وأهمية الخصائص.
- تقديم النموذج كطبقة دعم قرار، وليس كآلية حظر نهائية وحدها.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق Random Forest أفضل أداء معلنًا بدقة 0.876 وprecision 0.840 وrecall 0.788 وF1-score 0.813.
- كان XGBoost منافسًا بدقة 0.866 وF1-score 0.796.
- حقق Random Forest قيمة ROC AUC = 0.934 وAverage Precision = 0.901.
- أظهرت أهمية الخصائص أثر عدد الرموز الخاصة، عدد النقاط، طول الرابط، وعدد الأرقام.

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

يوضح المشروع نمذجة الكشف على بيانات متاحة. أي استخدام أمني تشغيلي يتطلب تحديثًا مستمرًا للبيانات، مراقبة، اختبارات ضد التحايل، وتسجيلًا يراعي الخصوصية.

## التطوير القادم {#future-development}

- إضافة خصائص DNS ومحتوى وشبكة.
- تقييم نماذج عميقة على مستوى الحروف واختبار التحايل العدائي.
- بناء واجهة تحذير خفيفة للفحص الفوري للروابط.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع تقييمًا أمنيًا للنماذج: تصميم خصائص آمنة، مقارنة خطوط أساس، تفسير الأخطاء، والتعامل مع المخرجات كإشارات دعم لا كقرارات إنفاذ تلقائية.
