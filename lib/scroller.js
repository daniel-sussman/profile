document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.scroll-link');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
          } else {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
      });
  });
});
