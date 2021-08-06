$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
      $("#rocketStable").attr("src", "../../assets/img/rocket-stable.svg");
      $("#back-to-top").css({ position: "fixed", bottom: 10, right: 10 });
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    // change rocket to launch pic, do quick animation
    $("#rocketStable").attr("src", "../../assets/img/rocket-launch.svg");
    $("#back-to-top").animate(
      {
        position: "fixed",
        bottom: 1000,
      },
      800,
      function () {
        // animation complete
      }
    );
    return false;
  });
});
