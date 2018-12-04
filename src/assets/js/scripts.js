(function () {
  function mobileNav() {
    const nav = document.getElementById('navMain');

    document.getElementById('toggleMore')
      .addEventListener('click', function () {
        nav.classList.add('expanded');
        alert('click');
      });

    document.getElementById('toggleLess')
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