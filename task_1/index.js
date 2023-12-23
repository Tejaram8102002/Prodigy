window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) { // Adjust the offset as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });