(function () {
  function mobileNav() {
    var nav = document.getElementById('nav-main');

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
        var mQ = window.matchMedia("(min-width: 480px)");
        mQ.addListener(unsetExpanded);
        unsetExpanded(mQ);
      }
    }

    watchResize(nav);
  }

  window.addEventListener('load', function () {
    mobileNav();
  });
})();