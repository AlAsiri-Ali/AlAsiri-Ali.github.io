---
title: "Moving Average Backtest with PyFolio"
excerpt: "سير عمل لاختبار استراتيجية تقاطع متوسطات 50/200 على سهم AAPL باستخدام Backtrader وتحليل مخاطر بأسلوب PyFolio."
image: /assets/images/projects/moving-average-backtest-pyfolio.png
lang: ar
dir: rtl
alternate_url: "/projects/moving-average-backtest-pyfolio/"
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

{% assign project = site.data.projects_ar | where: "slug", "moving-average-backtest-pyfolio" | first %}

{% assign aa_project_subtitle = "اختبار استراتيجية وتحليل مخاطر لاستراتيجية قواعدية" %}
{% assign aa_project_summary = "ينفذ هذا المشروع استراتيجية تقاطع متوسطات 50/200 على بيانات سهم Apple ويقيم الأداء باستخدام Backtrader ومقاييس بأسلوب PyFolio." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- قد تكون الاستراتيجية رابحة لكنها أضعف من الاحتفاظ السلبي بالأصل.
- المقاييس المعدلة بالمخاطر وسلوك التراجع أهم من العائد النهائي وحده.
- اختبارات الاستراتيجية تحتاج افتراضات عن العمولة، حجم المركز، وتكرار التداول.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>أسعار AAPL</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>SMA 50/200</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>استراتيجية Backtrader</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>مقاييس PyFolio</strong></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

بيانات يومية لسهم AAPL من 2019-01-01 إلى 2024-12-31 تشمل الافتتاح، الأعلى، الأدنى، الإغلاق، والحجم.

## المنهجية التقنية {#technical-approach}

- الشراء عند تقاطع SMA 50 أعلى SMA 200.
- البيع عند تقاطع SMA 50 أسفل SMA 200.
- استخدام 95% من النقد المتاح عند الدخول، بدون رافعة، وعمولة 0.1%.
- مقارنة الأداء مع الاحتفاظ بسهم AAPL.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- انتهت الاستراتيجية بقيمة $116,229.76 من أصل $100,000، بعائد كلي 16.23%.
- بلغ أقصى تراجع 15.73%.
- حقق الاحتفاظ بسهم AAPL عائدًا أعلى، مما يجعل مقارنة خط الأساس ضرورية.

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

- إضافة اختبار حساسية لتكاليف التداول.
- تجربة نوافذ زمنية وأصول أخرى.
- إضافة تقييم زمني متدرج قبل الحكم على المتانة.

## القيمة التقنية {#what-this-project-demonstrates}

يركز المشروع على مقارنة خط الأساس، تحليل التراجع، وتفسير الأداء المعدل بالمخاطر في تقييم الاستراتيجيات.
