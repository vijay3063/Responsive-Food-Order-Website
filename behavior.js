// ================== Show Menu =================
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Menu Show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//Menu hidden
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// ================= Remove Menu Mobile =========
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ============= Add Shadow header ==============
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater then 50  of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        :header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// ============== Show scroll Up ================
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher then 350 viewport height, add the show-scroll class tp the a tag with the scrollup class 
    this.scrollY >= 350? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ========== Scroll Section Active Link ========
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('Id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else{
            sectionsClass.classList.remove('active-link') 
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ============ Scroll Reveal Animation =========
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset: true, // Animations repeat
})

sr.reveal('.home__data, .footer')
sr.reveal('.home__dish', {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal('.home__burger', {delay: 1200, distance: '100px', duration: 1500})
sr.reveal('.home__ingradient', {delay: 1600, interval: 100})
sr.reveal('.recipe__img, .delivery__img, .contact__data, .contact__sticker-1, .contact__sticker-2', {origin: 'left'})
sr.reveal('.recipe__data, .delivery__data,.contact__image', {origin: 'right'})
sr.reveal('.popular__card', {interval: 100})
