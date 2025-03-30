const menuMobile = document.querySelector('#menu-mobile')
const header = document.querySelector('header')
const navMenu = document.querySelector('#nav-menu')

menuMobile.addEventListener('click', () => {
  navMenu.classList.toggle('hidden')
  navMenu.classList.toggle('flex')
  header.classList.toggle('bg-primary')
})