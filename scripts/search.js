let navLinkSearch = document.querySelector('.b-header__navLinkSearch');
let input = document.querySelector('.b-header__input');
navLinkSearch.addEventListener('click', () => {
    input.classList.toggle('hidden');
});