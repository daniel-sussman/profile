document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('.scroll-link');

  function setThreshold() {
    return window.innerWidth <= 540 ? 0.25 : 0.4;
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: setThreshold(),
  };

  let observer = new IntersectionObserver(callback, options);
  targets.forEach(target => {
    observer.observe(target);
  });

  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get the corresponding navbar link
        const targetId = entry.target.id;
        const correspondingNavbarLink = document.querySelector(`.navbar a[href="#${targetId}"]`);

        // Remove "active" class from all navbar links
        navbarLinks.forEach(link => {
          link.classList.remove('active');
        });

        // Add "active" class to the corresponding navbar link
        correspondingNavbarLink.classList.add('active');
      }
    });
  }
});
