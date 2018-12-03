(function () {
  function mobileNav() {
    const nav = document.getElementById('nav-main');

    document.getElementById('nav-toggle__more')
      .addEventListener('click', function () {
        nav.classList.add('expanded');
      });

    document.getElementById('nav-toggle__less')
      .addEventListener('click', function () {
        nav.classList.remove('expanded');
      });

    function watchResize(el) {
      function unsetExpanded(mQ) {
        if (mQ.matches) {
          el.classList.remove('expanded');
        }
      }

      if (matchMedia) {
        const mQ = window.matchMedia("(min-width: 480px)");
        mQ.addListener(unsetExpanded);
        unsetExpanded(mQ);
      }
    }

    watchResize(nav);
  }

  function setPhotoOrientation() {
    const el = document.querySelector('.post-image img');

    (el.height > el.width) ?
      el.parentElement.classList.add('vertical') :
      el.parentElement.classList.add('horizontal');
  }

  window.addEventListener('load', function () {
    mobileNav();
    setPhotoOrientation();
  });
})();