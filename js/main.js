const button = document.querySelector('.button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

button.addEventListener('click',() => {
    button.classList.toggle('active')

    if (button.classList.contains('active')) {
        button.setAttribute('aria-expanded', 'true')
        menu.setAttribute('aria-hiddem','false')
        menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
    } else {
        button.setAttribute('aria-expanded', 'false')
        menu.setAttribute('aria-hiddem','true')
        menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
    }
    
});