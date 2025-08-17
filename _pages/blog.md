---
layout: single
permalink: /blog/
title: "Blog & Articles"
author_profile: true
---

<style>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.blog-header {
  text-align: center;
  margin-bottom: 40px;
}

.blog-header h1 {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5em;
  margin-bottom: 15px;
}

.blog-subtitle {
  color: #666;
  font-size: 1.1em;
  max-width: 600px;
  margin: 0 auto 30px;
}

.search-container {
  max-width: 500px;
  margin: 0 auto 40px;
  position: relative;
}

.search-box {
  width: 100%;
  padding: 15px 20px 15px 50px;
  border: 2px solid #e1e5e9;
  border-radius: 25px;
  font-size: 1em;
  transition: all 0.3s ease;
  outline: none;
}

.search-box:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 1.1em;
}

.category-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0 40px;
}

.category-btn {
  padding: 8px 16px;
  border: 2px solid #667eea;
  background: transparent;
  color: #667eea;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9em;
}

.category-btn:hover,
.category-btn.active {
  background: #667eea;
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.featured-post {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 50px;
  color: white;
  position: relative;
  overflow: hidden;
}

.featured-post::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255,255,255,0.05);
  transform: rotate(45deg);
}

.featured-label {
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 15px;
  opacity: 0.9;
}

.featured-content {
  position: relative;
  z-index: 2;
}

.featured-title {
  font-size: 2em;
  margin-bottom: 15px;
  color: white;
}

.featured-excerpt {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 25px;
  opacity: 0.95;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  font-size: 0.9em;
  opacity: 0.9;
}

