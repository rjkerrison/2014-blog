---
permalink: "/js/carousel.js"
---
var notHovering = true;
var playButtonIsSetToPlay = true;

$(function() {
	var carousel = setInterval(function() {
		$('#myCarousel').carousel('pause');
		if(notHovering && playButtonIsSetToPlay) {
			var toClick = $('#myCarousel').find('.right.carousel-control');
			toClick.trigger('click');
		}
	}, 3500);

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