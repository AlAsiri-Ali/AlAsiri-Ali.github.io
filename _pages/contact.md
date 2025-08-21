---
layout: single
permalink: /contact/
title: "Contact Me"
author_profile: true
---

<style>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.contact-header {
  text-align: center;
  margin-bottom: 50px;
}

.contact-header h1 {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5em;
  margin-bottom: 15px;
}

.contact-subtitle {
  background: linear-gradient(45deg, #4a5568, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.1em;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.contact-method {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.contact-method:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-color: #667eea;
}

.contact-method i {
  font-size: 2.5em;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
  display: block;
}

.contact-method h3 {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.contact-method p {
  color: #5a687d;
  margin: 0;
  font-size: 0.95em;
}

.contact-method a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-method a:hover {
  color: #764ba2;
  text-decoration: underline;
}

.contact-form {
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
}

.form-header {
  text-align: center;
  margin-bottom: 35px;
}

.form-header h2 {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.form-header p {
  background: linear-gradient(45deg, #4a5568, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.form-group {
  margin-bottom: 25px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group label {
  display: block;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 0.95em;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1em;
  transition: all 0.3s ease;
  font-family: inherit;
  background: #fff;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.5;
}

.submit-btn {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 25px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  background: linear-gradient(45deg, #764ba2, #667eea);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.submit-btn:hover::before {
  left: 100%;
}

.form-note {
  margin-top: 20px;
  text-align: center;
  background: linear-gradient(45deg, #4a5568, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 0.9em;
  font-style: italic;
}

.alert-card {
  padding: 25px;
  border-radius: 15px;
  margin-top: 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid transparent;
}
.alert-card h3 { margin: 0 0 12px 0; font-size: 1.15em; }
.alert-card.success { background: #d4edda; color: #155724; border-left-color: #28a745; }
.alert-card.error { background: #f8d7da; color: #721c24; border-left-color: #dc3545; }

[data-theme="dark"] .alert-card { box-shadow: 0 4px 15px rgba(0,0,0,0.25); }
[data-theme="dark"] .alert-card.success { background: #12351d; color: #d1f2dc; border-left-color: #2ea043; }
[data-theme="dark"] .alert-card.error { background: #3a1417; color: #f5c2c7; border-left-color: #f85149; }

[data-theme="dark"] .contact-method {
  background: #1c2128;
  border-color: #30363d;
  color: #c9d1d9;
}

[data-theme="dark"] .contact-method h3 { color: #e6e8eb; background: none; -webkit-text-fill-color: currentColor; }
[data-theme="dark"] .contact-method p { color: #9fb3c8; background: none; -webkit-text-fill-color: currentColor; }

[data-theme="dark"] .contact-form,
html[data-theme="dark"] .contact-form,
body.theme-dark .contact-form {
  background: #161b22 !important;
  border-color: #30363d !important;
  color: #c9d1d9;
}
[data-theme="dark"] .contact-form form,
html[data-theme="dark"] .contact-form form,
body.theme-dark .contact-form form {
  background: #161b22 !important;
  box-shadow: none !important;
  border: none !important;
}

[data-theme="dark"] .form-header h2 { color: #e6e8eb; background: none; -webkit-text-fill-color: currentColor; }
[data-theme="dark"] .form-header p { color: #9fb3c8; background: none; -webkit-text-fill-color: currentColor; }

[data-theme="dark"] .form-group label { color: #c9d1d9; background: none; -webkit-text-fill-color: currentColor; }

[data-theme="dark"] .form-group input,
[data-theme="dark"] .form-group textarea {
  background: #0f1419;
  border-color: #30363d;
  color: #e6e8eb;
}

[data-theme="dark"] .contact-form * {
  background-clip: padding-box;
}
[data-theme="dark"] .contact-form .form-row,
[data-theme="dark"] .contact-form .form-group {
  background: transparent !important;
}

[data-theme="dark"] .form-group input::placeholder,
[data-theme="dark"] .form-group textarea::placeholder {
  color: #8b949e;
}

[data-theme="dark"] .form-group input:focus,
[data-theme="dark"] .form-group textarea:focus {
  border-color: #58a6ff;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
}

[data-theme="dark"] .contact-subtitle { color: #9fb3c8; background: none; -webkit-text-fill-color: currentColor; }
[data-theme="dark"] .form-note { color: #9fb3c8; background: none; -webkit-text-fill-color: currentColor; }

[data-theme="dark"] .submit-btn {
  background: linear-gradient(45deg, #4f63d9, #7a5ad1);
  color: #ffffff;
  box-shadow: 0 6px 18px rgba(88, 166, 255, 0.18);
}
[data-theme="dark"] .submit-btn:hover {
  background: linear-gradient(45deg, #5a6ff0, #8a6df0);
  box-shadow: 0 8px 22px rgba(88, 166, 255, 0.22);
}

@media (max-width: 768px) {
  .contact-container {
    padding: 15px;
  }
  
  .contact-form {
    padding: 25px 20px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .contact-header h1 {
    font-size: 2em;
  }
  
  .contact-methods {
    gap: 20px;
  }
}
</style>

<div class="contact-container">
  
  <div class="contact-header">
    <h1>Get In Touch</h1>
    <p class="contact-subtitle">
      Have a question, want to collaborate, or just want to say hello? I'd love to hear from you! 
      Drop me a message and I'll get back to you as soon as possible.
    </p>
  </div>

  <div class="contact-methods">
    <div class="contact-method">
      <i class="fas fa-envelope"></i>
      <h3>Email</h3>
      <p><a href="mailto:aliasiri.dev@gmail.com">aliasiri.dev@gmail.com</a></p>
    </div>
    
    <div class="contact-method">
      <i class="fab fa-linkedin"></i>
      <h3>LinkedIn</h3>
      <p><a href="https://www.linkedin.com/in/ali-asiri-b85038206/" target="_blank">Connect with me</a></p>
    </div>
    
    <div class="contact-method">
      <i class="fab fa-github"></i>
      <h3>GitHub</h3>
      <p><a href="https://github.com/AlAsiri-Ali" target="_blank">Check out my code</a></p>
    </div>
  </div>

  <div class="contact-form">
    <div class="form-header">
      <h2>Send Me a Message</h2>
      <p>Fill out the form below to create a GitHub Issue</p>
    </div>

    <form id="contactForm">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="Your name">
        </div>
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="_replyto" required placeholder="your.email@example.com">
        </div>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject *</label>
        <input type="text" id="subject" name="_subject" required placeholder="What's this about?" value="Message from Portfolio Website">
      </div>
      
      <div class="form-group">
        <label for="message">Message *</label>
        <textarea id="message" name="message" required placeholder="Tell me more about your project, question, or just say hello!"></textarea>
      </div>
      
      <button type="submit" class="submit-btn">
        <span>Create GitHub Issue</span>
      </button>
      
      <p class="form-note">
        🔒 Your message will be submitted as a public issue on my GitHub repository.
      </p>
    </form>
  </div>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // The URL for creating a new issue in your portfolio repository
    const githubRepoUrl = 'https://github.com/AlAsiri-Ali/AlAsiri-Ali.github.io/issues/new';

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create the body of the GitHub issue using Markdown
    const issueBody = `
**From:** ${name}
**Email:** ${email}
---
${message}
    `;

    // Construct the final URL with query parameters for title, body, and labels
    const finalUrl = `${githubRepoUrl}?title=${encodeURIComponent(subject)}&body=${encodeURIComponent(issueBody)}&labels=contact-message`;

    // Open the pre-filled GitHub issue page in a new tab
    window.open(finalUrl, '_blank');
    
    // --- Visual feedback on the page ---
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.innerHTML = '<span>Redirecting to GitHub... ✅</span>';
    submitBtn.disabled = true;

    // Remove any previous messages
    const existingAlert = this.parentNode.querySelector('.alert-card');
    if (existingAlert) {
      existingAlert.remove();
    }

    const successCard = document.createElement('div');
    successCard.className = 'alert-card success';
    successCard.innerHTML = `
      <h3>✅ Ready to Submit!</h3>
      <p style="margin:0; line-height:1.6;">
        We've prepared your message. Please review and click "Submit new issue" on the GitHub page that just opened.
      </p>
    `;
    this.parentNode.insertBefore(successCard, this.nextSibling);

    this.reset(); // Clear the form

    // Reset the button after a few seconds
    setTimeout(() => {
        submitBtn.innerHTML = '<span>Create GitHub Issue</span>';
        submitBtn.disabled = false;
    }, 4000);
  });
});
</script>