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
    console.log(target);
  });

  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get the corresponding navbar link
        const targetId = entry.target.id;
        const correspondingNavbarLink = document.querySelector(`.navbar a[href="#${targetId}"]`);
        console.log(`${targetId} is now intersecting!`);
        console.log(`${correspondingNavbarLink} is the corresponding link.`);

        // Remove "active" class from all navbar links
        navbarLinks.forEach(link => {
          link.classList.remove('active');
        });

        // Add "active" class to the corresponding navbar link
        console.log(correspondingNavbarLink.classList)
        correspondingNavbarLink.classList.add('active');
      }
    });
  }
});
