/*$(document).on("scroll", function () {
  if
    ($(document).scrollTop() > 100) {
    $("header").addClass("shrink");
  }
  else {
    $("header").removeClass("shrink");
  }
});*/


/* swap logos on scroll */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.brand').removeClass('logo-1-background').removeClass('logo-1').addClass('logo-2');
  } else if ($(this).scrollTop() < 50) {
    $('.brand').removeClass('logo-2').addClass('logo-1-background').addClass('logo-1');
  }
});
