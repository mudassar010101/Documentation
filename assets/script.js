document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach((link) => {
    const linkPath = link.getAttribute('href')?.split('/').pop();
    if (linkPath && currentPath === linkPath) {
      link.classList.add('active');
    }
  });
});
