---
permalink: "/js/swipe.js"
---

var $document = $(document);
var horizontalThreshold = 30;
var timeThreshold = 1000;

$('*').mousedown(function ( mousedown ) {
	$(this).mouseup(function ( mouseup ) {
		mouseup.stopPropagation();
		$(this).off('mouseup');
		if (mouseup.timeStamp - mousedown.timeStamp < timeThreshold
			&& Math.abs(mouseup.pageX - mousedown.pageX) > horizontalThreshold
			&& Math.abs(mouseup.pageX - mousedown.pageX) > Math.abs(mouseup.pageY - mousedown.pageY)) {
			$(this).trigger('swipe');
		}
	});
});