// Show Menu

const navMenu = document.getElementById('nav_menu')
const navToggle = document.getElementById('nav_toggle')
const navClose = document.getElementById('nav_close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show_menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu')
    })
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav_link')

const LinkAction = ()=>{
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))


// SHADOW HEADER

const shadowHeader = ()=> {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow_header')
                        : header.classList.remove('shadow_header')
}

window.addEventListener('scroll', shadowHeader)


// SHOW SCROLL UP

// const scrollUp = ()=> {
//     const scrollUp = document.getElementById('scrollup')
//     this.scrollY >= 350 ? scrollUp.classList.add('show_scroll')
//                     : scrollUp.classList.remove('show_scroll')
// }

// window.addEventListener('scroll', scrollUp)


// DARK THEME

const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected_theme')
const selectedIcon  = localStorage.getItem('selected_icon')

const getItem = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentTheme = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected_theme', getItem())
    localStorage.setItem('selected_icon', getCurrentTheme())
})