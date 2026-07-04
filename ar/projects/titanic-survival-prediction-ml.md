---
title: "Titanic Survival Prediction"
excerpt: "سير عمل نمذجة تنبؤية على بيانات منظمة مع تحليل استكشافي، هندسة خصائص، معالجة مسبقة، مراجعة عدم توازن الفئات، ومقارنة نماذج مضبوطة."
image: /assets/images/projects/titanic-survival-prediction-ml.png
lang: ar
dir: rtl
alternate_url: "/projects/titanic-survival-prediction-ml/"
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

{% assign project = site.data.projects_ar | where: "slug", "titanic-survival-prediction-ml" | first %}

{% assign aa_project_subtitle = "سير عمل نمذجة قرار على بيانات منظمة" %}
{% assign aa_project_summary = "يبني هذا المشروع سير عمل تصنيف إشرافي لمهمة التنبؤ بالبقاء في Titanic. يركز على التحليل الاستكشافي، هندسة الخصائص، قرارات المعالجة المسبقة، مراجعة عدم توازن الفئات، ومقارنة النماذج لنمذجة تنبؤية قابلة للتفسير." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}


## التحدي {#challenge}

- البيانات المنظمة غالبًا تحتوي قيمًا مفقودة، متغيرات منحرفة، حقولًا فئوية، وخصائص مترابطة.
- النمذجة التنبؤية تحتاج معالجة مسبقة دقيقة قبل أن تصبح مقارنة النماذج ذات معنى.
- مفاضلات القرار يجب أن تُقيّم عبر precision وrecall وF1 على مستوى الفئات، وليس الدقة العامة فقط.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="database" %}</span><strong>بيانات ركاب</strong><small>خصائص ديموغرافية وتذاكر</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>تصميم خصائص</strong><small>تعويض وترميز وتحويل</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>مقارنة نماذج</strong><small>أساسية ومضبوطة</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>تفسير المفاضلات</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- 891 سجلًا للركاب مع هدف `Survived`.
- تقسيم طبقي 80/20 للتدريب والاختبار، مع 712 سجل تدريب و179 سجل اختبار.
- مصفوفة الخصائص النهائية تحتوي 21 خاصية بعد الهندسة أو الترميز.

## المنهجية التقنية {#technical-approach}

- تحليل القيم المفقودة، القيم المتطرفة، توزيع البقاء، والأنماط المرتبطة بالنجاة.
- هندسة خصائص مثل اللقب، السطح، تحويل الأجرة، حجم الأسرة، السفر منفردًا، فئات العمر، وفئات الأجرة.
- تطبيق التعويض، الترميز، التحجيم، التقسيم الطبقي، وتجربة SMOTE بعد التقسيم لتجنب تسرب البيانات.
- مقارنة Logistic Regression وSVC وGaussian Naive Bayes ونسخ SMOTE ونماذج مضبوطة باستخدام GridSearchCV.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق Logistic Regression المضبوط وSVC المضبوط دقة اختبار 0.83799.
- أظهر Logistic Regression المضبوط recall وF1 أفضل قليلًا لفئة الناجين.
- أظهر SVC المضبوط precision أعلى للناجين، مما يجعل الاختيار النهائي مرتبطًا بالمفاضلة المطلوبة بين الأخطاء.

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

- إضافة احتمالات معايرة وتفسير باستخدام SHAP.
- مقارنة نماذج stacking وتشخيصات cross-validation إضافية.
- تغليف سير العمل في مسار تدريب وتقييم أكثر قابلية لإعادة الاستخدام.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع نمذجة منضبطة للبيانات المنظمة: تصميم الخصائص، المعالجة المسبقة، مراجعة عدم التوازن، ضبط النماذج، وتفسير مفاضلات precision-recall.
