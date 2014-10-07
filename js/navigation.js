(function() {
  var Navigation;

  Navigation = {
    root: $('html', 'body'),
    menu: $('.centered-navigation-menu'),
    menuButton: $('.centered-navigation-menu-button'),
    init: function() {
      Navigation.pageAnchors();
      return Navigation.mobileMenu();
    },
    mobileMenu: function() {
      return Navigation.menuButton.on('click', function(e) {
        e.preventDefault();
        return Navigation.menu.slideToggle(function() {
          if (Navigation.menu.is(':hidden')) {
            return Navigation.menu.removeAttr('style');
          }
        });
      });
    },
    pageAnchors: function() {
      return $('.nav-link a').on('click', function(e) {
        var $anchor, $target;
        $target = $(this);
        $anchor = $target.attr("href");
        $("html, body").stop().animate({
          scrollTop: $($anchor).offset().top
        }, 1000, "easeInOutExpo");
        return e.preventDefault();
      });
    }
  };

  Navigation.init();

}).call(this);
