---
layout: single
permalink: /ar/projects/govrag-copilot/
title: "GovRAG Copilot"
excerpt: "مساعد RAG ثنائي اللغة قائم على الأدلة لنظام حماية البيانات الشخصية وإرشادات SDAIA مع الاسترجاع والاستشهادات وإنشاء المسودات وكشف الفجوات."
author_profile: false
lang: ar
dir: rtl
alternate_url: "/projects/govrag-copilot/"
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
image: /assets/images/projects/govrag-copilot.png
---

{% assign project = site.data.projects_ar | where: "slug", "govrag-copilot" | first %}

{% assign aa_project_subtitle = "نظام RAG تنظيمي قائم على الأدلة" %}
{% assign aa_project_summary = "GovRAG Copilot هو نظام Retrieval-Augmented Generation ثنائي اللغة مصمم حول نظام حماية البيانات الشخصية وإرشادات SDAIA. يركز على إجابات قابلة للتتبع، إنشاء مسودات امتثال منظمة، كشف الفجوات، ومخرجات بصرية قائمة على الأدلة المصدرية." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- وثائق نظام حماية البيانات الشخصية والإرشادات المرتبطة به قد تكون موزعة بين مصادر عربية وإنجليزية.
- المستخدم يحتاج إجابات تشير إلى المقاطع المصدرية بدل الاعتماد على نص مولد بلا دليل.
- سير عمل الامتثال يحتاج مخرجات منظمة مثل إشعارات الخصوصية، سجلات المعالجة، إشعارات الاختراق، وتقييمات النقل.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="مسار GovRAG">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>مصادر تنظيمية</strong><small>وثائق PDPL وSDAIA</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>مقاطع على مستوى المواد</strong><small>تطبيع عربي وبيانات وصفية</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="search" %}</span><strong>استرجاع هجين</strong><small>BM25 + TF-IDF</small></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>مخرجات مدعومة بالأدلة</strong><small>أسئلة، قوالب، صور، واستشهادات</small></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

- وثائق تنظيمية عربية وإنجليزية مقسمة إلى مقاطع واعية بالمواد.
- بيانات صفحة ومادة واستشهاد مرتبطة بكل مقطع مسترجع.
- مسار بحث مضبوط يطبع النص العربي ويوسع مصطلحات الامتثال.

## المنهجية التقنية {#technical-approach}

- مسار ingestion يجهز الوثائق ويخزن المقاطع على مستوى المواد.
- استرجاع هجين يجمع BM25 وTF-IDF لموازنة المطابقة الحرفية مع المطابقة الموضوعية.
- طبقة توليد تدعم أساليب extractive وOllama وHuggingFace/Qwen.
- واجهة Gradio تفصل بين الأسئلة، إنشاء المسودات، كشف الفجوات، فحص البحث، المرئيات، ومعلومات المشروع.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- استخدام اختبارات آلية للتحقق من السلوكيات والقوالب المهمة.
- تتبع تغطية الوثائق عبر 238 مقطعًا على مستوى المواد.
- التركيز في التقييم على جودة الاسترجاع، دقة الاستشهاد، الأمانة النصية، الاكتمال، والاتساق ثنائي اللغة.

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

- إضافة معيار تقييم رسمي بأسئلة وإجابات واستشهادات موسومة.
- إضافة فحص حداثة للوثائق التنظيمية.
- تحسين تقييم الأمانة النصية ودعم الإجابة بالاستشهادات.

## القيمة التقنية {#what-this-project-demonstrates}

يجمع GovRAG بين هندسة RAG العملية: تجهيز الوثائق، تصميم الاسترجاع، دعم العربية والإنجليزية، الانضباط في الاستشهاد، تصميم واجهة العمل، المخرجات البصرية، والتقييم خارج مساعدات المحادثة العامة.
