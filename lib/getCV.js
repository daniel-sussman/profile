document.addEventListener('DOMContentLoaded', () => {
  const downloadLink = document.getElementById('downloadLink');

  downloadLink.addEventListener('click', (event) => {
    event.preventDefault();
    const confirmed = window.confirm("Click the OK button if you'd like to download my CV.\n\n");

    if (confirmed) {
      window.open(downloadLink.getAttribute('href'), '_blank');
    }
  });
});
