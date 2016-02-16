$(function() {
    var fixFunction = function() {
        if ($(window).width() < 992) {
            return;
        }
        
        $('aside').css('top', $(this).scrollTop() + "px");
    };

    fixFunction();
    $(window).scroll(fixFunction);
    $(window).resize(fixFunction);

    var resizeFunction = function() {
        if ($(window).width() < 992) {
            return;
        }

        var asideHeight = $(window).height() - 19 - 15 - 70;
        var visibleFooterHeight = -($('footer').offset().top - $(window).scrollTop() - $(window).height());
        if (visibleFooterHeight < 0) {
            visibleFooterHeight = 0;
        }
        
        var newHeight = asideHeight - visibleFooterHeight;
        var neededHeight = $('#inner-aside-wrapper').height();
        if (neededHeight < newHeight) {
            newHeight = neededHeight;
        }

        $('aside').height(newHeight);
    };
    
    resizeFunction();
    $(window).resize(resizeFunction);
    $(window).scroll(resizeFunction);
});