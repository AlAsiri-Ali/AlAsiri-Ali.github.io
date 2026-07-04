---
layout: single
permalink: /ar/projects/phishing-email-detection-ml/
title: "Phishing Email Detection with ML"
excerpt: "سير عمل أمني لتصنيف البريد الإلكتروني يقارن TF-IDF وRandom Forest وSVM وLogistic Regression لكشف رسائل التصيد."
author_profile: false
image: /assets/images/projects/phishing-email-detection-ml.png
lang: ar
dir: rtl
alternate_url: "/projects/phishing-email-detection-ml/"
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

{% assign project = site.data.projects_ar | where: "slug", "phishing-email-detection-ml" | first %}

{% assign aa_project_subtitle = "تصنيف نصوص أمني ومقارنة نماذج" %}
{% assign aa_project_summary = "يبني هذا المشروع سير عمل لاكتشاف رسائل التصيد باستخدام نصوص بريد مصنفة. يقارن نماذج تعلم آلة كلاسيكية مع التركيز على استرجاع رسائل التصيد، الإيجابيات الخاطئة، تفسير الخصائص، واحتياج المتابعة التشغيلية." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- التصنيف الأمني يحتاج أكثر من الدقة العامة؛ استرجاع رسائل التصيد والإيجابيات الخاطئة مهمان.
- خصائص النص قد تلتقط إشارات مفيدة، لكنها قد تتعلم أيضًا أنماطًا خاصة بالبيانات.
- النموذج العملي يجب أن يوازن بين الأداء والبساطة وقابلية التفسير.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>بيانات البريد</strong><small>تنظيف وتصنيفات</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>خصائص النص</strong><small>تمثيل TF-IDF</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>مقارنة نماذج</strong><small>RF · SVM · LR</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>استرجاع وأخطاء ومصطلحات</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- 18,650 صفًا خامًا و17,538 صفًا بعد التنظيف.
- فئتا Safe Email وPhishing Email مع تقسيم تدريب/اختبار 80/20.
- 5,000 خاصية TF-IDF لتمثيل نصوص البريد.

## المنهجية التقنية {#technical-approach}

- تنظيف السجلات المفقودة والمكررة قبل التدريب.
- تمثيل نص البريد باستخدام خصائص TF-IDF.
- مقارنة Random Forest وSupport Vector Machine وLogistic Regression.
- مراجعة مصفوفات الالتباس، استرجاع رسائل التصيد، وأهم المصطلحات المرتبطة بها.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حققت جميع النماذج أداءً قويًا فوق 97% دقة.
- حقق SVM الخطي دقة 0.9763 مع توازن قوي بين استرجاع التصيد والبساطة التشغيلية.
- حقق RBF SVM دقة 0.9772، لكن SVM الخطي بقي أبسط في التفسير.
- اكتشف النموذج المختار نحو 98% من رسائل التصيد في مجموعة الاختبار.

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

- التقييم على بيانات تصيد أحدث وأكثر تنوعًا.
- إضافة معايرة، ضبط عتبات، وتحليل أخطاء قائم على التكلفة.
- اختبار encoders حديثة مقابل نموذج TF-IDF الكلاسيكي.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع تقييمًا أمنيًا منضبطًا للنماذج: مقارنة خطوط الأساس، إعطاء أولوية للاسترجاع، تحليل الإيجابيات الخاطئة، وتفسير خصائص النص بوعي للسياق.
