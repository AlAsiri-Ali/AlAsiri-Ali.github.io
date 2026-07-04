---
title: "S&P 500 Market Regime Classification"
excerpt: "سير عمل لتصنيف أنظمة السوق قصيرة الأجل في S&P 500 باستخدام مؤشرات فنية ومقارنة نماذج تراعي الترتيب الزمني."
image: /assets/images/projects/sp500-market-regime-classification.png
lang: ar
dir: rtl
alternate_url: "/projects/sp500-market-regime-classification/"
last_modified_at: 2026-06-30
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

{% assign project = site.data.projects_ar | where: "slug", "sp500-market-regime-classification" | first %}

{% assign aa_project_subtitle = "تجربة تصنيف لأنظمة السوق قصيرة الأجل" %}
{% assign aa_project_summary = "يصيغ هذا المشروع سلوك S&P 500 كمشكلة تصنيف ثلاثية ويختبر ما إذا كانت المؤشرات الفنية تستطيع توقع نظام السوق في اليوم التالي." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- تصنيف السوق قصير الأجل noisy وغالبًا يتأثر بالفئات الأكثر تكرارًا.
- قد يحقق النموذج دقة مقبولة لكنه يفشل في فصل الأنظمة الصاعدة والهابطة.
- يلزم تقييم زمني لتجنب نتائج مضللة.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>بيانات S&P 500</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>مؤشرات فنية</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>نماذج تصنيف</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تسمية النظام</strong></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

بيانات مؤشر S&P 500 من 2020-01-01 إلى 2024-01-01 مع العائد اليومي وSMA_20 وSMA_50 والتقلب المتحرك 20 يومًا.

## المنهجية التقنية {#technical-approach}

- تصنيف عوائد اليوم التالي إلى صاعد، جانبي، أو هابط باستخدام حدود ±0.5%.
- مقارنة Logistic Regression وRandom Forest وSVM.
- استخدام نسخ مضبوطة بتقييم يراعي السلاسل الزمنية.
- تفسير الدقة والدقة المتوازنة معًا.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- بلغت أفضل دقة نحو 52.08% بينما بقيت الدقة المتوازنة قريبة من الثلث.
- مالت النماذج إلى فئة السوق الجانبية الأكثر تكرارًا.
- توضح النتيجة أن المؤشرات البسيطة قد تنظّم التحليل لكنها ضعيفة لتوقع نظام اليوم التالي.

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

يهدف التحليل إلى النمذجة والتقييم، وليس إلى تقديم توصية استثمارية. أي استخدام تداولي فعلي يتطلب ضوابط مخاطر، احتساب تكاليف تنفيذ، تحققًا خارج العينة، ومراقبة مستمرة.

## التطوير القادم {#future-development}

- إضافة خصائص أوسع تتعلق بالاقتصاد الكلي والتقلب.
- اختبار آفاق زمنية أطول وحدود تصنيف مختلفة.
- استخدام معايرة الاحتمالات وتقرير يراعي عدم اليقين.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع تفسيرًا منضبطًا لإشارات تعلم آلة مالية ضعيفة دون المبالغة في نتائج تصنيف noisy.
