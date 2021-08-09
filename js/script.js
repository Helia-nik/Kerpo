//mobile version


// function myFunction(x) {
//     x.classList.toggle("change");
//     // x.classList.toggle("myNav");
//     // document.getElementById("myNav").style.height = "100%";
//     document.getElementById("myNav").classList.toggle("test");

//     // document.getElementById("t").classList.toggle("dis-none");
//     // document.getElementById("t1").classList.toggle("dis-none");
// }


const searchBtn = document.querySelector(".search-nav")

const closeBtn =document.querySelector(".close-btn");

const desktopNav =document.querySelector(".desktop-navbar")
const serachContainer =document.querySelector(".search-container")
const overlay =document.querySelector(".overlay")

searchBtn.addEventListener("click" ,()=>{
    desktopNav.classList.add("hide");
    serachContainer.classList.remove("hide");
    overlay.classList.add("show");

})

closeBtn.addEventListener("click" ,()=>{
    desktopNav.classList.remove("hide");
    serachContainer.classList.add("hide");
    overlay.classList.remove("show");

})


//mobile version

const menuIconContainer =document.querySelector(".nav .menu-icon-container" );
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active"),
    menuIconContainer.classList.toggle("active")
})

