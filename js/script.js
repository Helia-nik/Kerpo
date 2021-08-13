//mobile version navbar

//search desktop open

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
//search desktop close

closeBtn.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    serachContainer.classList.add("hide");
    overlay.classList.remove("show");

})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    serachContainer.classList.add("hide");
    overlay.classList.remove("show");

})

/* mobile icon*/
const menuIconContainer = document.querySelector(".nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active"),
        menuIconContainer.classList.toggle("active")
})


/* bag desktop */
const bagBtn = document.querySelector(".desktop-navbar .shop-nav");
const bagDesk = document.querySelector(".bag-desktop");
const caret = document.querySelector(".caret-desktop")

bagBtn.addEventListener("click", () => {
    caret.classList.toggle("hide-bag");
    bagDesk.classList.toggle("hide-bag");
  

})

/*bag mobile*/
const bagMobilebtn = document.querySelector(".mobile-navbar .shop-nav");
const bagMobile = document.querySelector(".bag-mobile");
const caretMobile = document.querySelector(".caret-mobile")

bagMobilebtn.addEventListener("click", () => {
    caretMobile.classList.toggle("hide-bag");
    bagMobile.classList.toggle("hide-bag");
    overlay.classList.toggle("show1");

})

//search mobile

const searchBar = document.querySelector(".mobile-search-container .search-bar")
const nav = document.querySelector(".nav-container .nav")
const searchInput = document.querySelector(".mobile-search-container input")
// desktopNav
searchInput.addEventListener("click",() => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

const cancelbtn =document.querySelector(".cancel-btn")
cancelbtn.addEventListener("click",() => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})


//mobile version navbar









//mobile footer


const accordions = document.querySelectorAll(".footer-list");
accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active")
    })
});

