---
title: "Gomoku Master"
excerpt: "تطبيق ذكاء ألعاب تفاعلي مع أحجام لوحات قابلة للتخصيص، مستويات صعوبة، ومنطق قرار قائم على البحث."
image: /assets/images/projects/gomoku-master.png
lang: ar
dir: rtl
alternate_url: "/projects/gomoku-master/"
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

{% assign project = site.data.projects_ar | where: "slug", "gomoku-master" | first %}

{% assign aa_project_subtitle = "نظام بحث استراتيجي تفاعلي" %}
{% assign aa_project_summary = "ينفذ هذا المشروع لعبة Gomoku كنظام تفاعلي مع خصم ذكي. يركز على تمثيل حالة اللوحة، اختيار الحركة عبر البحث، التحكم بمستوى الصعوبة، وتصميم حلقة لعب عملية لنظام اتخاذ قرار تفاعلي." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}


## التحدي {#challenge}

- ذكاء الألعاب يحتاج تقييم عدد كبير من الحالات المستقبلية مع الحفاظ على استجابة مناسبة للاعب.
- التحكم بالصعوبة مهم لجعل التجربة مناسبة لمستويات مختلفة.
- التطبيق يحتاج حلقة لعب واضحة، معالجة للحركات الصحيحة، ومنطق تقييم استراتيجي بدل الاختيار العشوائي.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>حالة اللوحة</strong><small>الأحجار والحركات الممكنة</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>محرك البحث</strong><small>Negamax وSSS*</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>التقييم</strong><small>تسجيل الأنماط</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="rocket" %}</span><strong>اختيار الحركة</strong><small>لعب حسب الصعوبة</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- المدخل الأساسي هو حالة لوحة Gomoku الحالية وحركات اللاعب.
- يدعم المشروع أحجام لوحات متعددة مثل 9x9 و13x13 و15x15 و19x19.
- يستخدم الخصم الذكي مستويات صعوبة للتحكم في عمق البحث وسلوك القرار.

## المنهجية التقنية {#technical-approach}

- تنفيذ قواعد Gomoku للفوز بخمسة أحجار متتالية أفقيًا أو عموديًا أو قطريًا.
- استخدام منطق easyAI مع بحث Negamax وتقليم alpha-beta وجداول transposition.
- دعم خيار بحث SSS* كطريقة بديلة لاستكشاف شجرة اللعبة.
- تقييم حالات اللوحة بناءً على قوة السلاسل حتى يستطيع الخصم ترتيب الحركات الاستراتيجية.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- يدعم التطبيق اللعب التفاعلي ضد خصم ذكي بمستويات صعوبة قابلة للتغيير.
- منطق البحث يجعل الخصم يقيّم حالات اللوحة بدل اختيار الحركة عشوائيًا.
- يتضمن المشروع اختبارات وسكربتات benchmark تساعد على تحسين محرك اللعبة.

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

يوضح المشروع بحثًا خوارزميًا للعبة تفاعلية. اللوحات الأكبر أو مستويات الصعوبة الأعلى قد تتطلب تحسين تكلفة البحث واختبارات إضافية لتجربة الاستخدام.

## التطوير القادم {#future-development}

- تحسين الواجهة الرسومية وتجربة اللاعب.
- توسيع المقارنة بين الخوارزميات ومستويات الصعوبة.
- إضافة أنماط لعب وحفظ ألعاب وتشخيصات استراتيجية أعمق.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع تصميم ذكاء خوارزمي للأنظمة التفاعلية: تمثيل مساحة حالات، تقييم قرارات، التحكم بالصعوبة، والحفاظ على تجربة لعب قابلة للاستخدام.
