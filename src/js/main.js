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


    let auctionAuto = [
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


    let mobiMenu = false,
        currentHotRender = 0,
        tempHot = 0,
        currentAuctionRender = 0,
        tempAuction = 0;
    
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
        <li class="hot-offer__item svg-fire">
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
        </li>`)
    }

    function appendAuction(item) {
        $('.join-auction__list').append(`
        <li class="join-auction__item">
            <img class="join-auction__item-img" src="${item.img}" alt="" width="394" height="217">
            <p class="join-auction__item-title">${item.name}</p>
            <div class="join-auction__item-row">
                <p class="join-auction__item-text">Объем бака, л</p>
                <p class="join-auction__item-text">${item.v}</p>
            </div>
            <div class="join-auction__item-row">
                <p class="join-auction__item-text">Привод</p>
                <p class="join-auction__item-text">${item.driveUnit}</p>
            </div>
            <div class="join-auction__item-row">
                <p class="join-auction__item-text">Пробег</p>
                <p class="join-auction__item-text">${item.mileage}</p>
            </div>
            <div class="join-auction__item-row">
                <p class="join-auction__item-text">Двигатель</p>
                <p class="join-auction__item-text">${item.engine}</p>
            </div>
            <button class="join-auction__item-button callback__button">Обратный звонок</button>
        </li>`)
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

    function renderingAuctionAuto() {
        $('.join-auction__list').html('')
        for (let i = 0; i < 8 ; i++) {
            if (i == auctionAuto.length-1) {
                $('.jsMoreHot').remove();
            }
            if (i >= auctionAuto.length) {
                $('.jsMoreHot').remove();
                break;
            }
            let item = auctionAuto[i];
            appendAuction(item)
            currentAuctionRender = i
        }
        currentAuctionRender = currentAuctionRender + 1;
    }

    renderingHotAuto();
    renderingAuctionAuto();

    function loadMoreHotAuto() {
        const container = document.createElement('ul')
        $(container).addClass('hot-offer__list')
        for (let i = currentHotRender; i < currentHotRender+3; i++) {
            if (i == hotAuto.length-1) {
                $('.jsMoreHot').remove();
            }
            if (i >= hotAuto.length) {
                $('.jsMoreHot').remove();
                break;
            }
            let item = hotAuto[i];
            const newItem = document.createElement('li')
            $(newItem).html(`
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
            <button class="hot-offer__item-button callback__button">Обратный звонок</button>`).addClass('hot-offer__item svg-fire')
        $(container).append(newItem)
            tempHot = i;
        }
        currentHotRender = tempHot + 1;
        $('.hot-offer__container').append(container)
    }

    function loadMoreAuctionAuto() {
        for (let i = currentAuctionRender; i < currentAuctionRender+4; i++) {
            if (i == auctionAuto.length-1) {
                $('.jsMoreAuction').remove();
            }
            if (i >= auctionAuto.length) {
                $('.jsMoreAuction').remove();
                break;
            }
            let item = auctionAuto[i];
            appendAuction(item)
            tempAuction = i;
        }
        currentAuctionRender = tempAuction + 1;
    }

    $('.jsMoreHot').on('click', function() {
        loadMoreHotAuto();
    })
    $('.jsMoreAuction').on('click', function() {
        loadMoreAuctionAuto();
    })

});