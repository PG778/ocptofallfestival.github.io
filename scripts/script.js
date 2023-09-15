function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    //Karet
    var karet = document.getElementById("downKaret");

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      karet.style.display = "none";
    } else {
      reveals[i].classList.remove("active");
      if (i == 0) {
        karet.style.display = "inline";
      }
    }
  }
}

window.addEventListener("scroll", reveal);
