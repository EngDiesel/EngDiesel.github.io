/*global $, alert, console*/
$(function () {
	'use strict';

	// Scroll to features
	$('#down-into-features').click(function () {
		$('html, body').animate({
			scrollTop: $('#my-features').offset().top
		}, 2000);
	});

	// Scroll To Our Work
	$('#down-into-our-work').click(function () {
		$('html, body').animate({
			scrollTop: $('#my-our-work').offset().top
		},2000);
	});

	// Show More Photos
	var hideFlag = true;
	$('#my-our-work #show-more-photos').click(function (){
		$('#my-our-work .my-hidden').fadeToggle(1000);
		if(hideFlag){
			$('#my-our-work #show-more-photos').text('Show less');	
			$('html, body').animate({
				scrollTop: $('#more-photos').offset().top + 50
			},2000);		
			hideFlag = false;
		}
		else{
			$('#my-our-work #show-more-photos').text('Show More');
			$('html, body').animate({
				scrollTop: $('#my-our-work').offset().top				
			},2000);	
			hideFlag = true;			
		}
	});

	// Toggle Testimonials
	var leftArrow = $('#leftArrow'),
		
	rightArrow = $('#rightArrow');
	
	function checkClients(){
		$('.my-client:first').hasClass('active') ? leftArrow.fadeOut(0) : leftArrow.fadeIn(100) ;
		$('.my-client:last').hasClass('active') ? rightArrow.fadeOut(0) : rightArrow.fadeIn(100) ;
	}

	checkClients();

	$('.arrow').click(function () {	
		if($(this).hasClass('fa-chevron-right')) {
		
			$('.my-testmonials .active').fadeOut(600, function () {
		
				$(this).removeClass('active').next('.my-client').addClass('active').fadeIn();
				checkClients();
			});
		}
		else
		{
			$('.my-testmonials .active').fadeOut(600, function () {
				
				$(this).removeClass('active').prev('.my-client').addClass('active').fadeIn();
				checkClients();				
			});
		}
		
	});


	// Trigger Nice Scroll Pluggin
	$("html").niceScroll({
		cursorcolor: '#ff6a0a',
		cursoropacitymin: 0.2,
		cursorborder: 'none',
		scrollspeed: 100,
	});
});
