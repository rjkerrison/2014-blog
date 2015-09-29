---
permalink: 'js/impossible.js'
---
$(function(){
	$('#typed').typed({
		strings: [
			"I've gone stylistic as hell with this spy message stuff.",
			"Your mission, should you choose to accept it, is to read the review which follows.",
			"This message will self-destruct in 5 seconds."],
		typeSpeed: 10,
		backDelay: 500,
		loop: false,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false,
		callback: function(){ destroyMessage(); },
		resetCallback: function() { newTyped(); }
	});

	$('.reset').click(function(){
		$('#typed').typed('reset');
	});
});

function newTyped(){ /* A new typed object */ }

function destroyMessage() {
	setTimeout(
		function () {
			fx($('#typed'));
		},
		5000);
}

function fx(o) {
	var $o = $(o);
	$o.html($o.text().replace(/([\S])/g, "<span>$1</span>"));
	$o.css("position", "relative");

	var spans = $('span', $o);
	var lettersMoving = spans.length;


	var fireComplete = function() {
		if (lettersMoving == 0) {
			$o.parent().fadeOut(
				1000,
				function () {
					$(this).remove();
				});
		}
	}

	spans.each(function(i) {
		var newTop = Math.floor(Math.random()*500)*((i%2)?1:-1);
		var newLeft = Math.floor(Math.random()*500)*((i%2)?1:-1);

		$(this).css({
				position: "relative",
				opacity: 1,
				fontSize: 12,
				top: 0,
				left: 0
			}).animate({
				opacity: 0,
				fontSize: 84,
				top: newTop,
				left:newLeft
			},
			{
				duration: 2000,
				complete: (function () {
						lettersMoving--,
						fireComplete();
					})
			});
	});
}

