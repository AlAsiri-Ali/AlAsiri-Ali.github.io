---
title: "Retail Segmentation & Market Basket Analysis"
excerpt: "سير عمل لتحليلات العملاء يجمع بين تقسيم RFM، التجميع، قواعد Apriori، والتفسير التجاري على بيانات Online Retail."
image: /assets/images/projects/retail-segmentation-market-basket.png
lang: ar
dir: rtl
alternate_url: "/projects/retail-segmentation-market-basket/"
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

{% assign project = site.data.projects_ar | where: "slug", "retail-segmentation-market-basket" | first %}

{% assign aa_project_subtitle = "تقسيم عملاء وتحليل قواعد ارتباط" %}
{% assign aa_project_summary = "يجمع هذا المشروع بين تقسيم العملاء باستخدام RFM وتحليل سلة المشتريات لربط مخرجات التعلم غير المراقب بقرارات عملية حول العملاء والمنتجات." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- تحتاج بيانات التجزئة إلى تنظيف قبل أن يصبح سلوك العملاء قابلًا للتحليل.
- تقسيم العملاء وتحليل السلة يجيبان عن أسئلة تجارية مختلفة.
- مخرجات التحليل تحتاج تفسيرًا يربط الشرائح والقواعد بإجراءات عملية.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>المعاملات</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>خصائص RFM</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>شرائح العملاء</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>قواعد ارتباط</strong></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

بيانات UCI Online Retail تشمل 541,909 صفًا خامًا، 25,900 فاتورة، 4,372 عميلًا، و4,070 منتجًا فريدًا.

## المنهجية التقنية {#technical-approach}

- تنظيف معرفات العملاء المفقودة، الفواتير الملغاة، والكميات والأسعار غير الصالحة.
- بناء خصائص Recency وFrequency وMonetary ومقارنة طرق التجميع.
- بناء مصفوفة معاملات لفرنسا وتشغيل Apriori لاستخراج قواعد الارتباط.
- تفسير الشرائح والقواعد كفرص للاحتفاظ والتنشيط والبيع المتقاطع والولاء.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- أنتج K-Means ثلاث شرائح عملاء بقيمة silhouette 0.4599.
- حددت النتيجة شرائح عملاء منتظمين، خامدين/معرضين للفقد، وعملاء ذوي قيمة عالية.
- أنتج تحليل السلة 23 قاعدة نهائية بعد التصفية بالدعم والثقة والرفع.

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

- مقارنة طرق تجميع إضافية واختبارات استقرار.
- إضافة تحليل cohorts وخصائص قيمة عمر العميل.
- تحويل القواعد إلى مرشحات توصية مرتبة مع قيود تجارية أوضح.

## القيمة التقنية {#what-this-project-demonstrates}

يربط المشروع التعلم غير المراقب بالتفسير التجاري عبر سلوك العملاء وعلاقات المنتجات.
