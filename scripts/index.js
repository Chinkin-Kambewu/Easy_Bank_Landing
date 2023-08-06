const menuBtn = document.querySelector(".menu-toggle-btn");
const navMenu = document.querySelector(".nav-menu");


menuBtn.addEventListener("click", ()=>{
    console.log("btn clicked")
    menuBtn.classList.toggle("fa-times");
    navMenu.classList.toggle("active");
})