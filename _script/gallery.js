---
permalink: "/js/gallery.js"
---
// Defines functions for the images gallery.

// Laying out the photos.
var ratios = [
	{x: 15, y: 15},
	{x: 16, y: 12},
	{x: 14, y: 10},
	{x: 16, y: 9},
	{x: 14, y: 7},
	{x: 15, y: 5},
];

(function() {
	for (var i in ratios) {
		if (ratios[i].y != ratios[i].x) {
			ratios.push({x: ratios[i].y, y: ratios[i].x});
		}
	}
})();

function bestRatio(image) {
	var errors = [];
	var smallestError;
	var ratio;
	for (var i in ratios) {
		errors[i] =
			Math.abs(ratios[i].x * image.height / ratios[i].y
			- image.width);
		if (i === "0" || errors[i] < smallestError) {
			smallestError = errors[i];
			ratio = ratios[i];
		}
	}
	return ratio;
}

var extremities = [
	{x: 0, y: 0},
	{x: 32, y: 32},
];

var boxWidth = 0;

function getTopLeft(ratio) {
	if (extremities.indexOf({x: 0, y: 0}) != -1) {
		return {x: 0, y: 0}
	}
}

function setExtremities(topLeft, ratio) {
	var topRight = {
		x: topLeft.x + ratio.x,
		y: topLeft.y
	}
	var bottomLeft = {
		x: topLeft.x,
		y: topLeft.y + ratio.y
	}
	var bottomRight = {
		x: topLeft.x + ratio.x,
		y: topLeft.y + ratio.y
	}

	addOrRemove(extremities, topLeft);
	addOrRemove(extremities, topRight);
	addOrRemove(extremities, bottomLeft);
	addOrRemove(extremities, bottomRight);
}

function addOrRemove(list, item) {
	var index = list.indexOf(item)
	if (index != -1) {
		list.splice(index, 1);
	}
	else {
		list.push(item);
	}
}

function resolveThumbnailPosition(thumbnail) {
	var ratio = bestRatio(thumbnail);
	thumbnail.width(ratio.x * boxWidth);
	thumbnail.height(ratio.y * boxWidth);
}

function curate() {
	boxWidth = $('.gallery').parent().width() / 32;

	var thumbnails = $('.gallery').find('.thumbnail');
	thumbnails.each(resolveThumbnailPosition($(this)));

	// thumbnails.height(function() {
	// 	return bestRatio($(this).find('img')[0]).y * boxWidth;
	// });
	// thumbnails.width(function() {
	// 	return bestRatio($(this).find('img')[0]).x * boxWidth;
	// });
	// thumbnails.attr('title', function() {
	// 	return bestRatio($(this).find('img')[0]).x + ' by ' + bestRatio($(this).find('img')[0]).y;
	// });
}

curate();