document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('.scroll-link');

  function setThreshold() {
    return window.innerHeight / 2500
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: setThreshold(),
  };

  observer = new IntersectionObserver(callback, options);
  targets.forEach(target => {
    observer.observe(target);
  });

  function callback(entries, observer) {
    let mostVisibleSection = null;
    let highestIntersectionRatio =  0;

    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > highestIntersectionRatio) {
        mostVisibleSection = entry.target;
        highestIntersectionRatio = entry.intersectionRatio;
      }
    });

    if (mostVisibleSection) {
      navbarLinks.forEach(link => {
        link.classList.remove('active');
      });

      const targetId = mostVisibleSection.id;
      const correspondingNavbarLink = document.querySelector(`.navbar a[href="#${targetId}"]`);
      correspondingNavbarLink.classList.add('active');
    }
  }
});
