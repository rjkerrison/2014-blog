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
		console.log("playbutton pressed pause was "+carousel.pause);
		carousel.pause = !carousel.pause;
		if (carousel.pause) {
			$('#myCarousel').carousel('pause');
		}
		else {
			$('#myCarousel').carousel('cycle');
		}
	});
    /*$('#playbutton').click(function () {
        $('#myCarousel').carousel('cycle');
    });
    $('#playbutton').click(function () {
        $('#myCarousel').carousel('pause');
    });*/
});