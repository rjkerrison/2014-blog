---
permalink: "/js/carousel.js"
---
var carouselState = "pause";

$(function () {
	$('#myCarousel').carousel({
		interval:3000,
		pause: "hover"
	});
	$('#playbutton').click(togglePlay);
});

var togglePlay = function()
{
	$("#playbutton").toggleClass("glyphicon-pause glyphicon-play");
	
	if (carouselState === "hover")
	{
		$('#myCarousel').carousel('pause');
		carouselState = "pause";
	}
	else
	{
		$('#myCarousel').carousel('cycle');
		carouselState = "hover";
	}
};