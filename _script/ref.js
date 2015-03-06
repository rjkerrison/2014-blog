---
permalink: "/js/ref.js"
---
/* With thanks to Randall Munroe */
$(function() {
	$('.refbody').hide();
	$('.refnum').click(function(event) {
		$(this.nextElementSibling).toggle();
		event.stopPropagation();
	});
	$('body').click(function(event) {
		$('.refbody').hide();
	});
});