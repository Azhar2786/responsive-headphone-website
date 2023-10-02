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

let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    breakpoints:{
        768:{
            slidesPerView: 3,
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/ 

window.addEventListener('scroll', () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 vp than add show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animation
})

sr.reveal('.home__social, .favorite__container, .sponsor__containe, .footer ')
sr.reveal('.home__title span:nth-child(1)', {origin: 'left', opacity: 1})
sr.reveal('.home__title span:nth-child(3)', {origin: 'right', opacity:1})
sr.reveal('.home__tooltip, .home__button, .model__button', {origin: 'bottom'})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__img, .model__tooltip', {origin: 'right'})