---
layout: single
permalink: /ar/projects/sms-spam-transformer-classification/
title: "SMS Spam Transformer Classification"
excerpt: "سير عمل لتصنيف رسائل SMS غير المرغوبة يقارن zero-shot، fine-tuned BERT، few-shot BERT، وFlan-T5 prompting."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/sms-spam-transformer-classification/"
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
image: /assets/images/projects/sms-spam-transformer-classification.png
---

{% assign project = site.data.projects_ar | where: "slug", "sms-spam-transformer-classification" | first %}

{% assign aa_project_subtitle = "مقارنة استراتيجيات transformer لتصنيف النصوص" %}
{% assign aa_project_summary = "يقارن هذا المشروع عدة استراتيجيات transformer لكشف رسائل SMS غير المرغوبة: zero-shot classification، fine-tuned BERT، few-shot BERT، وتصنيف Flan-T5 المعتمد على prompting." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- أداء تصنيف النصوص يتأثر بطريقة صياغة المهمة والتسميات.
- سلوك zero-shot قد يفشل عندما تحمل التسمية معنى خاصًا بالمجال.
- المقارنة العادلة تحتاج تقسيمات ثابتة وتفسيرًا على مستوى الطريقة.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="مسار المشروع">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>بيانات SMS</strong><small>Ham وSpam</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="search" %}</span><strong>صياغة المهمة</strong><small>zero-shot / few-shot</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>نماذج Transformer</strong><small>BERT وFlan-T5</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>مقارنة</strong><small>دقة ومصفوفات التباس</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- مجموعة SMS Spam Collection تحتوي على 5,572 رسالة.
- تسميتان ثنائيتان: ham وspam.
- 3,900 رسالة تدريب و836 تحقق و836 اختبار.

## المنهجية التقنية {#technical-approach}

- مقارنة zero-shot NLI، fine-tuning مراقب، few-shot fine-tuning، وgenerative prompting.
- تقييم الدقة ومصفوفات الالتباس لكل طريقة.
- تفسير الإخفاقات الناتجة عن غموض التسميات وصعوبة parsing.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق fine-tuned BERT دقة 0.9952 وأقوى نتائج على مستوى الفئات.
- حقق few-shot BERT دقة 0.9294 باستخدام 20 مثال تدريب فقط.
- أظهرت طرق zero-shot وprompting حساسية واضحة لصياغة التسميات ومعالجة المخرجات.

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

- إضافة calibration وتقييم حساس للتكلفة في تصفية الرسائل.
- اختبار صيغ تسميات وقوالب prompting إضافية.
- مقارنة نماذج أخف ملائمة للزمن الحقيقي.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع أن نماذج اللغة الحديثة تحتاج صياغة مهمة دقيقة وتقييمًا ومقارنة منهجية بدل افتراض نجاح استراتيجية واحدة دائمًا.
