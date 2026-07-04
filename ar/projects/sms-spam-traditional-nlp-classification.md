---
title: "تصنيف رسائل SMS المزعجة بنماذج NLP تقليدية"
excerpt: "سير عمل لتصنيف النصوص يركز على اختيارات التمثيل، مقارنة النماذج، عدم توازن الفئات، ومفاضلات التقييم."
image: /assets/images/projects/sms-spam-traditional-nlp-classification.png
lang: ar
dir: rtl
permalink: /ar/projects/sms-spam-traditional-nlp-classification/
alternate_url: "/projects/sms-spam-traditional-nlp-classification/"
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

{% assign project = site.data.projects_ar | where: "slug", "sms-spam-traditional-nlp-classification" | first %}

{% assign aa_project_subtitle = "سير عمل تقليدي لتصنيف النصوص" %}
{% assign aa_project_summary = "يبني هذا المشروع سير عمل لكشف رسائل SMS المزعجة باستخدام تمثيلات NLP تقليدية ونماذج تعلم آلة. يركز على مقارنة النماذج، مقاييس الفئات، والتقييم الذي يتجاوز الدقة العامة." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}


## التحدي {#challenge}

- كشف الرسائل المزعجة مهمة تصنيف نصوص غير متوازنة وقد تخفي الدقة العامة ضعف استرجاع فئة spam.
- اختلاف تمثيلات النص يؤثر في قدرة النماذج على فصل الرسائل العادية عن المزعجة.
- التقييم العملي يحتاج مصفوفات التباس، recall، F1-score، وسلوك ROC.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>رسائل SMS</strong><small>ham و spam</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>تمثيل نصي</strong><small>BoW و TF-IDF</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>مقارنة نماذج</strong><small>NB و LR و SVM</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>F1 و ROC-AUC</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- 5,574 رسالة SMS تتضمن 4,827 رسالة ham و747 رسالة spam.
- مهمة تصنيف نصوص ثنائية باستخدام Bag of Words وTF-IDF.
- حجم المفردات الموثق 6,879 خاصية مع تخلخل عالٍ.

## المنهجية التقنية {#technical-approach}

- معالجة نصوص SMS وبناء تمثيلات sparse.
- تدريب Naive Bayes وLogistic Regression وSupport Vector Machine.
- مقارنة Bag of Words وTF-IDF عبر عدة نماذج.
- مراجعة مصفوفات الالتباس ومنحنيات ROC واسترجاع spam وF1-score.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق SVM مع TF-IDF أفضل دقة موثقة بنسبة 97.67%.
- وصل نفس الإعداد إلى Spam F1-score = 0.90.
- أوضح التقييم أهمية قراءة recall وF1-score بجانب الدقة العامة.

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

- مقارنة نماذج transformer مع النماذج التقليدية.
- إضافة ضبط عتبات للتطبيقات الحساسة للاسترجاع.
- اختبار المتانة على رسائل أحدث وبيانات متعددة اللغات.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع أسلوب تقييم منضبط للتصنيف النصي غير المتوازن: مقارنة التمثيلات، قراءة مفاضلات الفئات، وتحديد سير عمل قوي لكشف الرسائل المزعجة.
