$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 135) {
            $('.menu-slide-bar ').css('position', 'fixed');
            $('.menu-slide-bar ').css('top', '40px');
            $('.menu-slide-bar ').css('width', '225');
        }
        else if ($(window).scrollTop() <= 135) {
            $('.menu-slide-bar').css('position', '');
            $('.menu-slide-bar').css('top', '');
            $('.menu-slide-bar ').css('width', '225');
        }
        if ($('.menu-slide-bar').offset().top + $(".menu-slide-bar").height() > $(".footer").offset().top) {
            $('.menu-slide-bar').css('top', -($(".menu-slide-bar").offset().top + $(".menu-slide-bar").height() - $(".footer").offset().top));
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 135) {
            $('.menu').addClass('fixed-2');
        } else {
            $('.menu').removeClass('fixed-2');
        }
    });
});