$(document).ready(function () {
  $(".go__top a").click(function () {
    // 1
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 1700);
  });
});

