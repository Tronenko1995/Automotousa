$(document).ready(function() {

  let cardAuto = [
    {
        name: 'Acura MDX 2014',
        img: 'img/auto/Acura_MDX_2014.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: '2017 HYUNDAI SONATA SE',
        img: 'img/auto/2017_HYUNDAI_SONATA_SE.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: '2019 JEEP COMPASS LATITUDE',
        img: 'img/auto/2019_JEEP_COMPASS_LATITUDE.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: 'Acura MDX 2014',
        img: 'img/auto/Acura_MDX_2014.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: '2017 HYUNDAI SONATA SE',
        img: 'img/auto/2017_HYUNDAI_SONATA_SE.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: '2019 JEEP COMPASS LATITUDE',
        img: 'img/auto/2019_JEEP_COMPASS_LATITUDE.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: 'Acura MDX 2014',
        img: 'img/auto/Acura_MDX_2014.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: '2017 HYUNDAI SONATA SE',
        img: 'img/auto/2017_HYUNDAI_SONATA_SE.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: '2019 JEEP COMPASS LATITUDE',
        img: 'img/auto/2019_JEEP_COMPASS_LATITUDE.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: 'Acura MDX 2014',
        img: 'img/auto/Acura_MDX_2014.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: '2017 HYUNDAI SONATA SE',
        img: 'img/auto/2017_HYUNDAI_SONATA_SE.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
    {
        name: '2019 JEEP COMPASS LATITUDE',
        img: 'img/auto/2019_JEEP_COMPASS_LATITUDE.jpg',
        v: '73 л',
        driveUnit: 'передний и задний',
        mileage: 14954,
        engine: 'V6',
    },
]

    currentAutoRender = 0,
    tempAuto = 0;

    function appendAuto(item) {
        $('.card-auto__list').append(`
        <li class="card-auto__item">
            <img class="card-auto__item-img" src="${item.img}" alt="" width="394" height="217">
            <p class="card-auto__item-title">${item.name}</p>
            <div class="card-auto__item-row">
                <p class="card-auto__item-text">Объем бака, л</p>
                <p class="card-auto__item-text">${item.v}</p>
            </div>
            <div class="card-auto__item-row">
                <p class="card-auto__item-text">Привод</p>
                <p class="card-auto__item-text">${item.driveUnit}</p>
            </div>
            <div class="card-auto__item-row">
                <p class="card-auto__item-text">Пробег</p>
                <p class="card-auto__item-text">${item.mileage}</p>
            </div>
            <div class="card-auto__item-row">
                <p class="card-auto__item-text">Двигатель</p>
                <p class="card-auto__item-text">${item.engine}</p>
            </div>
            <button class="card-auto__item-button callback__button svg-arrow jsCallback data-product="${item.name}">Обратный звонок</button>
        </li>`)
    }

    function renderingAuto() {
        $('.card-auto__list').html('')
        for (let i = 0; i < 8 ; i++) {
            if (i == cardAuto.length-1) {
                $('.jsMoreAuto').remove();
            }
            if (i >= cardAuto.length) {
                $('.jsMoreAuto').remove();
                break;
            }
            let item = cardAuto[i];
            appendAuto(item)
            currentAutoRender = i
        }
        currentAutoRender = currentAutoRender + 1;
    }

    renderingAuto();

    function loadMoreAuto() {
        for (let i = currentAutoRender; i < currentAutoRender+4; i++) {
            if (i == cardAuto.length-1) {
                $('.jsMoreAuto').remove();
            }
            if (i >= cardAuto.length) {
                $('.jsMoreAuto').remove();
                break;
            }
            let item = cardAuto[i];
            appendAuto(item)
            tempAuto = i;
        }
        currentAutoRender = tempAuto + 1;
    }

$('.jsMoreAuto').on('click', function() {
    loadMoreAuto();
})


    const sliderCardThumbs = new Swiper('.jsCardSlider2', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        breakpoints: {
            500: {
                slidesPerView: 3,
                spaceBetween: 10
              },
            616: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            961: {
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