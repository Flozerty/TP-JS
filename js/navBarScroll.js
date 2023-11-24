document.querySelectorAll('a[href^="#"]').forEach(element => {
  element.addEventListener('click', e => {
    const href = e.getAttribute('href');
    const ancre = document.querySelector(href);

    window.scrollTo({
      top: ancre.offsetTop,
      behavior: 'smooth'
    })
  });
});