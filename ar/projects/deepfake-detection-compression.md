---
layout: single
permalink: /ar/projects/deepfake-detection-compression/
title: "Frequency-Aware Deepfake Detection"
excerpt: "تنفيذ بحثي لكشف التزييف العميق المكاني والواعي بالترددات تحت ضغط H.264 والتقييم عبر مجموعات بيانات مختلفة."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/deepfake-detection-compression/"
toc: false
toc_sticky: false
last_modified_at: 2026-06-29
classes:
  - aa-project-page
hide_title: true
hide_meta_footer: true
hide_pagination: true
share: false
breadcrumbs: false
toc_h_min: 2
image: /assets/images/projects/deepfake-detection-compression.png
---

{% assign project = site.data.projects_ar | where: "slug", "deepfake-detection-compression" | first %}

{% assign aa_project_subtitle = "دراسة متانة لكشف التزييف العميق بالاعتماد على الترددات" %}
{% assign aa_project_summary = "يدرس هذا المشروع البحثي تأثير ضغط H.264 الفاقد على كشف التزييف العميق. يقارن بين نموذج مرجعي مكاني بأسلوب XceptionNet ونموذج هجين يضيف إشارات ترددية عبر DCT وlearnable masking وcross-attention fusion." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- قد تحقق نماذج كشف التزييف أداءً قويًا على بيانات معيارية نظيفة، لكنها تتراجع بعد إعادة الضغط في المنصات.
- الضغط قد يزيل أو يغير آثارًا دقيقة تعتمد عليها النماذج.
- التقييم القوي يحتاج إعدادات ضغط متطابقة واختبارًا خارجيًا عبر مجموعة بيانات مختلفة.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="مسار كشف التزييف العميق">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="vision" %}</span><strong>قصاصات الوجه</strong><small>استخراج إطارات واكتشاف الوجه</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>فرع مكاني</strong><small>نموذج مرجعي بأسلوب XceptionNet</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>فرع ترددي</strong><small>DCT وlearnable masking</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>دمج وتقييم</strong><small>Cross-attention وتجميع على مستوى الفيديو</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- FaceForensics++ c23 للتدريب والتقييم داخل التوزيع.
- إعداد FF++ c40 المتطابق لاختبار ضغط H.264 أعلى.
- Celeb-DF v2 كمجموعة خارجية لاختبار التعميم دون fine-tuning.

## المنهجية التقنية {#technical-approach}

- نموذج مرجعي مكاني بأسلوب XceptionNet لتصنيف قصاصات الوجه RGB.
- فرع ترددي يعتمد على DCT لالتقاط آثار حساسة للضغط.
- Learnable frequency masking لتقليل الاعتماد الزائد على آثار طيفية ضيقة.
- Cross-attention fusion بين الرموز المكانية والترددية.
- تجميع النتائج على مستوى الفيديو عبر بذور عشوائية متعددة لعرض أكثر ثباتًا.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- بقي النموذج المكاني قويًا جدًا في FF++ c23.
- حسّن النموذج الهجين الواعي بالترددات دقة FF++ c40 وAUC على Celeb-DF.
- يفصل التقييم بين الأداء داخل التوزيع، متانة الضغط العالي، والتعميم الخارجي.

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

- إضافة calibration curves وتحليل thresholds لقرارات التشغيل.
- اختبار codecs ودقات وسلاسل معالجة أقرب للمنصات.
- إضافة تصورات ترددية توضح ما يتعلمه الفرع الهجين.

## القيمة التقنية {#what-this-project-demonstrates}

يجمع المشروع بين تقييم بحثي للذكاء الاصطناعي، مقارنة النماذج المرجعية، تصميم نموذج هجين، اختبار المتانة، التعميم الخارجي، وعرض النتائج عبر بذور عشوائية متعددة.
