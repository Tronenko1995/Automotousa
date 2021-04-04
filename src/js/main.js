$(document).ready(function() {

    let hotAuto = [
        {
            name: 'Acura MDX 2014',
            img: 'img/auto/Acura_MDX_2014.jpg',
            v: '73 л',
            driveUnit: 'передний и задний',
            mileage: 14954,
            engine: 'V6',
            description: 'Повреждения передней части, повреждение зажней части.',
            descriptionNext: 'Заводится и едет.'
        },
        {
            name: '2017 HYUNDAI SONATA SE',
            img: 'img/auto/2017_HYUNDAI_SONATA_SE.jpg',
            v: '73 л',
            driveUnit: 'передний и задний',
            mileage: 14954,
            engine: 'V6',
            description: 'Повреждения передней части, повреждение зажней части.',
            descriptionNext: 'Заводится и едет.'
        },
        {
            name: '2019 JEEP COMPASS LATITUDE',
            img: 'img/auto/2019_JEEP_COMPASS_LATITUDE.jpg',
            v: '73 л',
            driveUnit: 'передний и задний',
            mileage: 14954,
            engine: 'V6',
            description: 'Повреждения передней части, повреждение зажней части.',
            descriptionNext: 'Заводится и едет.'
        },
        {
            name: 'Acura MDX 2014',
            img: 'img/auto/Acura_MDX_2014.jpg',
            v: '73 л',
            driveUnit: 'передний и задний',
            mileage: 14954,
            engine: 'V6',
            description: 'Повреждения передней части, повреждение зажней части.',
            descriptionNext: 'Заводится и едет.'
        },
        {
            name: '2017 HYUNDAI SONATA SE',
            img: 'img/auto/2017_HYUNDAI_SONATA_SE.jpg',
            v: '73 л',
            driveUnit: 'передний и задний',
            mileage: 14954,
            engine: 'V6',
            description: 'Повреждения передней части, повреждение зажней части.',
            descriptionNext: 'Заводится и едет.'
        },
        {
            name: '2019 JEEP COMPASS LATITUDE',
            img: 'img/auto/2019_JEEP_COMPASS_LATITUDE.jpg',
            v: '73 л',
            driveUnit: 'передний и задний',
            mileage: 14954,
            engine: 'V6',
            description: 'Повреждения передней части, повреждение зажней части.',
            descriptionNext: 'Заводится и едет.'
        },
    ]




    let mobiMenu = false,
        currentHotRender = 0,
        tempHot = 0;
    
    $('.jsMobMenu').on('click', function(e) {
        e.preventDefault();
        if (mobiMenu) {
            $('.mobile-menu').removeClass('active');
            mobiMenu = false
        } else {
            $('.mobile-menu').addClass('active');
            mobiMenu = true
        }
    })

    $('.jsMoreHot').on('click', function(e) {
        e.preventDefault();
    })

    function appendHot(item) {
        $('.hot-offer__list').append(`
        <div class="hot-offer__item svg-fire">
            <img class="hot-offer__item-img" src="${item.img}" alt="" width="394" height="217">
            <p class="hot-offer__item-title">${item.name}</p>
            <div class="hot-offer__item-row">
                <p class="hot-offer__item-text">Объем бака, л</p>
                <p class="hot-offer__item-text">${item.v}</p>
            </div>
            <div class="hot-offer__item-row">
                <p class="hot-offer__item-text">Привод</p>
                <p class="hot-offer__item-text">${item.driveUnit}</p>
            </div>
            <div class="hot-offer__item-row">
                <p class="hot-offer__item-text">Пробег</p>
                <p class="hot-offer__item-text">${item.mileage}</p>
            </div>
            <div class="hot-offer__item-row">
                <p class="hot-offer__item-text">Двигатель</p>
                <p class="hot-offer__item-text">${item.engine}</p>
            </div>
            <p class="hot-offer__item-text">${item.description}<br>${item.descriptionNext}</p>
            <button class="hot-offer__item-button callback__button">Обратный звонок</button>
        </div>
`)
    }

    function renderingHotAuto() {
        $('.hot-offer__list').html('')
        for (let i = 0; i < 3 ; i++) {
            if (i == hotAuto.length-1) {
                $('.jsMoreHot').remove();
            }
            if (i >= hotAuto.length) {
                $('.jsMoreHot').remove();
                break;
            }
            let item = hotAuto[i];
            appendHot(item)
            currentHotRender = i
        }
        currentHotRender = currentHotRender + 1;
    }

    // renderingHotAuto();

    function loadMoreHotAuto() {
        for (let i = currentHotRender; i < currentHotRender+3; i++) {
            if (i == hotAuto.length-1) {
                $('.jsMoreHot').remove();
            }
            if (i >= hotAuto.length) {
                $('.jsMoreHot').remove();
                break;
            }
            let item = hotAuto[i];
            appendHot(item)
            tempHot = i;
        }
        currentHotRender = tempHot + 1;
    }

    $('.jsMoreHot').on('click', function() {
        // loadMoreHotAuto();
    })

});