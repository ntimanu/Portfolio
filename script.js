const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('hidden');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  toggleButton.classList.remove('active');
  navbarLinks.classList.remove('active');
}));
