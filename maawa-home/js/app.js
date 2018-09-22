/*global $, window*/
$(function () {
    'use strict';

    // Smooth Scroll;
    var scrollLink = $('.scrollLink');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 75
        }, 1000);
    });

    function addActiveFeature(className) {
        $(className).each(function () {
            $(this).on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    }

    function adjustSliderHieght() {
        var winH = $(window).height(),
            navH = $('.navbar').innerHeight();
        $('.header .carousel-item').height(winH - navH);
    }


    // Active Class
    addActiveFeature('.nav-item');

    // Header Height
    adjustSliderHieght();

    // Carousel 
    $('.carousel').carousel({
        pause: false
    });


    // Trigger Nice Scroll
    $('body').niceScroll({
        cursorcolor: '#007bff',
        cursorborder: 'none',
        cursoropacitymin: 0.6
    });

    // Contact Btn Effect
    $('#contactBtn').on('click', function () {
        $(this).toggleClass('magictime boingInUp');
    });





});
