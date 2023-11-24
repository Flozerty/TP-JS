document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-link");

  burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 783) {
      navMenu.style.transition = 'none';
      navMenu.classList.remove('active');

      setTimeout(() => {
        navMenu.style.transition = '';
      }, 1000);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});
