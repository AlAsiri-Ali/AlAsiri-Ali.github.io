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
  background: linear-gradient(45deg, #90cdf4, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .contact-method p {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .contact-form {
  background: #2d3748;
  border-color: #4a5568;
}

[data-theme="dark"] .form-header h2 {
  background: linear-gradient(45deg, #90cdf4, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .form-header p {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .form-group label {
  background: linear-gradient(45deg, #90cdf4, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="dark"] .form-note {
  background: linear-gradient(45deg, #cbd5e0, #90cdf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

    <form action="https://formspree.io/aliasiri.dev@gmail.com" method="POST" id="contactForm">
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
      
      <!-- Hidden fields for Formspree configuration -->
      <input type="hidden" name="_next" value="{{ site.url }}/contact/?sent=true">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_format" value="plain">
      
      <button type="submit" class="submit-btn">
        <span>Send Message</span>
      </button>
      
      <p class="form-note">
        🔒 Your message will be sent directly to aliasiri.dev@gmail.com<br>
        📧 I typically respond within 24 hours during business days<br>
        ⚡ If you don't receive a confirmation, please check your spam folder
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
    successMessage.innerHTML = '🎉 Message sent successfully! Thank you for reaching out.<br>📧 I\'ll get back to you within 24 hours!';
    form.parentNode.insertBefore(successMessage, form);
    
    // Clear the URL parameter
    window.history.replaceState({}, document.title, window.location.pathname);
  }
  
  // Enhanced form submission handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span>Sending Message... ⏳</span>';
    submitBtn.disabled = true;
    
    // Remove any existing messages
    const existingMessages = form.parentNode.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Submit form data
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Show success message
        submitBtn.innerHTML = '<span>Message Sent Successfully! ✅</span>';
        submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        
        // Show detailed success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
          <div style="background: linear-gradient(45deg, #d4edda, #c3e6cb); color: #155724; padding: 25px; border-radius: 15px; margin-top: 25px; border-left: 5px solid #28a745; box-shadow: 0 4px 15px rgba(40, 167, 69, 0.2);">
            <h3 style="margin: 0 0 15px 0; color: #155724; font-size: 1.3em;">✅ Message Sent Successfully!</h3>
            <p style="margin: 0; line-height: 1.8; font-size: 1.05em;">
              🎯 Your message has been delivered to <strong>aliasiri.dev@gmail.com</strong><br>
              📧 You should receive a confirmation email shortly<br>
              ⏰ I'll respond within 24 hours during business days<br>
              📂 If you don't see a response, please check your spam folder<br>
              🔄 The page will refresh in 5 seconds...
            </p>
          </div>
        `;
        
        form.parentNode.insertBefore(successMessage, form.nextSibling);
        form.reset();
        
        // Redirect after 5 seconds
        setTimeout(() => {
          window.location.href = form.querySelector('input[name="_next"]').value;
        }, 5000);
        
      } else {
        throw new Error('Network response was not ok');
      }
    }).catch(error => {
      // Show error message
      submitBtn.innerHTML = '<span>Error! Please try again ❌</span>';
      submitBtn.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
      
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.innerHTML = `
        <div style="background: linear-gradient(45deg, #f8d7da, #f1b0b7); color: #721c24; padding: 25px; border-radius: 15px; margin-top: 25px; border-left: 5px solid #dc3545; box-shadow: 0 4px 15px rgba(220, 53, 69, 0.2);">
          <h3 style="margin: 0 0 15px 0; color: #721c24; font-size: 1.3em;">❌ Message Failed to Send</h3>
          <p style="margin: 0; line-height: 1.8; font-size: 1.05em;">
            There was an error sending your message. Please try:<br>
            🔄 Refreshing the page and trying again<br>
            📧 Sending an email directly to: <strong>aliasiri.dev@gmail.com</strong><br>
            💬 Contacting me through social media links above<br>
            🆘 The issue might be temporary, please try again in a few minutes
          </p>
        </div>
      `;
      
      form.parentNode.insertBefore(errorMessage, form.nextSibling);
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 3000);
    });
  });
});
</script>
