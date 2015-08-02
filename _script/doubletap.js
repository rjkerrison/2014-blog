---
permalink: "/js/doubletap.js"
---

var $document = $(document);
var distanceThreshold = 5;
var timeThreshold = 1000;

$document.mousedown(function ( firstDown ) {
	$document.mouseup(function ( firstUp ) {
		$document.off('mouseup');

		if (Math.abs(firstUp.pageX - firstDown.pageX) < distanceThreshold
			&& Math.abs(firstUp.pageX - firstDown.pageX) < distanceThreshold) {

			var trigger = $document.mousedown(function ( secondDown ) {
				$document.off('mousedown', trigger);

				if (Math.abs(firstUp.pageX - secondDown.pageX) < distanceThreshold
					&& Math.abs(firstUp.pageX - secondDown.pageX) < distanceThreshold) {

					$document.mouseup(function ( secondUp ) {
						$document.off('mouseup');

						if (secondUp.timeStamp - firstDown.timeStamp < timeThreshold
							&& Math.abs(secondUp.pageX - secondDown.pageX) < distanceThreshold
							&& Math.abs(secondUp.pageX - secondDown.pageX) < distanceThreshold) {
							$document.trigger('doubletap');
							console.log('doubletap!');
						};

					});
				};
			});
		}
	});
});