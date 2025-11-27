document.addEventListener('DOMContentLoaded', () => {
  console.log('SimplicIT App Initialized');

  // Basic Navigation Handling (Prototype)
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked
      link.classList.add('active');
      
      // Update Page Title (Mock)
      const pageTitle = document.querySelector('.page-title');
      if (pageTitle) {
        pageTitle.textContent = link.textContent.trim();
      }
      
      console.log(`Navigated to: ${link.textContent.trim()}`);
    });
  });
});
