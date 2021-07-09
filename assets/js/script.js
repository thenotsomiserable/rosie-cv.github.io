$(document).on("scroll", function () {
  if
    ($(document).scrollTop() > 100) {
    $("header").addClass("shrink").removeClass("brand");
  }
  else {
    $("header").removeClass("shrink");
  }
});
