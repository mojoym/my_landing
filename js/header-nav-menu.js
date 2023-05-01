const headerNavMenu = document.querySelector('.header__menu');
const headerMenuSmall = document.querySelector('.header__menu-small');
const headerTitle = document.querySelector('.header__title');

headerMenuSmall.addEventListener('click', () =>{
    headerMenuSmall.classList.toggle('active');
    headerNavMenu.classList.toggle('active');
    headerTitle.classList.toggle('hide');
})

