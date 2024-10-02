const toggleHidden = el => el.classList.toggle('hidden')

const menu = document.querySelector('.drop-menu')
const burger = document.querySelector('.burger-menu')

burger.addEventListener('click', () => toggleHidden(menu))
