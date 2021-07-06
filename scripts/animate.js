let buttonLink = document.querySelectorAll('.buttonLink');
buttonLink.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        event.target.classList.add('animate__pulse');
        setTimeout(() => {
            event.target.classList.remove('animate__pulse');
        }, 1000);
    })
});

let buttonLinkDiv = document.querySelector('.buttonLinkDiv');
buttonLinkDiv.addEventListener('mouseover', () => {
    buttonLinkDiv.classList.add('animate__pulse');
    setTimeout(() => {
        buttonLinkDiv.classList.remove('animate__pulse');
    }, 1000);
});


let slideContent = document.querySelectorAll('.b-howWeWorks__slideContent');
slideContent.forEach(item => {
let slideText = item.querySelector('.b-howWeWorks__slideText');
item.addEventListener('mouseover', () => {
    slideText.classList.add('animate__slideInUp');
        setTimeout(() => {
            slideText.classList.remove('animate__slideInUp');
        }, 1000);
    })
});