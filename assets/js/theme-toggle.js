(function() {
  const htmlElement = document.documentElement;
  
  // Check if saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  console.log('Saved theme:', savedTheme);
  htmlElement.setAttribute('data-theme', savedTheme);
  
  // Wait for the page to load completely
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, looking for theme toggle button...');
    const themeToggle = document.querySelector('.theme-toggle');
    console.log('Theme toggle found:', themeToggle);
    
    if (themeToggle) {
      // Update the icon when the page loads
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        console.log('Icon updated on load:', icon.className);
      }
      
      themeToggle.addEventListener('click', function(e) {
        console.log('Theme toggle clicked!');
        e.preventDefault();
        e.stopPropagation();
        
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        console.log('Switching from', currentTheme, 'to', newTheme);
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update button icon
        const icon = this.querySelector('i');
        if (icon) {
          icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
          console.log('Icon updated:', icon.className);
        }
        
        return false;
      });
    } else {
      console.log('Theme toggle button not found!');
    }
  });
})();