.featured-btn {
  display: inline-block;
  padding: 12px 30px;
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.3);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.featured-btn:hover {
  background: rgba(255,255,255,0.3);
  border-color: rgba(255,255,255,0.5);
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.post-card {
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

.post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  text-decoration: none;
  color: inherit;
}

.post-image {
  height: 200px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-placeholder {
  font-size: 3em;
  color: white;
  opacity: 0.8;
}

.post-content {
  padding: 25px;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 0.85em;
  background: linear-gradient(45deg, #4a5568, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-category {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-ai { background: #e3f2fd; color: #1976d2; }
.category-data { background: #f3e5f5; color: #7b1fa2; }
.category-code { background: #e8f5e8; color: #388e3c; }
.category-personal { background: #fff3e0; color: #f57c00; }
.category-research { background: #fce4ec; color: #c2185b; }

/* Dark theme - Enhanced contrast */
[data-theme="dark"] .category-ai { background: #1d4ed8; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .category-data { background: #7c3aed; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .category-code { background: #16a34a; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .category-personal { background: #ea580c; color: #ffffff; font-weight: 600; }
[data-theme="dark"] .category-research { background: #be185d; color: #ffffff; font-weight: 600; }

.reading-time {
  display: flex;
  align-items: center;
  gap: 5px;
}

.post-title {
  font-size: 1.3em;
  font-weight: 600;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
  line-height: 1.4;
}

.post-excerpt {
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

.post-link {
  display: inline-flex;
  align-items: center;
  color: #667eea;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-link:hover {
  color: #764ba2;
  text-decoration: none;
}

.post-link i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.post-link:hover i {
  transform: translateX(5px);
}

.no-posts {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.no-posts i {
  font-size: 4em;
  margin-bottom: 20px;
  color: #ddd;
}

/* Dark theme support */
[data-theme="dark"] .post-card {
  background: #2d3748;
  border-color: #4a5568;
  color: #e2e8f0;
}

[data-theme="dark"] .post-title {
  background: linear-gradient(45deg, #90cdf4, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .post-excerpt {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .post-meta {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .blog-subtitle {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .search-box {
  background: #2d3748;
  border-color: #4a5568;
  color: #e2e8f0;
}

/* Responsive */
@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .featured-post {
    padding: 30px 25px;
  }
  
  .featured-title {
    font-size: 1.6em;
  }
  
  .category-filters {
    gap: 8px;
  }
  
  .category-btn {
    padding: 6px 12px;
    font-size: 0.85em;
  }
}
</style>

<div class="blog-container">
  
  <div class="blog-header">
    <h1> Blog & Articles</h1>
    <p class="blog-subtitle">
      Welcome to my digital thoughts! Here I share insights, tutorials, and reflections on AI, technology, and my learning journey.
    </p>
  </div>

  <div class="search-container">
    <i class="fas fa-search search-icon"></i>
    <input type="text" class="search-box" placeholder="Search articles, topics, or keywords..." id="searchInput">
  </div>

  <div class="category-filters">
    <span class="category-btn active" data-filter="all">All Posts</span>
    <span class="category-btn" data-filter="ai">AI & ML</span>
    <span class="category-btn" data-filter="data">Data Science</span>
    <span class="category-btn" data-filter="code">Programming</span>
    <span class="category-btn" data-filter="personal">Personal</span>
    <span class="category-btn" data-filter="research">Research</span>
  </div>

  {% assign posts = site.posts %}
  {% if posts.size > 0 %}
    
    <!-- Featured Post (Latest) -->
    {% assign featured_post = posts.first %}
    <article class="featured-post">
      <div class="featured-content">
        <div class="featured-label">⭐ FEATURED POST</div>
        <h2 class="featured-title">{{ featured_post.title }}</h2>
        <p class="featured-excerpt">{{ featured_post.excerpt | strip_html | truncatewords: 30 }}</p>
        <div class="featured-meta">
          <span>📅 {{ featured_post.date | date: "%B %d, %Y" }}</span>
          <span class="reading-time">📖 {{ featured_post.content | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
          {% if featured_post.categories.first %}
            <span class="post-category category-{{ featured_post.categories.first | downcase }}">{{ featured_post.categories.first }}</span>
          {% endif %}
        </div>
        <a href="{{ featured_post.url }}" class="featured-btn">
          Read Full Article <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>

    <!-- All Posts Grid -->
    <div class="posts-grid" id="postsGrid">
      {% for post in posts %}
        <article class="post-card" data-category="{% if post.categories.first %}{{ post.categories.first | downcase }}{% else %}general{% endif %}" data-title="{{ post.title | downcase }}" data-content="{{ post.content | strip_html | downcase }}">
          <div class="post-image">
            {% if post.header.teaser %}
              <img src="{{ post.header.teaser }}" alt="{{ post.title }}" />
            {% else %}
              <div class="post-placeholder">✍️</div>
            {% endif %}
          </div>
          <div class="post-content">
            <div class="post-meta">
              {% if post.categories.first %}
                <span class="post-category category-{{ post.categories.first | downcase }}">{{ post.categories.first }}</span>
              {% endif %}
              <span>📅 {{ post.date | date: "%b %d, %Y" }}</span>
              <span class="reading-time">
                <i class="fas fa-clock"></i>
                {{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min
              </span>
            </div>
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            <a href="{{ post.url }}" class="post-link">
              Read More <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
      {% endfor %}
    </div>

  {% else %}
    <div class="no-posts">
      <i class="fas fa-pen-alt"></i>
      <h3>Coming Soon!</h3>
      <p>I'm working on some amazing articles. Check back soon for insights on AI, programming, and my learning journey!</p>
    </div>
  {% endif %}

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const categoryButtons = document.querySelectorAll('.category-btn');
  const postCards = document.querySelectorAll('.post-card');
  const postsGrid = document.getElementById('postsGrid');
  
  let currentCategory = 'all';
  let currentSearch = '';

  // Category filtering
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-filter');
      filterPosts();
    });
  });

  // Search functionality
  searchInput.addEventListener('input', function() {
    currentSearch = this.value.toLowerCase();
    filterPosts();
  });

  function filterPosts() {
    postCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = card.getAttribute('data-title');
      const content = card.getAttribute('data-content');
      
      const matchesCategory = currentCategory === 'all' || category === currentCategory;
      const matchesSearch = currentSearch === '' || 
                          title.includes(currentSearch) || 
                          content.includes(currentSearch);
      
      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
});
</script>
