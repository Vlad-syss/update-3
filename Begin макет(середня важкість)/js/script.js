//buttons ================================================================================================================================================================================================================================================================
$(document).ready(function() {
    $(".header__burger").click(function(event) {
        event.preventDefault();
        $(".header__burger").toggleClass("active");
        $(".header__top").toggleClass("active");
        $("body").toggleClass("lock");    
    })
});
//swipper slider ================================================================================================================================================================================================================================================================
new Swiper (".introduction__container", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        speed:500,
});
//popup ================================================================================================================================================================================================================================================================
$(document).ready(function() {
    $(".player__button").click(function(event) {
        $("body").toggleClass("lock");    
    })
    $(".popup__close, .popup__area").click(function(event) {
        $("body").removeClass("lock");    
    })
});
//swipper slider-2 ================================================================================================================================================================================================================================================================
new Swiper (".clothing__container", {
    spaceBetween:225,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed:700,
    centeredSlides: true,
});