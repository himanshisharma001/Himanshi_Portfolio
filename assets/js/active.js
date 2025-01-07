(function ($) {
  'use strict';

  // Preloader Active Code
  $(window).on('load', function () {
    $('#preloader').queue(function () {
      $(this).remove();
    });
  });

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('.site-header-sticky').addClass('scrolling');
    } else {
      $('.site-header-sticky').removeClass('scrolling');
    }
    if ($(window).scrollTop() >= 200) {
      $('.site-header-sticky.scrolling').addClass('reveal-header');
    } else {
      $('.site-header-sticky.scrolling').removeClass('reveal-header');
    }
  });


  // Scroll Down Section
  $('.scroll-down').click(function () {
    $('html, body').animate(
      { scrollTop: $('section.experience-area').offset().top },
      500,
      'linear'
    );
    return false;
  });
})(jQuery);
