---
permalink: "/js/ref.js"
---
/* With thanks to Randall Munroe */
function adjustPosition(refbody) {
	$refbody = $(refbody);
	if ($refbody.offset().left + $refbody.width() > $(document).width()) {
		$refbody.css('left', function(left) {
			return left - $refbody.width();
		});
	}
}


$(function() {
	$('.refbody').each(function() {adjustPosition(this);});
	$('.refbody').hide();
	$('.refnum').click(function(event) {
		$(this.nextElementSibling).toggle();
		event.stopPropagation();
		event.preventDefault();
	});
	$('.refbody').click(function(event) {
		event.stopPropagation();
		event.preventDefault();
	});
	$('body').click(function(event) {
		$('.refbody').hide();
	});
});