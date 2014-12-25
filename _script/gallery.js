---
permalink: "/js/gallery.js"
---
// Defines functions to view images in a cooler way.

// This is the default viewer for images in a blog post.

$.fn.viewImage = function() {
	this.data("preview-target") {
		
	}
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
	)
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
$.fn.clickActive = function() {
	$('.tag-toggle.active').each(
		function () {
			$(this).click();
		}
	);
}
$(document).ready(function() {
	$('[data-tag="all"]').click(
		$(this).clickFaded
	);
	$('[data-tag="none"]').click(
		$(this).clickActive
	);
	$('.tag-toggle').click(
		function() {
			$(this).toggleClass("btn-success btn-warning faded active");
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