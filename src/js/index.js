const menuMobile = document.querySelector('#menu-mobile')
const header = document.querySelector('header')
const navMenu = document.querySelector('#nav-menu')

menuMobile.addEventListener('click', () => {
  navMenu.dataset.open = navMenu.dataset.open === 'true' ? 'false' : 'true'
  const isOpen = !!(navMenu.dataset.open === 'true')

  if (isOpen) {
    navMenu.classList.remove('translate-y-[-500px]')
    navMenu.classList.add('translate-y-0')
  }
  if (!isOpen) {
    navMenu.classList.remove('translate-y-0')
    navMenu.classList.add('translate-y-[-500px]')
  }
  navMenu.classList.toggle('flex')
  header.classList.toggle('bg-primary')


})