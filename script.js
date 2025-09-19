const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuIcon.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  menuIcon.classList.remove('active');
  overlay.classList.remove('active');
});
