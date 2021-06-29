let buttonLink = document.querySelectorAll('.buttonLink');
buttonLink.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        event.target.classList.add('animate__pulse');
        setTimeout(() => {
            event.target.classList.remove('animate__pulse');
        }, 1000);
    })
});