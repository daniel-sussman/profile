document.addEventListener('DOMContentLoaded', () => {
  const downloadLink = document.querySelectorAll('.download-link');

  downloadLink.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const confirmed = window.confirm("Click the 'OK' button to view my CV.  (Opens in a new tab).\n\n");

      if (confirmed) {
        window.open(link.getAttribute('href'), '_blank');
      }
    });
  });
});
