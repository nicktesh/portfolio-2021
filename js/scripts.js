// GRAVITY SWITCH
let gravitySwitch = document.getElementById("gravitySwitch");

gravitySwitch.addEventListener("click", function () {
  if (gravitySwitch.checked) {
    document.querySelectorAll(".element").forEach((item) => {
      item.classList.add("element-float");
    });
  } else {
    document.querySelectorAll(".element").forEach((item) => {
      item.classList.remove("element-float");
    });
  }
});
// END OF GRAVITY SWITCH
