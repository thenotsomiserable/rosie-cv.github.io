$(document).on("scroll", function () {
  if
    ($(document).scrollTop() > 100) {
    $("header").addClass("shrink");
    $(".brand").toggleClass("toggle");
  }
  else {
    $("header").removeClass("shrink");
    $("header").addClass("brand");
  }
});
