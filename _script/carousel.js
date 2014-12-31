---
permalink: "/js/carousel.js"
---
var carousel = {
	pause:false
};
$(function () {
	$('#myCarousel').carousel({
		interval:3000,
		pause: "hover"
	});
	$('#playbutton').click(function () {
		$("#playbutton").toggleClass("glyphicon-pause glyphicon-play");
		
		if (carousel.pause === "hover") {
			carousel.pause = "true";
		} else {
			carousel.pause = "hover";
		}
		
		if (carousel.pause === "hover") {
			$('#myCarousel').carousel('pause');
		}
		else {
			$('#myCarousel').carousel('cycle');
		}
	});
});