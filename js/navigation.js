(function() {
  $(document).ready(function() {
    var menu, menuToggle;
    menu = $(".centered-navigation-menu");
    menuToggle = $(".centered-navigation-menu-button");
    return $(menuToggle).on("click", function(e) {
      e.preventDefault();
      return menu.slideToggle(function() {
        if (menu.is(":hidden")) {
          return menu.removeAttr("style");
        }
      });
    });
  });

}).call(this);
