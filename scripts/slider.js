const swiper = new Swiper('.b-howWeWorks__slider', {
    edgeSwipeDetection: true,
    grabCursor: true,
    slideToClickedSlide: true,
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});