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

/* Alert cards used by dynamic success/error messages */
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

/* Dark variants for alerts and simple messages */
[data-theme="dark"] .alert-card { box-shadow: 0 4px 15px rgba(0,0,0,0.25); }
[data-theme="dark"] .alert-card.success { background: #12351d; color: #d1f2dc; border-left-color: #2ea043; }
[data-theme="dark"] .alert-card.error { background: #3a1417; color: #f5c2c7; border-left-color: #f85149; }
[data-theme="dark"] .message.success { background: #12351d; border-color: #2ea043; color: #d1f2dc; }
[data-theme="dark"] .message.error { background: #3a1417; border-color: #f85149; color: #f5c2c7; }

/* Dark theme support (colors only, same layout) */
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

/* Ensure any inner white panels do not persist in dark */
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

/* Softer focus ring in dark */
[data-theme="dark"] .form-group input:focus,
[data-theme="dark"] .form-group textarea:focus {
  border-color: #58a6ff;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
}

[data-theme="dark"] .contact-subtitle { color: #9fb3c8; background: none; -webkit-text-fill-color: currentColor; }
[data-theme="dark"] .form-note { color: #9fb3c8; background: none; -webkit-text-fill-color: currentColor; }

/* Dark theme button tone */
[data-theme="dark"] .submit-btn {
  background: linear-gradient(45deg, #4f63d9, #7a5ad1);
  color: #ffffff;
  box-shadow: 0 6px 18px rgba(88, 166, 255, 0.18);
}
[data-theme="dark"] .submit-btn:hover {
  background: linear-gradient(45deg, #5a6ff0, #8a6df0);
  box-shadow: 0 8px 22px rgba(88, 166, 255, 0.22);
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
  const successBanner = document.createElement('div');
  successBanner.className = 'message success';
  successBanner.innerHTML = '🎉 Message sent successfully! Thank you for reaching out.<br>📧 I\'ll get back to you within 24 hours!';
  form.parentNode.insertBefore(successBanner, form);
    
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
  const existingMessages = form.parentNode.querySelectorAll('.success-message, .error-message, .alert-card');
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
        const successCard = document.createElement('div');
        successCard.className = 'alert-card success';
        successCard.innerHTML = `
          <h3>✅ Message Sent Successfully!</h3>
          <p style="margin:0; line-height:1.8; font-size:1.05em;">
            🎯 Your message has been delivered to <strong>aliasiri.dev@gmail.com</strong><br>
            📧 You should receive a confirmation email shortly<br>
            ⏰ I'll respond within 24 hours during business days<br>
            📂 If you don't see a response, please check your spam folder<br>
            🔄 The page will refresh in 5 seconds...
          </p>
        `;
        form.parentNode.insertBefore(successCard, form.nextSibling);
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
      
      const errorCard = document.createElement('div');
      errorCard.className = 'alert-card error';
      errorCard.innerHTML = `
        <h3>❌ Message Failed to Send</h3>
        <p style="margin:0; line-height:1.8; font-size:1.05em;">
          There was an error sending your message. Please try:<br>
          🔄 Refreshing the page and trying again<br>
          📧 Sending an email directly to: <strong>aliasiri.dev@gmail.com</strong><br>
          💬 Contacting me through social media links above<br>
          🆘 The issue might be temporary, please try again in a few minutes
        </p>
      `;
      form.parentNode.insertBefore(errorCard, form.nextSibling);
      
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
