---
layout: single
permalink: /journey/
title: "My Academic Journey"
author_profile: true
---

<style>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 40px auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  border-radius: 2px;
}

.timeline-item {
  padding: 20px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border: 4px solid #fff;
  top: 30px;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

.right::after {
  left: -10px;
}

.timeline-content {
  padding: 20px 30px;
  background: #f8f9fa;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-left: 4px solid #667eea;
}

.timeline-date {
  font-weight: bold;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 0.9em;
  margin-bottom: 10px;
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  
  .timeline-item::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  .left::after, .right::after {
    left: 21px;
  }
  
  .right {
    left: 0%;
  }
}

/* Additional styles for better text appearance */
.timeline-content h3 {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
}

.timeline-content p {
  background: linear-gradient(45deg, #4a5568, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.6;
  margin-bottom: 10px;
}

/* Dark theme support */
[data-theme="dark"] .timeline-content {
  background: #2d3748;
  border-left-color: #90cdf4;
}

[data-theme="dark"] .timeline-item::after {
  border-color: #2d3748;
}

[data-theme="dark"] .timeline-content h3 {
  background: linear-gradient(45deg, #90cdf4, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .timeline-content p {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .timeline-date {
  background: linear-gradient(45deg, #90cdf4, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>

<div class="timeline">
  <div class="timeline-item left">
    <div class="timeline-content">
      <div class="timeline-date">2019 - 2023</div>
      <h3>🎓 Bachelor's in Information Systems</h3>
      <p>Built a solid foundation in programming, databases, and system analysis. This is where my journey with data began, and I discovered my passion for turning information into insights.</p>
      <p><strong>Key Skills:</strong> SQL, Java, System Design, Database Management</p>
    </div>
  </div>
  
  <div class="timeline-item right">
    <div class="timeline-content">
      <div class="timeline-date">2023 - Present</div>
      <h3>🤖 Master's in Artificial Intelligence</h3>
      <p>Diving deep into the world of AI and Machine Learning. Focusing on practical applications and real-world problem solving through data science and intelligent systems.</p>
      <p><strong>Current Focus:</strong> Deep Learning, NLP, Computer Vision, MLOps</p>
    </div>
  </div>
  
  <div class="timeline-item left">
    <div class="timeline-content">
      <div class="timeline-date">2024</div>
      <h3>🚀 First ML Projects</h3>
      <p>Started building my first serious machine learning projects, including recommendation systems and data analysis tools. Learning by doing became my motto.</p>
      <p><strong>Technologies:</strong> Python, Scikit-learn, Pandas, Jupyter</p>
    </div>
  </div>
  
  <div class="timeline-item right">
    <div class="timeline-content">
      <div class="timeline-date">2024 - Present</div>
      <h3>💻 Building This Portfolio</h3>
      <p>Created this digital space to document my learning journey and share my projects with the world. Every project teaches me something new about the intersection of technology and real-world impact.</p>
      <p><strong>Next Goals:</strong> Open-source contributions, Research publications, Industry collaboration</p>
    </div>
  </div>
</div>

---

## 🎯 What's Next?

- **🔬 Research Focus:** Completing my Master's thesis on [Your Research Topic]
- **🏢 Industry Goal:** Applying AI solutions to real business problems
- **🌍 Community:** Contributing to open-source AI projects
- **📚 Continuous Learning:** Staying updated with the latest in AI and ML

The journey continues, and each step brings new challenges and discoveries. I'm excited about what lies ahead!
