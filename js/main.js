let navManusvg = document.querySelector("nav svg");
let navMenu = document.querySelector(".optins");

navManusvg.addEventListener("click", navdisplay);
function navdisplay(){
    navMenu.classList.toggle('active')
    
}