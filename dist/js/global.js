$(document).ready(function() {

    let mobiMenu = false,
        modal = false;

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

    $('.modal__input').on('input', function() {
        if ($(this).val() !== '') {
            $(this).closest('.modal__input-wrap').addClass('hide-after');
        } else {
            $(this).closest('.modal__input-wrap').removeClass('hide-after');
        }
    })

    $('.modal__textarea').on('input', function() {
        if ($(this).val() !== '') {
            $(this).closest('.modal__textarea-wrap').addClass('hide-after');
        } else {
            $(this).closest('.modal__textarea-wrap').removeClass('hide-after');
        }
    })

    $(document).on('click','.jsCallback', function(e) {
        if ($(this).data('product')) {
            $('.modal').find('[name="product"]').val($(this).data('product'))
        } else {
            $('.modal').find('[name="product"]').val('')
        }
        e.preventDefault();
        if (modal) {
            $('.modal').addClass('hide');
            $('body').css('overflow', 'unset');
            modal = false
        } else {
            $('.modal').removeClass('hide');
            $('body').css('overflow', 'hidden');
            modal = true
        }
    })

    $('.modal__form').on('submit', function(e) {
        e.preventDefault();
        const data = $(this).serialize()
        $.ajax({
            method: 'POST',
            url: 'php/mail.php',
            data: data })
            .done(function() {
                console.log('успех')
                $('.jsCallback').click();
                alert('Спасибо, сообщение успешно отправлено, мы скоро с вами свяжемся');
            })
            .fail(function() {
                console.log('ошибка')
                alert('Ошибка');
                $('.jsCallback').click();
            })
    })

});