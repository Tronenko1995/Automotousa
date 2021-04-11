$(document).ready(function() {

    const slider1 = new Swiper(".jsSlider1",{
        initialSlide: -1,
        speed: 500,
        allowTouchMove: false,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".stages__slider-next",
            prevEl: ".stages__slider-prev"
        }
    });
    const slider2 = new Swiper(".jsSlider2",{
        initialSlide: 0,
        allowTouchMove: true,
        slidesPerView: 1,
        speed: 500,
        loop: true,
        navigation: {
            nextEl: ".stages__slider-next",
            prevEl: ".stages__slider-prev"
        },
        breakpoints: {
            767: {
                allowTouchMove: false,
            }
        }
    });
    const slider3 = new Swiper(".jsSlider3",{
        initialSlide: 1,
        speed: 500,
        allowTouchMove: false,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".stages__slider-next",
            prevEl: ".stages__slider-prev"
        }
    });

    $("#current-slide").text(slider2.realIndex + 1);

    $("#total-slides").text(slider2.slides.length - 2);

    slider2.on("slideChange", function() {
        $("#current-slide").text(slider2.realIndex + 1)
    });

    if ($(window).width() < 768) {
        slider1.destroy(true, true);
        $('.stages__sliders-prev').remove();
        slider3.destroy(true, true);
        $('.stages__sliders-next').remove();
    }

});