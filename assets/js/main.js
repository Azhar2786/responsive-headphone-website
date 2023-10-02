/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* =============== Show Menu ============ */
// Validate if constant exist
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* =============== Hide Menu ============ */
// Validate if constant exist
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n => n.addEventListener('click', () =>{
    const navMenu = document.getElementById('nav-menu');
    //when we click on link remove show - menu
    navMenu.classList.remove('show-menu')
}))


/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () =>{
    const header = document.getElementById('header')
    //when scrolly is grater thane 50vp than add scroll header class
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header') 
}
window.addEventListener('scroll', blurHeader);

/*=============== SWIPER FAVORITES ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
