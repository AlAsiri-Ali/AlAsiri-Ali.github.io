---
layout: single
title: "My Projects"
permalink: /projects/
collection: portfolio
author_profile: true
---

<style>
.projects-container .project-title {
  font-size: 1.5em;
  font-weight: 600;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}ax-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.projects-header {
  text-align: center;
  margin-bottom: 40px;
}

.projects-header h1 {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5em;
  margin-bottom: 15px;
}

.projects-subtitle {
  color: #666;
  font-size: 1.1em;
  max-width: 600px;
  margin: 0 auto;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 40px 0;
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #667eea;
  background: transparent;
  color: #667eea;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
}

.filter-btn:hover,
.filter-btn.active {
  background: #667eea;
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.project-card {
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  text-decoration: none;
  color: inherit;
}

.project-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-image-placeholder {
  font-size: 3em;
  color: white;
  opacity: 0.8;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-weight: bold;
  font-size: 1.1em;
}

.project-content {
  padding: 25px;
}

.project-title {
  font-size: 1.3em;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.project-excerpt {
  background: linear-gradient(45deg, #4a5568, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.tag {
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 500;
  color: white;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.tag.python { background: #3776ab; }
.tag.ml { background: #ff6b6b; }
.tag.data { background: #4ecdc4; }
.tag.web { background: #45b7d1; }
.tag.api { background: #96ceb4; }
.tag.cloud { background: #ffeaa7; color: #333; }
.tag.javascript { background: #f7df1e; color: #333; }
.tag.react { background: #61dafb; color: #333; }

/* Dark theme - Enhanced contrast for better visibility */
[data-theme="dark"] .tag.python { background: #2563eb; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .tag.ml { background: #dc2626; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .tag.data { background: #059669; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .tag.web { background: #0284c7; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .tag.api { background: #16a34a; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .tag.cloud { background: #ca8a04; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .tag.javascript { background: #eab308; color: #000000; font-weight: 600; }
[data-theme="dark"] .tag.react { background: #06b6d4; color: #000000; font-weight: 600; }

.project-link {
  display: inline-flex;
  align-items: center;
  color: #667eea;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #764ba2;
  text-decoration: none;
}

.project-link i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.project-link:hover i {
  transform: translateX(5px);
}

/* Dark theme support */
[data-theme="dark"] .project-card {
  background: #2d3748;
  border-color: #4a5568;
  color: #e2e8f0;
}

[data-theme="dark"] .project-title {
  background: linear-gradient(45deg, #90cdf4, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .project-excerpt {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .projects-subtitle {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .filter-buttons {
    gap: 8px;
  }
  
  .filter-btn {
    padding: 8px 16px;
    font-size: 0.9em;
  }
}
</style>

<div class="projects-container">
  
  <div class="projects-header">
    <h1>My Projects</h1>
    <p class="projects-subtitle">
      Here are some of the projects I've worked on throughout my academic and personal journey. Each project represents a step forward in my learning and a solution to real-world challenges.
    </p>
  </div>

  <div class="filter-buttons">
    <span class="filter-btn active" data-filter="all">All Projects</span>
    <span class="filter-btn" data-filter="ml">Machine Learning</span>
    <span class="filter-btn" data-filter="data">Data Science</span>
    <span class="filter-btn" data-filter="web">Web Development</span>
    <span class="filter-btn" data-filter="api">APIs & Backend</span>
  </div>

  <div class="projects-grid">
    
    {% for project in site.portfolio %}
    <a href="{{ project.url }}" class="project-card" data-category="{% if project.tags %}{{ project.tags | join: ' ' }}{% else %}ml data{% endif %}">
      <div class="project-image">
        {% if project.header.teaser %}
          <img src="{{ project.header.teaser }}" alt="{{ project.title }}" />
        {% else %}
          <div class="project-image-placeholder">🚀</div>
        {% endif %}
        <div class="project-overlay">
          <span class="overlay-text">View Project Details</span>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-excerpt">
          {{ project.excerpt | strip_html | truncatewords: 20 }}
        </p>
        <div class="project-tags">
          {% if project.tags %}
            {% for tag in project.tags %}
              <span class="tag {{ tag | downcase }}">{{ tag }}</span>
            {% endfor %}
          {% else %}
            <span class="tag python">Python</span>
            <span class="tag ml">ML</span>
          {% endif %}
        </div>
        <span class="project-link">
          Learn More <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    {% endfor %}
    
    <!-- Coming Soon Project -->
    <div class="project-card" data-category="ml">
      <div class="project-image">
        <div class="project-image-placeholder">🔮</div>
      </div>
      <div class="project-content">
        <h3 class="project-title">AI Chatbot Assistant</h3>
        <p class="project-excerpt">
          An intelligent chatbot using natural language processing to help users with common queries and tasks. Currently in development.
        </p>
        <div class="project-tags">
          <span class="tag python">Python</span>
          <span class="tag ml">NLP</span>
          <span class="tag api">API</span>
        </div>
        <span class="project-link">
          Coming Soon <i class="fas fa-clock"></i>
        </span>
      </div>
    </div>

  </div>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else {
          const categories = card.getAttribute('data-category');
          if (categories && categories.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
});
</script>
