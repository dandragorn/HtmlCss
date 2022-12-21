const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo")

const mobileMenu = () =>{
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener('click', mobileMenu);

//highlight active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home_page");
    const aboutMenu = document.querySelector("#about_page");
    const servicesMenu = document.querySelector("#services_page");

    if(window.innerWidth > 960 && window.scrollY < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove("highlight");
        return;
    } else if(window.innerWidth > 960 && window.scrollY < 1400){
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove("highlight");
        return;
    }
    else if(window.innerWidth > 960 && window.scrollY < 2345){
        aboutMenu.classList.remove("highlight");
        servicesMenu.classList.add("highlight");
        return;
    }

    if((elem && window.innerWidth < 960 && window.scrollY < 600) || elem){
        elem.classList.remove("highlight");
    }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//close mobile menu when clicking on menu item
const hideMobileMenu = () => {
  const menuItems = document.querySelector(".is-active");
  if(window.innerWidth < 768 && menuItems){
      menu.classList.toggle("is-active");
      menuLinks.classList.remove("active");
  }
}

menuLinks.addEventListener("click",hideMobileMenu);
navLogo.addEventListener("click",hideMobileMenu);