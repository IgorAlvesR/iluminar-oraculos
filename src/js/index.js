const menuMobile = document.querySelector('#menu-mobile')
const header = document.querySelector('header')
const navMenu = document.querySelector('#nav-menu')

menuMobile.addEventListener('click', () => {
  navMenu.dataset.open = navMenu.dataset.open === 'true' ? 'false' : 'true'
  const isOpen = !!(navMenu.dataset.open === 'true')
  const mainSection = document.querySelector('#main')

  if (isOpen) {
    navMenu.classList.remove('translate-y-[-500px]')
    navMenu.classList.add('translate-y-0', 'h-auto', 'absolute', 'top-[72px]', 'w-full')
    document.body.classList.add('overflow-hidden')
    mainSection.classList.add('blur-2xl')
  }
  if (!isOpen) {
    document.body.classList.remove('overflow-hidden')
    navMenu.classList.remove('translate-y-0')
    navMenu.classList.add('translate-y-[-500px]')
    mainSection.classList.remove('blur-2xl')
  }
  navMenu.classList.toggle('flex', 'h-0')
  header.classList.toggle('bg-primary')
})