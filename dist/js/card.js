$(document).ready(function() {

    const sliderCardThumbs = new Swiper('.jsCardSlider2', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        breakpoints: {
            600: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            800: {
                slidesPerView: 5,
                spaceBetween: 20
              }
        }
      });

    const card = new Swiper(".jsCardSlider",{
        thumbs: {
            swiper: sliderCardThumbs
        },
        allowTouchMove: true
    });
});