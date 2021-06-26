let burgerMenuIcon = document.querySelector('.b-header__burgerMenuIcon');
burgerMenuIcon.addEventListener('click', ()=> {
    document.querySelector('.b-header__burgerMenu').classList.add('b-header__burgerMenu_display');
    burgerMenuIcon.style.display = 'none';
});

let burgerMenuClose = document.querySelector('.b-header__burgerMenuClose');
burgerMenuClose.addEventListener('click', ()=> {
    document.querySelector('.b-header__burgerMenu').classList.remove('b-header__burgerMenu_display');
    burgerMenuIcon.style.display = 'block';
});