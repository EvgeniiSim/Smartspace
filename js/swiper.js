new Swiper ('.main-body__swiper', {
    loop:true,
    navigation: {
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next',
    },
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 15, 
    breakpoints: {
        550: {
            slidesPerView: 2,
        },
        819: {
            slidesPerView: 1,
        },
    }
})