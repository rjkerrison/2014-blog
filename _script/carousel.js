---
permalink: "/js/carousel.js"
---
var carousel = {
	pause:false
};
$(function () {
    $('#myCarousel').carousel({
        interval:2500,
        pause: 'false'
    });
	$('#playbutton').click(function () {
		$("#playbutton").toggleClass("glyphicon-pause glyphicon-play");
		carousel.pause = !carousel.pause;
		if (carousel.pause) {
			$('#myCarousel').carousel('pause');
		}
		else {
			$('#myCarousel').carousel('cycle');
		}
	});
});