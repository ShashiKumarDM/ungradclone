const navBtn = document.querySelector(".nav-btn");
const hamBurger = document.querySelector(".hamburger");
const darkBg = document.querySelector(".dark-back");
const navBar = document.querySelector("nav");

navBtn.addEventListener("click",function(){
    hamBurger.classList.toggle("active");
    darkBg.classList.toggle("active");
    navBar.classList.toggle("active");
});