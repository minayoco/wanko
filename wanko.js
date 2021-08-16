

/* ハンバーガーボタン */
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.header-list').addClass('active');
        } else {
            $('.header-list').removeClass('active');
        }
    });
});
/* ハンバーガーボタン */