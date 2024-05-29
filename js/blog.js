$(document).ready(function () {
  $(".cardbtns").click(function (event) {
    event.preventDefault();
    $(".fixedBlog").css("display", "block");
  });

  $(".closebtn").click(function () {
    $(".fixedBlog").css("display", "none");
  });
});
