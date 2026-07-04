---
title: "Stock Market EDA with yfinance"
excerpt: "سير عمل لاستكشاف بيانات السوق يقارن سلوك الأسعار، العوائد، التقلب، الأداء التراكمي، والعلاقات بين عدة أصول."
image: /assets/images/projects/stock-market-eda-yfinance.png
lang: ar
dir: rtl
alternate_url: "/projects/stock-market-eda-yfinance/"
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

{% assign project = site.data.projects_ar | where: "slug", "stock-market-eda-yfinance" | first %}

{% assign aa_project_subtitle = "استكشاف سوق متعدد الأصول ومقارنة مخاطر" %}
{% assign aa_project_summary = "يحلل هذا المشروع سبعة أصول من الشركات الكبرى عبر قطاعات مختلفة لمقارنة الأسعار والعوائد والتقلب والأداء التراكمي والعلاقات بين الأصول." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- سلوك السوق متعدد الأصول يحتاج مقارنة العوائد والتقلب والارتباط، وليس الأسعار فقط.
- قد تظهر الأصول من قطاعات مختلفة سلوكًا متباينًا في المخاطر والتنويع.
- التحليل الاستكشافي يحتاج سير عمل نظيفًا وقابلًا للتكرار قبل النمذجة.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>بيانات السوق</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>العوائد</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>التقلب</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>الارتباط</strong></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

بيانات يومية من 2019 فصاعدًا لـ AAPL وMSFT وAMZN وJPM وXOM وPFE وTSLA، مع خصائص العوائد والمتوسطات المتحركة وBollinger Bands والعوائد التراكمية والأسعار المعيارية.

## المنهجية التقنية {#technical-approach}

- تنزيل بيانات السوق التاريخية باستخدام yfinance.
- تنظيف القيم المفقودة وإعادة تشكيل البيانات إلى صيغة tidy.
- حساب العوائد والتقلب والأداء التراكمي والمقاييس المعيارية.
- تصور التوزيعات والمخاطر والارتباط والأداء التراكمي.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- أظهر TSLA أعلى تقلب في العوائد اليومية ضمن المجموعة المختارة.
- أظهر PFE أقل تقلب بين الأصول المختارة.
- ظهر ارتباط إيجابي قوي بين عوائد AAPL وMSFT يقارب 0.69.

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

- إضافة تجميع على مستوى القطاعات وتحليل ارتباط متحرك.
- إضافة مقاييس معدلة بالمخاطر مثل Sharpe والانحراف السلبي.
- استخدام مخرجات التحليل الاستكشافي كأساس لتجارب نمذجة لاحقة.

## القيمة التقنية {#what-this-project-demonstrates}

يبني المشروع أساسًا نظيفًا للتحليل المالي عبر مقارنة المخاطر والعوائد والارتباط بين الأصول.
