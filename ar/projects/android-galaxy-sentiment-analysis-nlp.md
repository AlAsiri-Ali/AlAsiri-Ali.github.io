---
title: "Android Galaxy Sentiment Analysis"
excerpt: "سير عمل لتحليل مشاعر العملاء يقارن تمثيلات النصوص والنماذج التقليدية ونموذجًا تسلسليًا عصبيًا على تعليقات مرتبطة بالمنتجات."
image: /assets/images/projects/android-galaxy-sentiment-analysis-nlp.png
lang: ar
dir: rtl
alternate_url: "/projects/android-galaxy-sentiment-analysis-nlp/"
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

{% assign project = site.data.projects_ar | where: "slug", "android-galaxy-sentiment-analysis-nlp" | first %}

{% assign aa_project_subtitle = "سير عمل لذكاء مشاعر العملاء" %}
{% assign aa_project_summary = "يحلل هذا المشروع تعليقات Reddit المرتبطة بمنتجات Android Galaxy كسير عمل لذكاء العملاء. يقارن اختيارات المعالجة المسبقة وتمثيلات النصوص ونماذج التصنيف لفهم إشارات المشاعر ومفاضلات النمذجة في نقاشات المنتجات." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}


## التحدي {#challenge}

- آراء المنتجات في النقاشات المفتوحة تكون غير منظمة وغير متوازنة وقصيرة أو غير رسمية أحيانًا.
- تحليل المشاعر يحتاج معالجة دقيقة للنصوص والتصنيفات والتقييم، وليس الاعتماد على نتيجة نموذج واحدة.
- مقارنة النماذج التقليدية والعصبية تساعد على فهم الاختيارات الأفضل للبيانات المتاحة.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>تعليقات</strong><small>نقاشات منتجات</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>معالجة النص</strong><small>تنظيف وموازنة</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>مقارنة نماذج</strong><small>تقليدية وعصبية</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>تقييم</strong><small>دقة وF1</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- 1,000 تعليق Reddit خام مرتبط بنقاشات Android Galaxy / Samsung Galaxy S25.
- التصنيفات الأصلية تشمل تعليقات إيجابية وسلبية ومحايدة.
- أزيلت التعليقات المحايدة لمهمة ثنائية، ثم وازن المشروع الفئة الإيجابية ليصل إلى 752 إيجابيًا و752 سلبيًا.

## المنهجية التقنية {#technical-approach}

- تنظيف النص عبر إزالة HTML، تحويل الحروف، tokenization، إزالة stopwords، وlemmatization.
- مقارنة Bag of Words وTF-IDF وWord2Vec وتمثيل عصبي داخل نموذج LSTM.
- تدريب Logistic Regression وSupport Vector Classifier وRandom Forest وBidirectional LSTM.
- مراجعة مصفوفات الالتباس ومقاييس الفئات لفهم سلوك النماذج.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حقق SVC مع TF-IDF أقوى نتيجة تقليدية معلنة بدقة 97.12% وF1-score = 97.07%.
- قدم Random Forest مع Word2Vec أداءً قويًا بقيمة F1-score = 94.92%.
- كان نموذج BiLSTM منافسًا لكنه لم يتفوق على أفضل نهج تقليدي في هذه البيانات.

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

- تقييم نماذج مشاعر مبنية على Transformers.
- توسيع سير العمل إلى تحليل مشاعر متعدد اللغات أو عبر فئات منتجات مختلفة.
- إضافة أدوات تفسير لمراجعة إشارات النص المؤثرة.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع نمذجة ذكاء العملاء: تحويل التعليقات غير المنظمة إلى إشارات مشاعر، مقارنة تمثيلات النصوص، وتقييم مفاضلات الأداء بين عائلات نماذج مختلفة.
