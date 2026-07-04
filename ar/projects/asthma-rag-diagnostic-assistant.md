---
title: "Asthma RAG Diagnostic Assistant"
excerpt: "تجربة RAG مضبوطة للتفكير المرتبط بالربو، تستخدم قاعدة معرفة مخصصة، استرجاع FAISS، أنماط أوامر مختلفة، ومقاييس لتقييم التوليد."
image: /assets/images/projects/asthma-rag-diagnostic-assistant.png
lang: ar
dir: rtl
alternate_url: "/projects/asthma-rag-diagnostic-assistant/"
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

{% assign project = site.data.projects_ar | where: "slug", "asthma-rag-diagnostic-assistant" | first %}

{% assign aa_project_subtitle = "تجربة تفكير تشخيصي قائمة على الأدلة" %}
{% assign aa_project_summary = "يدرس هذا المشروع أثر الاسترجاع وتصميم الأوامر على التفكير المرتبط بالربو في بيئة مضبوطة. يقارن بين أوامر مباشرة، سلسلة تفكير، وسلسلة تفكير محايدة على حالات مرضية اصطناعية مع استرجاع محلي ومقاييس تقييم." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- قد تتأثر الاستجابات ذات الطابع التشخيصي بالأوامر الموجهة.
- الأعراض المشابهة للربو تحتاج مقارنة مع تفسيرات بديلة مثل الحالات القريبة من COPD.
- التجربة المضبوطة تحتاج حالات اصطناعية، سياقًا مسترجعًا، ومقاييس تكشف الطلاقة والتكرار.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>حالة اصطناعية</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>استرجاع FAISS</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>نمط الأمر</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>استجابة Qwen محلية</strong></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

قاعدة معرفة مخصصة عن الربو، تقسيم نصي متدرج، تضمينات sentence-transformers، مخزن FAISS، و10 حالات مرضية اصطناعية موجبة وسالبة.

## المنهجية التقنية {#technical-approach}

- بناء فهرس استرجاع محلي للسياق المرتبط بالربو.
- مقارنة الأوامر المباشرة، سلسلة التفكير، وسلسلة التفكير المحايدة.
- تقييم الاستجابات باستخدام BLEU وROUGE-L وMETEOR وDistinct-2 وPerplexity وSelf-BLEU.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- ساعدت سلسلة التفكير المحايدة على تحسين الموضوعية في حالة سالبة قريبة من COPD.
- أضافت Perplexity وSelf-BLEU وDistinct-2 إشارات مفيدة تتجاوز مقاييس التطابق اللفظي.
- يوضح المشروع أن المقاييس اللفظية وحدها لا تكفي للحكم على جودة التفكير.

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

يوضح المشروع النمذجة والتقييم على بيانات ذات طابع صحي، ولا يُستخدم لاتخاذ قرارات سريرية. أي استخدام طبي فعلي يتطلب تحققًا خارجيًا، مراجعة مختصين، معايرة، وضوابط تنظيمية.

## التطوير القادم {#future-development}

- إضافة معايير تقييم أقوى للتفكير السريري.
- مقارنة استراتيجيات استرجاع ونماذج محلية أكبر.
- فصل دعم الاستشهادات عن طلاقة الإجابة النهائية.

## القيمة التقنية {#what-this-project-demonstrates}

يربط المشروع بين RAG وتصميم الأوامر والتفكير التشخيصي ومنهجية التقييم في سياق حساس للسلامة.
