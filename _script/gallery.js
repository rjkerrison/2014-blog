---
permalink: "/js/gallery.js"
---
// Defines functions to view images in a cooler way.

// This is the default viewer for images in a blog post.
var shield =
	$('<div>')
		.addClass('shield')
		.width($(window).width())
		.height($(window).height())
		.click(
			function() {
				$(this).closeView();
			}
		);

$.fn.viewImage = function() {
	$(this).wrap(shield);
	$(this).unbind('click');
	while ($('.shield').length !== 1) {
		$('.shield:last').children('.thumbnail').unwrap();
	}
}

$.fn.closeView = function() {
	var thumbnail = $(this).find('.thumbnail:first');
	$(this).empty();
	$(this).replaceWith(thumbnail);
	$('.thumbnail').click(
		function() {
			$(this).viewImage();
		}
	);
}

$(document).ready(function() {
	$('.thumbnail').click(
		function() {
			$(this).viewImage();
		}
	);
});