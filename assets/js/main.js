// Sticky header shadow and small interaction helpers.
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-header]');
  const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });
});
