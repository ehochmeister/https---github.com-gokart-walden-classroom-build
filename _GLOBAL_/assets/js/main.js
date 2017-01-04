// Override Laureate's Kaltura script that injects Twitter Bootstrap into our page
function includeBootstrap () {
	return false;
}

// Initialize Zurb Foundation
$(document).foundation({
	"magellan-expedition": {
		destination_threshold: 400, // pixels from the top of destination for it to be considered active
	}
});

// Hacky way to style links containing images
$(document).ready(function($) {
	$("article a img").parent().addClass("has-image");
});

// Ensure proper padding between sections if it got missed
$(document).ready(function($) {
	$(".section-break").before( '<div class="padding"/>' );
});

// Make entire Call to Action clickable, based on its first link
// If it has a _target attribute, open said link in a new window
$(".cta a[href]:first-child").each(function(index, el) {
	var url = $(this).attr("href");
	var target = $(this).attr("target");
	var parent = $(this).closest('.cta');
	console.log(url,target);
	if(url) {
		$(parent).addClass("clickable");

		if(target) {
			$(parent).bind( "click", function() {
				window.open( url, target + Math.floor(Math.random()*999999) ); // http://stackoverflow.com/a/2358532/1167354
				return false;
			});
		} else {
			$(parent).bind( "click", function() {
				window.location = url;
				return false;
			});
		}
	}
});

// Toggleable Navigation for Small Breakpoint
$('.hero nav label').click(function() {
  $(this).siblings('.week-navigation').children('li').toggle('fast');
});

// Print in Browser
$('img[alt="Print"]').click(function () {
	window.print();
});

// Focus on top of off-canvas, even when we're further down the page
$(".right-off-canvas-toggle").click(function() {
	window.scrollTo(0,0);
});

// Look for Magellan nav elements in the page and set their attributes
// http://foundation.zurb.com/docs/components/magellan.html
$("[data-magellan-arrival]").each(function(index, el) {
	var id = $(el).attr('data-magellan-arrival');
	$('#'+id).attr('data-magellan-destination',id);
});

// Add Divider Line Above "Week 1" in Right-Nav
$( "#menu .side-nav li a:contains('Week 1')" ).addClass("divider");


$('blockquote .kal-group').each(function(index, el) {
	$(this).closest('blockquote').addClass('kaltura').removeClass('clickable');
});

// Offset in-page anchors to avoid being overlapped by fixed header
// http://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header
// https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange
$(function(){

	// debug
	// if ("onhashchange" in window) {
	// 	console.info("This browser supports the hashchange event.");
	// }

	function locationHashChanged() {
		var $anchor = $(location.hash);
		var fixedElementHeight = 90; // Approximate height of the fixed navigation
		if ($anchor.length > 0) {
			window.scrollTo(0, $anchor.offset().top - fixedElementHeight);
		}
	}

	window.onhashchange = locationHashChanged;

});

// Track Clicks to Student Support Links
$('#student-support-header, #student-support-header-small').click(function(event) {
	console.log('click','liveChatFromHeader');
	dataLayer.push({'event':'liveChatFromHeader'});
});
$('#student-support-sidebar a').click(function(event) {
	console.log('click','liveChatFromSubNav');
	dataLayer.push({'event':'liveChatFromSubNav'});
});


// Apply styles to fixed sub-navigation when scrolling
// https://css-tricks.com/scroll-fix-content/
// Disabled here because it doesn't work super well in iOS, requires testing

// var scrollElement = $("header.hero nav");

// $(document).on( 'scroll', scrollElement, function(){

// 	var position = $('body').scrollTop();

// 	if (position) {
// 		scrollElement.addClass("fixed");
// 	} else {
// 		scrollElement.removeClass("fixed");
// 	}

// });