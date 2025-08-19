---
layout: single
permalink: /skills/
title: "Technical Skills"
author_profile: true
---

<style>
.skills-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.skill-category {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: white;
}

.skill-category h3 {
  margin-top: 0;
  margin-bottom: 25px;
  font-size: 1.4em;
  text-align: center;
  color: white;
}

.skill-bar {
  margin-bottom: 20px;
}

.skill-name {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 1.1em;
}

.progress-bar {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  height: 12px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #ffd93d);
  border-radius: 10px;
  transition: width 2s ease-in-out;
  animation: fillAnimation 2s ease-in-out;
}

/* New style for skills being learned */
.progress-fill-learning {
  height: 100%;
  width: 100%; /* Fills the bar to show it's a focus area */
  background-color: #4c90af;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
  animation: moveStripes 2s linear infinite;
}

@keyframes fillAnimation {
  from { width: 0% !important; }
}

@keyframes moveStripes {
  from { background-position: 0 0; }
  to { background-position: 40px 0; }
}

.skills-intro {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 15px;
  color: white;
}

.skills-intro h2 {
  margin-bottom: 15px;
  font-size: 2em;
  color: white;
}

.skills-intro p {
  font-size: 1.1em;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills-container {
    padding: 10px;
  }
  .skill-category {
    padding: 20px;
  }
  .skills-intro {
    padding: 20px;
  }
  .skills-intro h2 {
    font-size: 1.6em;
  }
}
</style>

<div class="skills-container">

<div class="skills-intro">
  <h2>🎯 Technical Expertise</h2>
  <p>A comprehensive overview of my technical skills gained through academic studies, courses, and hands-on projects in AI and Data Science.</p>
</div>

<div class="skill-category">
  <h3>Artificial Intelligence</h3>
  <div class="skill-bar">
    <div class="skill-name"><span>Python</span><span>80%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 80%;"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>Scikit-learn</span><span>75%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 75%;"></div></div>
  </div>
    <div class="skill-bar">
    <div class="skill-name"><span>Reinforcement Learning</span><span>65%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 65%;"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>TensorFlow</span><span>65%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 65%;"></div></div>
  </div>
</div>

<div class="skill-category">
  <h3>Data Engineering & Databases</h3>
  <div class="skill-bar">
    <div class="skill-name"><span>SQL</span><span>60%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 60%;"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>Oracle Database</span><span>60%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 60%;"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>SQL Server</span><span>60%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 75%;"></div></div>
  </div>
</div>

<div class="skill-category">
  <h3>Data Analysis & Libraries</h3>
  <div class="skill-bar">
    <div class="skill-name"><span>Pandas</span><span>80%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 80%;"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>NumPy</span><span>75%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 75%;"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>Matplotlib & Seaborn</span><span>70%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 70%;"></div></div>
  </div>
</div>

<div class="skill-category">
  <h3>Development & Version Control</h3>
  <div class="skill-bar">
    <div class="skill-name"><span>Git & GitHub</span><span>70%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 70%;"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>VS Code & Jupyter</span><span>85%</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 80%;"></div></div>
  </div>
</div>

<div class="skill-category" style="background: linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%);">
  <h3>🎯 Learning & Development Focus</h3>

  <div class="skill-bar">
    <div class="skill-name"><span>Generative AI (GenAI)</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>MLOps</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>Prompt Engineering</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
    <div class="skill-bar">
    <div class="skill-name"><span>Computer Vision</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>Big Data Technologies</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>PyTorch</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>Docker</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>Power BI</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
    <div class="skill-bar">
    <div class="skill-name"><span>AWS Cloud</span><span>Learning</span></div>
    <div class="progress-bar"><div class="progress-fill-learning"></div></div>
  </div>
</div>

<div class="skill-category">
  <h3>🎓 Academic & Professional Development</h3>
  <div class="skill-bar">
    <div class="skill-name"><span>Master's in Artificial Intelligence (KAU)</span><span>In Progress</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 60%; background: linear-gradient(90deg, #2196F3, #64B5F6);"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>Oracle Database Fundamentals</span><span>Completed</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 100%; background: linear-gradient(90deg, #4CAF50, #81C784);"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>SQL Server Database Development</span><span>Completed</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 100%; background: linear-gradient(90deg, #4CAF50, #81C784);"></div></div>
  </div>
  <div class="skill-bar">
    <div class="skill-name"><span>UX Design Fundamentals</span><span>Completed</span></div>
    <div class="progress-bar"><div class="progress-fill" style="width: 100%; background: linear-gradient(90deg, #4CAF50, #81C784);"></div></div>
  </div>
</div>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  const animateProgressBars = () => {
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      if (width && width !== '0%') {
        bar.style.width = '0%';
        setTimeout(() => { bar.style.width = width; }, 100);
      }
    });
  };

  setTimeout(animateProgressBars, 500);
});
</script>