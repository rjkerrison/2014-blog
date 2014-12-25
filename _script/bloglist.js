---
permalink: "/js/bloglist.js"
---
// Toggles blogposts with specified tags.

Array.prototype.diff = function(a) {
	return this.filter(
		function(i) {
			return a.indexOf(i) < 0;
		}
	);
};
Array.prototype.contains = function(a) {
	return !(this.indexOf(a) < 0);
};
Array.prototype.tryRemove = function(a) {
	if (this.indexOf(a) !== -1) {
		this.splice(this.indexOf(a), 1);
		return true;
	}
	else {
		return false;
	}
};

var allTags = [{% for tag in site.tags %}
	"{{tag | first}}",{% endfor %}
	];

var tagsToShow = [];
var tagsToHide = [{% for tag in site.tags %}
	"{{tag | first}}",{% endfor %}
	];

$.fn.showAll = function() {
	tagsToShow = [{% for tag in site.tags %}
	"{{tag | first}}",{% endfor %}
	];
	tagsToHide = [];
	$(this).displayPosts();
}

$.fn.showNone = function() {
	tagsToShow = [];
	tagsToHide = [{% for tag in site.tags %}
	"{{tag | first}}",{% endfor %}
	];
	$(this).displayPosts();
}

$.fn.displayTags = function() {
	for (var i=0; i<tagsToHide.length; i++) {
		$('[data-blogtag *="'+tagsToHide[i]+'"]').fadeOut();
	}
	for (var i=0; i<tagsToShow.length; i++) {
		$('[data-blogtag *="'+tagsToShow[i]+'"]').fadeIn();
	}
}

$.fn.displayPosts = function() {
	var postsToShow = $([]);
	for (var i=0; i<tagsToShow.length; i++) {
		$.merge(postsToShow,$('[data-blogtag *="'+tagsToShow[i]+'"]'));
	}
	$(postsToShow).each(
		function () {
			$(this).fadeIn();
		}
	);
	$('article').not($(postsToShow)).each(
		function () {
			$(this).fadeOut();
		}
	);
}

$.fn.toggleTag = function () {
	var tag = $(this).data('tag');
	if (allTags.contains(tag)) {
		if (!tagsToHide.tryRemove(tag)) {
			tagsToHide.push(tag);
		}
		if (!tagsToShow.tryRemove(tag)) {
			tagsToShow.push(tag);
		}
	}
	$(this).displayPosts();
}

$.fn.clickFaded = function() {
	$('.tag-toggle.faded').each(
		function () {
			$(this).click();
		}
	);
}
$.fn.clickNotFaded = function() {
	$('.tag-toggle').filter(':not(.faded)').click();
}
$.fn.viewImage = function() {
	$('body').hide();
}

$.fn.viewImage = function() {
	$('body').hide();
}

$.fn.textWidth = function() {
	var html_org = $(this).html();
	var html_calc = '<span>' + html_org + '</span>';
	$(this).html(html_calc);

	var width = $(this).find('span:first').width();

	$(this).html(html_org);
	return width;
}

$.fn.roundLineBreaks = function() {

	var buttonsToRound = $(this);

	var firstElement = $(buttonsToRound[0]);
	var lastElement = firstElement;
	var finalRowEnd = false;
	var finalRowStart = firstElement;
	var count = 0;

	var containerWidth = $(this).parent().parent().width() - 1;

	var widths = $.map(
		buttonsToRound,
		function ( val ) {
			return $(val).textWidth()
				+ 1*$(val).css('padding-left').replace("px","")
				+ 1*$(val).css('padding-right').replace("px","");
		}
	);
	var maxWidth = Math.max.apply(Math, widths);

	buttonsToRound.width(maxWidth);

	while(count < buttonsToRound.length && firstElement.offset().top == $(buttonsToRound[count]).offset().top) {
		count++;
	}

	buttonsToRound.width(1+Math.max(maxWidth, containerWidth/count));
	buttonsToRound.removeClass('force-no-margin-left');

	buttonsToRound.each(function() {
		if (lastElement && lastElement.offset().top != $(this).offset().top) {
			finalRowEnd = lastElement;
			finalRowStart = $(this);
			$(this).addClass('force-no-margin-left');
		}
		lastElement = $(this);
	});

	buttonsToRound.removeClass('round-top-left round-bottom-left round-top-right round-bottom-right');

	if (!finalRowEnd) {
		finalRowEnd = lastElement;
	}

	firstElement.addClass('round-top-left');
	lastElement.addClass('round-bottom-right');
	finalRowEnd.addClass('round-bottom-right');
	finalRowStart.addClass('round-bottom-left');
	$(buttonsToRound[count-1]).addClass('round-top-right');
};

$(window).on('resize', function() {
	$('.tag-toggle').roundLineBreaks();
	$('.tag-control').roundLineBreaks();
});

$(document).ready(function() {
	$('img').click(
		function() {
			$(this).viewImage();
		}
	);

	$('.tag-toggle').roundLineBreaks();
	$('.tag-control').roundLineBreaks();

	$('[data-tag="all"]').click(
		$(this).clickFaded
	);
	$('[data-tag="none"]').click(
		$(this).clickNotFaded
	);
	$('.tag-toggle').click(
		function() {
			$(this).toggleClass("btn-success btn-info faded");
			$(this).toggleTag();
		}
	);
	$('.tag-toggle').each(
		function () {
			$(this).click();
			$(this).delay(1000);
		}
	);
});