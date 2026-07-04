---
title: "SDXL ControlNet Image Workflow"
excerpt: "سير عمل لتوليد الصور يقارن بين SDXL، التحرير الدلالي عبر Img2Img، توجيه ControlNet Canny، وتقييم LPIPS/PSNR."
image: /assets/images/projects/sdxl-controlnet-image-workflow.png
lang: ar
dir: rtl
alternate_url: "/projects/sdxl-controlnet-image-workflow/"
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

{% assign project = site.data.projects_ar | where: "slug", "sdxl-controlnet-image-workflow" | first %}

{% assign aa_project_subtitle = "سير عمل لتوليد الصور والتحكم بها وتقييمها" %}
{% assign aa_project_summary = "يستكشف هذا المشروع سير عمل للصور التوليدية يبدأ من SDXL، ثم التحرير الدلالي عبر Img2Img، ثم توجيه ControlNet Canny للحفاظ على البنية، مع تقييم التغير بصريًا ورقميًا." %}
{% include aa/project-hero-showcase.html project=project subtitle=aa_project_subtitle summary=aa_project_summary lang='ar' %}

## التحدي {#challenge}

- نماذج توليد الصور قد تنتج صورًا قوية لكنها لا تحافظ دائمًا على البنية أثناء التعديل.
- قد يغير Img2Img المحتوى الدلالي لكنه قد يبتعد عن هندسة الصورة الأصلية.
- يوفر ControlNet طريقة للحفاظ على البنية مع السماح بتغيير الأسلوب والإضاءة.

## تصميم النظام {#system-architecture}

<div class="aa-pipeline" aria-label="Project workflow">
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="document" %}</span><strong>وصف نصي</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</span><strong>صورة SDXL أولية</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="ai" %}</span><strong>تعديل Img2Img</strong></div>
  <div class="aa-pipeline-step"><span class="aa-icon" aria-hidden="true">{% include aa/icon.html name="chart" %}</span><strong>مخرج ControlNet Canny</strong></div>
</div>

## البيانات والمدخلات {#data-and-inputs}

تُستخدم لقطة مدينة مستقبلية كحالة اختبار مضبوطة، مع استخراج حواف Canny من الصورة الأصلية لتوجيه البنية.

## المنهجية التقنية {#technical-approach}

- توليد صورة أولية باستخدام SDXL ووصف نصي تفصيلي.
- استخدام Img2Img لإضافة محتوى دلالي جديد مع الحفاظ على الأسلوب العام.
- استخدام ControlNet Canny لتحويل المشهد مع الحفاظ على هندسة الأفق.
- تقييم الصورة الناتجة باستخدام LPIPS وPSNR.

## التقييم والنتائج {#evaluation-and-results}

{% include aa/project-metrics.html project=project lang='ar' %}

- حافظ ControlNet على هندسة الأفق بصورة أفضل من Img2Img وحده.
- أظهر LPIPS تغيرًا إدراكيًا واضحًا مع بقاء هوية المشهد قابلة للتعرف.
- كان انخفاض PSNR متوقعًا بسبب تغير الإضاءة والألوان بدرجة كبيرة.

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

- مقارنة شروط ControlNet إضافية وقيم مختلفة لقوة التوجيه.
- إضافة تجارب متعددة للبذور لفصل أثر الوصف عن اختلافات العينة.
- بناء معرض صغير يقارن المخرجات جنبًا إلى جنب.

## القيمة التقنية {#what-this-project-demonstrates}

يوضح المشروع كيف يمكن لسير عمل الصور التوليدية أن يجمع بين التحرير الإبداعي، توجيه البنية، والمقارنة القابلة للقياس.
