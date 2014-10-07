Navigation =
  root: $('html', 'body')
  menu: $('.centered-navigation-menu')
  menuButton: $('.centered-navigation-menu-button')

  init: ->
    Navigation.pageAnchors()
    Navigation.mobileMenu()

  mobileMenu:  ->
    Navigation.menuButton.on 'click', (e) ->
      e.preventDefault()
      Navigation.menu.slideToggle ->
        Navigation.menu.removeAttr 'style' if Navigation.menu.is(':hidden')

  pageAnchors: ->
    $('.nav-link a').on 'click', (e) ->
      $target = $(this)
      $anchor = $target.attr("href")
      $("html, body").stop().animate
        scrollTop: $($anchor).offset().top
      , 1000, "easeInOutExpo"
      e.preventDefault()

Navigation.init()
