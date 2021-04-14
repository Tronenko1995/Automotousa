$(document).ready(function() {

    let clearanceAuto = [
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
            $('.clearance-auto__list').append(`
            <li class="clearance-auto__item">
                <img class="clearance-auto__item-img" src="${item.img}" alt="" width="394" height="217">
                <p class="clearance-auto__item-title">${item.name}</p>
                <div class="clearance-auto__item-row">
                    <p class="clearance-auto__item-text">Объем бака, л</p>
                    <p class="clearance-auto__item-text">${item.v}</p>
                </div>
                <div class="clearance-auto__item-row">
                    <p class="clearance-auto__item-text">Привод</p>
                    <p class="clearance-auto__item-text">${item.driveUnit}</p>
                </div>
                <div class="clearance-auto__item-row">
                    <p class="clearance-auto__item-text">Пробег</p>
                    <p class="clearance-auto__item-text">${item.mileage}</p>
                </div>
                <div class="clearance-auto__item-row">
                    <p class="clearance-auto__item-text">Двигатель</p>
                    <p class="clearance-auto__item-text">${item.engine}</p>
                </div>
                <button class="clearance-auto__item-button callback__button jsCallback svg-arrow" data-product="${item.name}">Обратный звонок</button>
            </li>`)
        }

        function renderingAuto() {
            $('.clearance-auto__list').html('')
            for (let i = 0; i < 8 ; i++) {
                if (i == clearanceAuto.length-1) {
                    $('.jsMoreAuto').remove();
                }
                if (i >= clearanceAuto.length) {
                    $('.jsMoreAuto').remove();
                    break;
                }
                let item = clearanceAuto[i];
                appendAuto(item)
                currentAutoRender = i
            }
            currentAutoRender = currentAutoRender + 1;
        }

        renderingAuto();

        function loadMoreAuto() {
            for (let i = currentAutoRender; i < currentAutoRender+4; i++) {
                if (i == clearanceAuto.length-1) {
                    $('.jsMoreAuto').remove();
                }
                if (i >= clearanceAuto.length) {
                    $('.jsMoreAuto').remove();
                    break;
                }
                let item = clearanceAuto[i];
                appendAuto(item)
                tempAuto = i;
            }
            currentAutoRender = tempAuto + 1;
        }

    $('.jsMoreAuto').on('click', function() {
        loadMoreAuto();
    })

    $('[name="autoType"]').on('input', function() {
        checkSelect(this);
    })

    function checkSelect(that) {
        $('.jsCalcExtra').addClass('hide');
        if ($(that).val() === 'passenger') {
            $('[name="priceAuto"]').attr('placeholder','Стоимость автомобиля');
            $('#priceAutoRow').removeClass('hide');
            $('#engineVSelect').removeClass('hide');
            $('#typeEngineSelect').removeClass('hide');
            $('#yearOfIssueSelect').removeClass('hide');
        } else if ($(that).val() === 'electro') {
            $('#priceAutoRow').removeClass('hide');
            $('#powerInput').removeClass('hide');
        } else if ($(that).val() === 'hybrid') {
            $('#priceAutoRow').removeClass('hide');
        } else if ($(that).val() === 'moto') {
            $('[name="priceAuto"]').attr('placeholder','Стоимость мотоцикла');
            $('#priceAutoRow').removeClass('hide');
            $('#engineVSelect').removeClass('hide');
            $('#ageMotoSelect').removeClass('hide');
        } else if ($(that).val() === 'trucks') {
            $('[name="priceAuto"]').attr('placeholder','Стоимость автомобиля');
            $('#priceAutoRow').removeClass('hide');
            $('#autoWeightRow').removeClass('hide');
            $('#engineVSelect').removeClass('hide');
            $('#typeEngineSelect').removeClass('hide');
            $('#ageAutoSelect').removeClass('hide');
        }
    }

    checkSelect($('[name="autoType"]'));

    $('.jsClear').on('click', function() {
        $(this).siblings().val('');
    })

    $('.jsShowMore').on('click', function() {
        $(this).remove();
        $('.unicMobiHide').removeClass('unicMobiHide');
        $('.unicMobiTop').removeClass('unicMobiTop');
    })
});