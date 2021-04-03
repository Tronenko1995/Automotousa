$(document).ready(function() {
    $('.jsPhone').inputmask("+38(099)999-99-99");
    $('.jsYear').inputmask("9999");

    let mobiMenu = false
    
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
});