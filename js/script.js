feather.replace();

document.querySelectorAll('.cta a').forEach(button => {
button.addEventListener('click', () => {
    document.querySelector('.layer a').classList.add('show-background');
    });
});

var swiper = new Swiper(".skill-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})