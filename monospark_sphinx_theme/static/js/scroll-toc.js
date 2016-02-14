$(function() {
    $(window).scroll(function() {
        if ($(window).width() >= 992) {
            $('aside').css('top', $(this).scrollTop() + "px");
        }
    });
});