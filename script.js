// ==========================================================================
// NAVEGACIÓN SUAVE (SMOOTH SCROLL)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Limpiar cualquier preferencia antigua de tema en el navegador
  localStorage.removeItem('maricelba-theme');
  document.documentElement.removeAttribute('data-theme');

  // Suavizar desplazamiento al hacer clic en enlaces del menú
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
