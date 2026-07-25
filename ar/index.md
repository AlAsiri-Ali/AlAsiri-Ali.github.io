---
layout: splash
permalink: /ar/
title: "علي العسيري | مهندس أنظمة ذكاء اصطناعي"
excerpt: "مهندس أنظمة ذكاء اصطناعي أبني أنظمة موثوقة في RAG والرؤية الحاسوبية ومعالجة اللغة وتقييم النماذج."
lang: ar
dir: rtl
alternate_url: "/"
image:
  path: /assets/images/OGImage.png
  alt: "علي العسيري - مهندس أنظمة ذكاء اصطناعي"
---

{% assign aa_profile = site.data.profile.ar %}
{% assign govrag = site.data.projects_ar | where: "slug", "govrag-copilot" | first %}
{% assign deepfake = site.data.projects_ar | where: "slug", "deepfake-detection-compression" | first %}
{% assign ppe = site.data.projects_ar | where: "slug", "ppe-safety-detection" | first %}

<section class="aa-hero aa-hero--focused" aria-labelledby="home-title">
  <div class="aa-hero-inner">
    <div class="aa-eyebrow">{{ aa_profile.hero_eyebrow }}</div>
    <h1 id="home-title">{{ aa_profile.hero_title }}</h1>
    <p>{{ aa_profile.hero_summary }}</p>
    <div class="aa-actions">
      <a class="aa-button aa-button-primary" href="#selected-work">عرض الأعمال المختارة</a>
      <a class="aa-button aa-button-secondary" href="https://drive.google.com/file/d/1tUsEhE5urM8c5VnqiSdbE4-_r_KTw8ao/view?usp=sharing" target="_blank" rel="noopener noreferrer">عرض السيرة</a>
      <a class="aa-button aa-button-secondary" href="/ar/contact/">تواصل</a>
    </div>
  </div>
</section>

<div class="aa-container">
  <section class="aa-section" id="selected-work" aria-labelledby="selected-title">
    <div class="aa-section-head">
      <div><div class="aa-eyebrow">أعمال مختارة</div><h2 id="selected-title">مشاريع توضح كيف أتعامل مع بناء أنظمة الذكاء الاصطناعي.</h2></div>
      <p class="aa-lede">مجموعة مختارة من الأعمال في RAG والرؤية الحاسوبية وتقييم النماذج وسير العمل البرمجية. توضح كل دراسة حالة المشكلة وقرارات التنفيذ والنتائج والحدود.</p>
    </div>
    <div class="aa-grid aa-grid-3 aa-home-projects">
      {% include aa/project-card.html project=govrag lang='ar' %}
      {% include aa/project-card.html project=deepfake lang='ar' %}
      {% include aa/project-card.html project=ppe lang='ar' %}
    </div>
    <div class="aa-actions aa-actions--center"><a class="aa-button" href="/ar/projects/">استعراض جميع المشاريع</a></div>
  </section>

  <section class="aa-section" aria-labelledby="value-title">
    <div class="aa-section-head">
      <div><div class="aa-eyebrow">طريقة عملي</div><h2 id="value-title">منظور نظامي يبدأ بالمشكلة وينتهي بالتقييم.</h2></div>
      <p class="aa-lede">يبقي أساس نظم المعلومات التركيز على المستخدمين وتدفق البيانات وقابلية الصيانة والقرار، بينما تضيف خبرتي في الذكاء الاصطناعي النمذجة والتجريب والتنفيذ والتقييم المنظم.</p>
    </div>
    <div class="aa-proof-strip" aria-label="نقاط القوة المهنية">
      <div class="aa-proof-item"><strong>أنظمة الذكاء وRAG</strong><span>الاسترجاع والتوليد القائم على المصادر والاستشهادات وتصميم سير العمل والتقييم.</span></div>
      <div class="aa-proof-item"><strong>الرؤية الحاسوبية</strong><span>التصنيف والكشف والتعلم النقلي والمتانة وبناء سير عمل بصري عملي.</span></div>
      <div class="aa-proof-item"><strong>تقييم النماذج</strong><span>خطوط الأساس ومقارنة النماذج وتحليل الأخطاء واختيار المقاييس وبيان الحدود.</span></div>
      <div class="aa-proof-item"><strong>تصميم دعم القرار</strong><span>واجهات ومخرجات مبنية حول مستخدمين فعليين وقرارات قابلة للمراجعة.</span></div>
    </div>
  </section>

  <section class="aa-section" aria-labelledby="path-title">
    <div class="aa-section-head"><div><div class="aa-eyebrow">الخلفية</div><h2 id="path-title">أساس في نظم المعلومات وتخصص متقدم في الذكاء الاصطناعي.</h2></div></div>
    <div class="aa-grid aa-grid-3">
      <div class="aa-card"><div class="aa-icon" aria-hidden="true">{% include aa/icon.html name="graduation" %}</div><h3>ماجستير مهني في الذكاء الاصطناعي</h3><p>جامعة الملك عبدالعزيز، 2026. دراسة متقدمة في تعلم الآلة والأنظمة الذكية وتطبيقات الذكاء الاصطناعي.</p></div>
      <div class="aa-card"><div class="aa-icon" aria-hidden="true">{% include aa/icon.html name="system" %}</div><h3>بكالوريوس نظم المعلومات</h3><p>جامعة الملك خالد، 2020. أساس في تحليل النظم وقواعد البيانات وسير العمل التنظيمية.</p></div>
      <div class="aa-card"><div class="aa-icon" aria-hidden="true">{% include aa/icon.html name="flask" %}</div><h3>محفظة مشاريع</h3><p>أعمال في RAG والرؤية الحاسوبية وأنظمة اللغة والتحليلات الأمنية والذكاء التوليدي ونمذجة البيانات.</p></div>
    </div>
  </section>

  <section class="aa-section aa-card aa-center aa-cta-card" aria-labelledby="cta-title">
    <div class="aa-eyebrow">متاح للفرص المهنية</div>
    <h2 id="cta-title">تبحث عن مهندس ذكاء اصطناعي يربط بين النماذج والأنظمة والاستخدام العملي؟</h2>
    <p class="aa-lede">أهتم بالفرص الوظيفية والتعاون التقني في أنظمة الذكاء الاصطناعي وتعلم الآلة التطبيقي وRAG والرؤية الحاسوبية وتقييم النماذج.</p>
    <div class="aa-actions"><a class="aa-button aa-button-primary" href="/ar/contact/">ابدأ التواصل</a><a class="aa-button" href="/ar/cv/">عرض الملف المهني</a></div>
  </section>
</div>
