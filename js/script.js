//mobile version


// function myFunction(x) {
//     x.classList.toggle("change");
//     // x.classList.toggle("myNav");
//     // document.getElementById("myNav").style.height = "100%";
//     document.getElementById("myNav").classList.toggle("test");

//     // document.getElementById("t").classList.toggle("dis-none");
//     // document.getElementById("t1").classList.toggle("dis-none");
// }


//mobile version

const menuIconContainer =document.querySelector(".nav .menu-icon-container" );
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active"),
    menuIconContainer.classList.toggle("active")
})

