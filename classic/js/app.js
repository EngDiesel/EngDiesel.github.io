/*global $, window, document, console, require*/


$(function () {

    'use strict';

    /* Custimize Header Height */

    var header = $('.header'),
        client = $('testimonials .active');

    //mixitup = require('mixitup');

    header.height($(window).height());

    // handling resizing and background height
    $(window).resize(function () {
        header.height($(window).height());

        $('.slider').each(function () {
            $(this).css('padding-top', ($(window).height() - $('.slider div').height()) / 2);
        });
    });


    /* Toggling li.active classes */
    $('.mynavbar li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    /* Trigering BX Slider */
    $('.slider').bxSlider({
        mode: 'fade',
        pager: false
    });


    $('.slider').each(function () {
        $(this).css('padding-top', ($(window).height() - $('.slider div').height()) / 2);
    });


    // custom smooth scroll 
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 800);
    });

    // my Custom Slider for Testimonials
    (function mySlider() {
        $('.testimonials .clients .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(4000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    mySlider();
                });
            } else {
                $(this).delay(4000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.testimonials .clients .client').eq(0).addClass('active').fadeIn(2000);
                    mySlider();
                });
            }

        });
    }());

    // trigger mixItUp Blugin.
    $('#mixer').mixItUp();

    // handling filters click event
    $('.portfolio .filters li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // trigger Nice Scroll
//    $('html').niceScroll({
//        cursorcolor: '#e91e63',
//        scrollspeed: 10,
//        cursorwidth: '7px',
//        cursorborder: 'none',
//        zindex: '100',
//    });
});
