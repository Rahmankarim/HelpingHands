$(document).ready(function () {
  $(".carousel-caption").slideDown(2000);

  $(".carousel-control-prev , .carousel-control-next").click(function () {
    $(".carousel-caption").hide();
    $(".carousel-caption").slideDown(2000);
  });
});
