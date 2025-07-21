(() => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Obsługa rozwijania dropdown tylko na mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.closest('.navItem');

      // Jeśli jesteśmy na mobile (szerokość < 1090px)
      if (window.innerWidth < 1090) {
        parent.classList.toggle('active');
      }
    });
  });

  // Zamknij inne dropdowny po kliknięciu poza
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navItem')) {
      document.querySelectorAll('.navItem.active').forEach(item =>
        item.classList.remove('active')
      );
    }
  });
})();
