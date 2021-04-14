$(document).ready(function() {

    let modal = false;

    $(document).on('click','.jsModal', function(e) {
        e.preventDefault();
        if (modal) {
            $('.modal__block').removeClass('hide');
            $('.modal__filters').addClass('hide');
            $('.modal').addClass('hide');
            $('body').css('overflow', 'unset');
            modal = false
        } else {
            $('.modal__block').addClass('hide');
            $('.modal__filters').removeClass('hide');
            $('.modal').removeClass('hide');
            $('body').css('overflow', 'hidden');
            modal = true
        }
    })

    $('.filters__input').on('input', function() {
        if ($(this).val() !== '') {
            $(this).closest('.filters__input-wrap').addClass('hide-after');
        } else {
            $(this).closest('.filters__input-wrap').removeClass('hide-after');
        }
    })

    const vEngineInputs = $('.jsVEngine');
    const yearInputs = $('.jsYear');
    const mileageInputs = $('.jsMileage');

    const vEngineInputs2 = $('.jsVEngine2');
    const yearInputs2 = $('.jsYear2');
    const mileageInputs2 = $('.jsMileage2');

    function vEngine() {
        let  vEngineInput1 = parseFloat( $(vEngineInputs[0]).val()),
            vEngineInput2 = parseFloat( $(vEngineInputs[1]).val());

        if (vEngineInput1 > vEngineInput2) {
            let tmp = vEngineInput2;
            vEngineInput2 = vEngineInput1;
            vEngineInput1 = tmp;
        }

        $('.vEngineDisplay').text(`${vEngineInput1} - ${vEngineInput2}`);
        $('#vEngineLine').css({'width': `${vEngineInput2*10 - vEngineInput1*10}%`, 'left': `${vEngineInput1*10}%`})
    }

    function vEngine2() {
        let  vEngineInput3 = parseFloat( $(vEngineInputs2[0]).val()),
            vEngineInput4 = parseFloat( $(vEngineInputs2[1]).val());

        if (vEngineInput3 > vEngineInput4) {
            let tmp = vEngineInput4;
            vEngineInput4 = vEngineInput3;
            vEngineInput3 = tmp;
        }

        $('.vEngineDisplay').text(`${vEngineInput3} - ${vEngineInput4}`);
        $('#vEngineLine2').css({'width': `${vEngineInput4*10 - vEngineInput3*10}%`, 'left': `${vEngineInput3*10}%`})
    }

    function year() {
        let  yearInput1 = parseFloat( $(yearInputs[0]).val()),
            yearInput2 = parseFloat( $(yearInputs[1]).val());

        if (yearInput1 > yearInput2) {
            let tmp = yearInput2;
            yearInput2 = yearInput1;
            yearInput1 = tmp;
        }

        $('.yearDisplay').text(`${yearInput1} - ${yearInput2}`);
        $('#yearLine').css({'width': `${((yearInput2*0)/yearInput1) - ((yearInput1*100)/yearInput2)}%`, 'left': `${(yearInput1*100)/yearInput2}%`})
    }

    function year2() {
        let  yearInput3 = parseFloat( $(yearInputs2[0]).val()),
            yearInput4 = parseFloat( $(yearInputs2[1]).val());

        if (yearInput3 > yearInput4) {
            let tmp = yearInput4;
            yearInput4 = yearInput3;
            yearInput3 = tmp;
        }

        $('.yearDisplay').text(`${yearInput3} - ${yearInput4}`);
        $('#yearLine2').css({'width': `${((yearInput4*0)/yearInput3) - ((yearInput3*100)/yearInput4)}%`, 'left': `${(yearInput3*100)/yearInput4}%`})
    }

    function mileage() {
        let  mileageInput1 = parseFloat( $(mileageInputs[0]).val()),
            mileageInput2 = parseFloat( $(mileageInputs[1]).val());

        if (mileageInput1 > mileageInput2) {
            let tmp = mileageInput2;
            mileageInput2 = mileageInput1;
            mileageInput1 = tmp;
        }

        $('.mileageDisplay').text(`${mileageInput1} - ${mileageInput2}`);
        $('#mileageLine').css({'width': `${(mileageInput2/10000) - (mileageInput1/10000)}%`, 'left': `${(mileageInput1/10000)}%`})
    }

    function mileage2() {
        let  mileageInput3 = parseFloat( $(mileageInputs2[0]).val()),
            mileageInput4 = parseFloat( $(mileageInputs2[1]).val());

        if (mileageInput3 > mileageInput4) {
            let tmp = mileageInput4;
            mileageInput4 = mileageInput3;
            mileageInput3 = tmp;
        }

        $('.mileageDisplay').text(`${mileageInput3} - ${mileageInput4}`);
        $('#mileageLine2').css({'width': `${(mileageInput4/10000) - (mileageInput3/10000)}%`, 'left': `${(mileageInput3/10000)}%`})
    }

    $(vEngineInputs[0]).on('input', function() {
        vEngine();
    });
    $(vEngineInputs[1]).on('input', function() {
        vEngine(); 
    });
    $(yearInputs[0]).on('input', function() {
        year();
    });
    $(yearInputs[1]).on('input', function() {
        year(); 
    });
    $(mileageInputs[0]).on('input', function() {
        mileage();
    });
    $(mileageInputs[1]).on('input', function() {
        mileage(); 
    });

    $(vEngineInputs2[0]).on('input', function() {
        vEngine2();
    });
    $(vEngineInputs2[1]).on('input', function() {
        vEngine2(); 
    });
    $(yearInputs2[0]).on('input', function() {
        year2();
    });
    $(yearInputs2[1]).on('input', function() {
        year2(); 
    });
    $(mileageInputs2[0]).on('input', function() {
        mileage2();
    });
    $(mileageInputs2[1]).on('input', function() {
        mileage2(); 
    });

    vEngine();
    year();
    mileage();

    vEngine2();
    year2();
    mileage2();

    $('.jsUnicSelect').on('click',function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    });

    $('.jsUnicSelect').on('click', '.select__item', function (e) {
        e.stopPropagation();
        // $(this).closest('.select').find('.select__head').text($(this).text());
        console.log($(this).text())
        $(this).closest('.select').removeClass('open')
        // $(this).closest('.select').removeClass('open').find('.select__input').val($(this).data('value')).trigger('input')
    });

    $('.jsClear').on('click', function() {
        const min1 = $(vEngineInputs[0]).attr('min'),
              max1 = $(vEngineInputs[0]).attr('max'),
              min2 = $(yearInputs[0]).attr('min'),
              max2 = $(yearInputs[0]).attr('max'),
              min3 = $(mileageInputs[0]).attr('min'),
              max3 = $(mileageInputs[0]).attr('max'),

              min4 = $(vEngineInputs2[0]).attr('min'),
              max4 = $(vEngineInputs2[0]).attr('max'),
              min5 = $(yearInputs2[0]).attr('min'),
              max5 = $(yearInputs2[0]).attr('max'),
              min6 = $(mileageInputs2[0]).attr('min'),
              max6 = $(mileageInputs2[0]).attr('max');

        $(vEngineInputs[0]).val(min1);
        $(vEngineInputs[1]).val(max1);
        $(yearInputs[0]).val(min2);
        $(yearInputs[1]).val(max2);
        $(mileageInputs[0]).val(min3);
        $(mileageInputs[1]).val(max3);

        $(vEngineInputs2[0]).val(min4);
        $(vEngineInputs2[1]).val(max4);
        $(yearInputs2[0]).val(min5);
        $(yearInputs2[1]).val(max5);
        $(mileageInputs2[0]).val(min6);
        $(mileageInputs2[1]).val(max6);

        vEngine();
        year();
        mileage();

        vEngine2();
        year2();
        mileage2();
    })

});