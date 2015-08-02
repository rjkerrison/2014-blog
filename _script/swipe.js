---
permalink: "/js/swipe.js"
---

var $document = $(document);
var horizontalThreshold = 30;
var timeThreshold = 1000;

$document.mousedown(function (e) {
	$document.mouseup(function ( mouseup ) {
		$document.off('mouseup');
		if (mouseup.timeStamp - e.timeStamp < timeThreshold
			&& Math.abs(mouseup.pageX - e.pageX) > horizontalThreshold
			&& Math.abs(mouseup.pageX - e.pageX) > Math.abs(mouseup.pageY - e.pageY)) {
			$document.trigger('swipe');
		}
	})
});