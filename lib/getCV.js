document.addEventListener('DOMContentLoaded', () => {
  const downloadLink = document.querySelectorAll('.download-link');

  downloadLink.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const confirmed = window.confirm("Click 'OK' to view my CV (opens in a new tab).\n\n");

      if (confirmed) {
        window.open(link.getAttribute('href'), '_blank');
      }
    });
  });
});
