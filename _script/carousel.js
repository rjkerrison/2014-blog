---
permalink: "/js/carousel.js"
---
var notHovering = true;
var playButtonIsSetToPlay = true;

$(function() {
	var carousel = setInterval(function() {
		$('#myCarousel').carousel('pause');
		if(notHovering && playButtonIsSetToPlay) {
			// var slides = $('#myCarousel > ol > li'),
				// active = slides.filter('.active'),
				// next = active.next('li'),
			var toClick = $('#myCarousel').find('.right.carousel-control');
			toClick.trigger('click');
		}
	}, 2500);

	$('#myCarousel').on(
		'mouseenter',
		function () {
			notHovering = false;
		}
	);
	$('#myCarousel').on(
		'mouseleave',
		function () {
			notHovering = true;
		}
	);

	$("#playbutton").click(function() { 
		playButtonIsSetToPlay = !playButtonIsSetToPlay;
		notHovering = true;
		$(this).toggleClass("glyphicon-pause glyphicon-play");
	}); 
});