---
permalink: "/js/command_form.js"
---
// Keycodes
// 82 - "r"
// 32 - " "
// 27 - Esc

var showRaptor = function () {
	$('.raptor').removeClass('hiding');
	setTimeout(
		function () {
			$('.raptor').addClass('hiding');
		},
		3000);
};

var redirectTo = function (url) {
	return function () {
		window.location.href = '{{ site.url }}' + url;
	};
};

var commandDictionary = {
	'raptor': showRaptor,
	'home': redirectTo('/'),
	'blog': redirectTo('/blog'),
	'about': redirectTo('/about'),
}

var handleCommand = function (e) {
	e.stopPropagation();
	e.preventDefault();
	var command = $(this).children('input').val();
	$(this).hide();
	commandDictionary[command]();
};

$commandForm = $('form#command_form');
$commandFormInput = $commandForm.children('input:first');

$commandForm.submit(handleCommand);

$(document).keydown(function (e) {
	if (e.ctrlKey && e.altKey && e.keyCode === 82) {
		showRaptor();
	}
	if (e.ctrlKey && e.altKey && e.keyCode === 32) {
		$commandForm.show();
		$commandFormInput.focus();
		$commandFormInput.select();
	}
	if (e.keyCode === 27) {
		$commandForm.hide();
	}
});