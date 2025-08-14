---
layout: single
permalink: /about/
title: "About Me"
author_profile: true
---

<style>
.about-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.intro-section {
  text-align: center;
  margin-bottom: 50px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.intro-section h2 {
  color: white !important;
  margin-bottom: 15px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.about-card {
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  text-decoration: none;
  color: inherit;
  display: block;
}

.about-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  border-color: #667eea;
  text-decoration: none;
  color: inherit;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card-icon {
  font-size: 2.5em;
  margin-right: 15px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card-title {
  font-size: 1.4em;
  font-weight: 600;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.card-description {
  background: linear-gradient(45deg, #4a5568, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  color: #667eea;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-link:hover {
  color: #764ba2;
  text-decoration: none;
}

.card-link i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.card-link:hover i {
  transform: translateX(5px);
}

.quick-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 40px 0;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 15px;
}

.fact-item {
  text-align: center;
  padding: 20px;
}

.fact-number {
  font-size: 2em;
  font-weight: bold;
  color: #667eea;
  display: block;
}

.fact-label {
  color: #666;
  font-weight: 500;
  margin-top: 5px;
}

/* Dark theme support */
[data-theme="dark"] .about-card {
  background: #2d3748;
  border-color: #4a5568;
  color: #e2e8f0;
}

[data-theme="dark"] .card-title {
  background: linear-gradient(45deg, #90cdf4, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .card-description {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .quick-facts {
  background: #2d3748;
}

[data-theme="dark"] .fact-number {
  color: #81c9ff;
}

[data-theme="dark"] .fact-label {
  color: #cbd5e0;
}
</style>

<div class="about-container">
  
  <div class="intro-section">
    <h2>👋 Welcome to My Digital Space</h2>
    <p style="font-size: 1.1em; margin: 0;">
      I'm Ali AlAsiri, a Master's student in Artificial Intelligence with a passion for data, algorithms, and solving real-world problems through elegant, data-driven solutions.
    </p>
  </div>

  <div class="cards-grid">
    
    <a href="/journey/" class="about-card">
      <div class="card-header">
        <div class="card-icon">🎓</div>
        <h3 class="card-title">Academic Journey</h3>
      </div>
      <p class="card-description">
        From Information Systems to AI specialization. Explore my educational path, milestones, and the evolution of my interests in artificial intelligence.
      </p>
      <span class="card-link">
        View My Journey <i class="fas fa-arrow-right"></i>
      </span>
    </a>

    <a href="/skills/" class="about-card">
      <div class="card-header">
        <div class="card-icon">💻</div>
        <h3 class="card-title">Technical Skills</h3>
      </div>
      <p class="card-description">
        Dive deep into my technical expertise in Machine Learning, Python, Data Science, and the tools I use to bring ideas to life.
      </p>
      <span class="card-link">
        Explore Skills <i class="fas fa-arrow-right"></i>
      </span>
    </a>

    <a href="/projects/" class="about-card">
      <div class="card-header">
        <div class="card-icon">🚀</div>
        <h3 class="card-title">My Projects</h3>
      </div>
      <p class="card-description">
        Hands-on projects in Machine Learning and Data Engineering. Real code, real challenges, real solutions that make an impact.
      </p>
      <span class="card-link">
        View Projects <i class="fas fa-arrow-right"></i>
      </span>
    </a>

    <a href="/blog/" class="about-card">
      <div class="card-header">
        <div class="card-icon">✍️</div>
        <h3 class="card-title">Blog & Insights</h3>
      </div>
      <p class="card-description">
        My thoughts, tutorials, and reflections on AI, technology trends, and the journey of learning in public.
      </p>
      <span class="card-link">
        Read Articles <i class="fas fa-arrow-right"></i>
      </span>
    </a>

  </div>

  <div class="quick-facts">
    <div class="fact-item">
      <span class="fact-number">2+</span>
      <span class="fact-label">Years in AI</span>
    </div>
    <div class="fact-item">
      <span class="fact-number">5+</span>
      <span class="fact-label">Projects Built</span>
    </div>
    <div class="fact-item">
      <span class="fact-number">∞</span>
      <span class="fact-label">Curiosity Level</span>
    </div>
    <div class="fact-item">
      <span class="fact-number">24/7</span>
      <span class="fact-label">Learning Mode</span>
    </div>
  </div>

</div>

---

## 🎯 What Drives Me

I believe that the most complex challenges have elegant, data-driven solutions. My goal is to bridge the gap between cutting-edge AI research and practical applications that solve real-world problems.

Whether you're here to explore a project, read an article, or just out of curiosity - I'm glad you're here! Let's build the future, one algorithm at a time.

---

*Currently pursuing my Executive Master's in AI while building practical projects that solve real-world problems. Always open to collaboration and new challenges.*
