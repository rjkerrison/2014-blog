---
permalink: "/js/quote.js"
---
$(function() {
	$('blockquote:not(:has(ul)), blockquote').addClass('quote-start');
	$('blockquote:not(:has(ul)), blockquote ul li:last-child').addClass('quote-end');
});