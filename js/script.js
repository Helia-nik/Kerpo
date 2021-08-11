//mobile version navbar

const searchBtn = document.querySelector(".search-nav")
const closeBtn = document.querySelector(".close-container");

const desktopNav = document.querySelector(".desktop-navbar")
const serachContainer = document.querySelector(".search-container")
const overlay = document.querySelector(".overlay")

searchBtn.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    serachContainer.classList.remove("hide");
    overlay.classList.add("show");

})

closeBtn.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    serachContainer.classList.add("hide");
    overlay.classList.remove("show");

})


const menuIconContainer = document.querySelector(".nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active"),
        menuIconContainer.classList.toggle("active")
})


/* bag desktop */
const bagBtn = document.querySelector(".desktop-navbar .shop-nav");
const bagDesk=document.querySelector(".bag-desktop");
const caret=document.querySelector(".bagview")

bagBtn.addEventListener("click", () => {
    caret.classList.toggle("hide-bag");
    bagDesk.classList.toggle("hide-bag");

})


//mobile version navbar