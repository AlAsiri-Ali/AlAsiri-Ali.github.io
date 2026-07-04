---
title: "AAPL Regression & Direction Models"
excerpt: "سير عمل تعلم آلي على بيانات سهم Apple يقارن بين توقع سعر الإغلاق التالي وتصنيف اتجاه الحركة باستخدام خصائص فنية."
image: /assets/images/projects/aapl-regression-trading-models.png
lang: ar
dir: rtl
alternate_url: "/projects/aapl-regression-trading-models/"
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

{% assign project = site.data.projects_ar | where: "slug", "aapl-regression-trading-models" | first %}

{% assign aa_project_subtitle = "تعلم مراقب على خصائص السلاسل المالية" %}
{% assign aa_project_summary = "يقارن هذا المشروع بين توقع سعر الإغلاق التالي وتصنيف اتجاه الحركة التالي على بيانات سهم Apple باستخدام المتوسطات المتحركة، العوائد، والتقييم الزمني." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- يختلف توقع مستوى السعر عن توقع اتجاه الحركة في الأسواق.
- قد يبدو نموذج السعر مقبولًا بصريًا لكنه لا يقدم إشارة اتجاهية مفيدة.
- تقييم السلاسل الزمنية يجب أن يحافظ على ترتيب الزمن.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>بيانات AAPL</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>خصائص فنية</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>انحدار خطي</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تصنيف لوجستي</strong></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

بيانات يومية لسهم AAPL من 2014-01-01 إلى 2024-01-01 تشمل الأسعار والحجم وخصائص SMA_10 وSMA_50 والعائد اليومي.

## المنهجية التقنية {#technical-approach}

- إنشاء أهداف اليوم التالي للسعر والاتجاه.
- هندسة خصائص المتوسطات المتحركة والعوائد.
- استخدام تقسيم تدريبي/اختباري زمني.
- تدريب انحدار خطي وانحدار لوجستي مضبوط.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق الانحدار الخطي RMSE بقيمة 2.8188 لتوقع إغلاق اليوم التالي.
- حقق الانحدار اللوجستي المضبوط دقة 51.42% لاتجاه الحركة، مساوية لخط الأساس الأكثرية.
- توضح النتيجة صعوبة توقع الاتجاه قصير الأجل.

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

- إضافة تحقق زمني متدرج.
- مقارنة خصائص فنية وتقلبات إضافية.
- تقييم الربحية بعد فصل جودة الإشارة عن ملاءمة السعر.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع أهمية التمييز بين دقة الانحدار وفائدة الإشارة الاتجاهية في تعلم الآلة المالي.
