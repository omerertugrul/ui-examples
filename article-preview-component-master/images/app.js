const share = document.querySelector(".share");
const popup = document.querySelector(".popup");

share.addEventListener("click", function () {
  share.classList.toggle("active");
  popup.classList.toggle("active");

});