let close=document.querySelector(".nav__close");
let nav = document.querySelector(".nav__mobile");
let burger = document.querySelector(".adidas");


nav.addEventListener("click", function(){
    nav.classList.add("d-none")
});

burger.addEventListener("click", function () {
  nav.classList.remove("d-none");
});