// SMOOTH SCROLLING
$(document).ready(function () {
  // add smooth scrolling to all links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      // store hash
      let hash = this.hash;

      // animation for scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        100,
        function () {
          // add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});
// END OF SMOOTH SCROLLING

// SCROLL TO TOP
if (document.getElementById("homepageMain")) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
        $("#rocketStable").attr("src", "assets/img/rocket-stable.svg");
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
      $("#rocketStable").attr("src", "assets/img/rocket-launch.svg");
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
}
// END OF SCROLL TO TOP

// GRAVITY SWITCH AND MESSAGE
if (document.getElementById("homepageMain")) {
  let gravitySwitch = document.getElementById("gravitySwitch");
  let gravityBox = document.getElementById("gravityBox");
  let gravityMsg = document.getElementById("gravityMsg");

  gravitySwitch.addEventListener("click", function () {
    if (gravitySwitch.checked) {
      document.querySelectorAll(".element").forEach((item) => {
        item.classList.add("element-float");
        gravityBox.classList.add("activeGravity");
        gravityMsg.innerHTML = "Gravity has been turned off";
        document.body.classList.add("overflowHidden");
        setTimeout(function () {
          gravityBox.classList.remove("activeGravity");
          document.body.classList.remove("overflowHidden");
        }, 2000);
      });
    } else {
      document.querySelectorAll(".element").forEach((item) => {
        item.classList.remove("element-float");
        gravityBox.classList.add("activeGravity");
        gravityMsg.innerHTML = "Gravity has been turned back on";
        document.body.classList.add("overflowHidden");
        setTimeout(function () {
          gravityBox.classList.remove("activeGravity");
          document.body.classList.remove("overflowHidden");
        }, 2000);
      });
    }
  });
}

// END OF GRAVITY SWITCH AND MESSAGE
