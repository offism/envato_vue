let MyNavbar = document.querySelector("#mainNav");
function abc() {
  document.addEventListener("scroll", (event) => {
    if (event.path[1].pageYOffset > 0) {
      MyNavbar.style = "background: rgba(0,0,0,.8);";
    } else {
      MyNavbar.style = "background: none;";
    }
  });
}
abc();
