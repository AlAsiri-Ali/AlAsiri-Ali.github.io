(function() {
  const bodyElement = document.body;
  
  // Check if saved theme
  const savedTheme = localStorage.getItem('theme') || 'air';
  console.log('Saved theme:', savedTheme);
  
  // Apply saved theme
  bodyElement.className = bodyElement.className.replace(/skin--\w+/, '');
  bodyElement.classList.add('skin--' + savedTheme);
  
  // Wait for the page to load completely
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, looking for theme toggle button...');
    const themeToggle = document.querySelector('.theme-toggle');
    console.log('Theme toggle found:', themeToggle);
    
    if (themeToggle) {
      // Update the icon when the page loads
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = savedTheme === 'dirt' ? 'fas fa-sun' : 'fas fa-moon';
        console.log('Icon updated on load:', icon.className);
      }
      
      themeToggle.addEventListener('click', function(e) {
        console.log('Theme toggle clicked!');
        e.preventDefault();
        e.stopPropagation();
        
        // Get current theme
        const currentTheme = bodyElement.classList.contains('skin--dirt') ? 'dirt' : 'air';
        const newTheme = currentTheme === 'dirt' ? 'air' : 'dirt';
        
        console.log('Switching from', currentTheme, 'to', newTheme);
        
        // Remove old theme and add new theme
        bodyElement.className = bodyElement.className.replace(/skin--\w+/, '');
        bodyElement.classList.add('skin--' + newTheme);
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
        
        // Update button icon
        const icon = this.querySelector('i');
        if (icon) {
          icon.className = newTheme === 'dirt' ? 'fas fa-sun' : 'fas fa-moon';
          console.log('Icon updated:', icon.className);
        }
        
        return false;
      });
    } else {
      console.log('Theme toggle button not found!');
    }
  });
})();