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
  background: linear-gradient(45deg, #4a5568, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

/* Success/Error Messages */
.message {
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  font-weight: 500;
  text-align: center;
}

.message.success {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.message.error {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

/* Dark theme support */
[data-theme="dark"] .contact-method {
  background: #2d3748;
  border-color: #4a5568;
}

[data-theme="dark"] .contact-method h3 {
  color: #e2e8f0;
}

[data-theme="dark"] .contact-method p {
  color: #a0aec0;
}

[data-theme="dark"] .contact-form {
  background: #2d3748;
  border-color: #4a5568;
}

[data-theme="dark"] .form-header h2 {
  color: #e2e8f0;
}

[data-theme="dark"] .form-header p {
  color: #a0aec0;
}

[data-theme="dark"] .form-group label {
  color: #e2e8f0;
}

[data-theme="dark"] .form-group input,
[data-theme="dark"] .form-group textarea {
  background: #4a5568;
  border-color: #718096;
  color: #e2e8f0;
}

[data-theme="dark"] .form-group input::placeholder,
[data-theme="dark"] .form-group textarea::placeholder {
  color: #a0aec0;
}

[data-theme="dark"] .contact-subtitle {
  color: #a0aec0;
}

[data-theme="dark"] .form-note {
  color: #a0aec0;
}

/* Mobile responsiveness */
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
    <h1>📧 Get In Touch</h1>
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
      <p><a href="https://linkedin.com/in/aliasiri" target="_blank">Connect with me</a></p>
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
      <p>Fill out the form below and I'll respond within 24 hours</p>
    </div>

    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="Your name">
        </div>
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="your.email@example.com">
        </div>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject *</label>
        <input type="text" id="subject" name="subject" required placeholder="What's this about?">
      </div>
      
      <div class="form-group">
        <label for="message">Message *</label>
        <textarea id="message" name="message" required placeholder="Tell me more about your project, question, or just say hello!"></textarea>
      </div>
      
      <!-- Hidden fields for better organization -->
      <input type="hidden" name="_subject" value="New message from your website">
      <input type="hidden" name="_replyto" value="">
      <input type="hidden" name="_next" value="{{ site.url }}/contact/?sent=true">
      
      <button type="submit" class="submit-btn">
        <span>Send Message</span>
      </button>
      
      <p class="form-note">
        Your message will be sent directly to my inbox. I typically respond within 24 hours.
      </p>
    </form>
  </div>

</div>

<!-- Success/Error message handling -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Check if message was sent successfully
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('sent') === 'true') {
    const form = document.getElementById('contactForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'message success';
    successMessage.innerHTML = '✅ Message sent successfully! I\'ll get back to you soon.';
    form.parentNode.insertBefore(successMessage, form);
    
    // Clear the URL parameter
    window.history.replaceState({}, document.title, window.location.pathname);
  }
  
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
  });
});
</script>
