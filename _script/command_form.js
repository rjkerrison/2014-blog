---
permalink: "/js/command_form.js"
---
// Keycodes
const keys = {
	r: 82,
	space: 32,
	c: 67,
	esc: 27
};

// Component Elements

$commandForm = $('form#command_form');
$commandFormInput = $commandForm.children('input:first');
$commandFormLabel = $commandForm.children('label:first');

// Commands

var showRaptor = function () {
	$('.raptor').removeClass('hiding');
	setTimeout(
		function () {
			$('.raptor').addClass('hiding');
		},
		3000);
};

var showSnake = function () {
	$('#snake').toggle();
};

var redirectTo = function (url) {
	return function () {
		window.location.href = '{{ site.url }}' + url;
	};
};

// Command Handler

var commandDictionary = {
	'raptor': showRaptor,
	'snake': showSnake,
	'home': redirectTo('/'),
	'blog': redirectTo('/blog'),
	'about': redirectTo('/about'),
	'': $commandForm.hide,
}

var handleCommand = function (e) {
	e.stopPropagation();
	e.preventDefault();
	var command = $commandFormInput.val().toLowerCase();
	if (command in commandDictionary) {
		$commandForm.hide();
		commandDictionary[command]();
		$commandFormLabel.html(
			'Type a command and hit \'Enter\'…');
	} else {
		$commandFormLabel.html(
			'"<span style="color: rgba(255, 65, 65, 1);">' +
			command +
			'</span>"' +
			' is not a recognised command.');
	}
};

$commandForm.submit(handleCommand);

// Initialisation

$(document).keydown(function (e) {
	if (e.ctrlKey && e.altKey && e.keyCode === keys.r) {
		showRaptor();
	}
	if (e.ctrlKey && e.altKey && (e.keyCode === keys.space || e.keyCode === keys.c)) {
		$commandForm.show();
		$commandFormInput.focus();
		$commandFormInput.select();
	}
	if (e.keyCode === 27) {
		$commandForm.hide();
	}
});