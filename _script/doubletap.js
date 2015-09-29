---
permalink: "/js/doubletap.js"
---

var $document = $(document);
var distanceThreshold = 5;
var timeThreshold = 1000;

$('*').mousedown(function ( firstDown ) {
	$(this).mouseup(function ( firstUp ) {
		firstUp.stopPropagation();
		$(this).off('mouseup');

		if (Math.abs(firstUp.pageX - firstDown.pageX) < distanceThreshold
			&& Math.abs(firstUp.pageX - firstDown.pageX) < distanceThreshold) {

			var trigger = $(this).mousedown(function ( secondDown ) {
				$(this).off('mousedown', trigger);

				if (Math.abs(firstUp.pageX - secondDown.pageX) < distanceThreshold
					&& Math.abs(firstUp.pageX - secondDown.pageX) < distanceThreshold) {

					$(this).mouseup(function ( secondUp ) {
						secondUp.stopPropagation();
						$(this).off('mouseup');

						if (secondUp.timeStamp - firstDown.timeStamp < timeThreshold
							&& Math.abs(secondUp.pageX - secondDown.pageX) < distanceThreshold
							&& Math.abs(secondUp.pageX - secondDown.pageX) < distanceThreshold) {
							$(this).trigger('doubletap');
						};
					});
				};
			});
		}
	});
});