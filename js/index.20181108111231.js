(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/shou-ye-1200-438.jpg' : 'images/shou-ye-1200-219.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/g1roup-188.png' : 'images/g1roup-94.png');
$('.js-3').attr('src', (dpi>1) ? 'images/group-22-124.png' : 'images/group-22-62.png');
$('.js-4').attr('src', (dpi>1) ? 'images/group-3-168.png' : 'images/group-3-84.png');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? 'images/shou-ye-1200-384.jpg' : 'images/shou-ye-1200-192.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/g1roup-176.png' : 'images/g1roup-88.png');
$('.js-3').attr('src', (dpi>1) ? 'images/group-22-126.png' : 'images/group-22-63.png');
$('.js-4').attr('src', (dpi>1) ? 'images/group-3-164.png' : 'images/group-3-82.png');}else{$('.js').attr('src', (dpi>1) ? 'images/shou-ye-1200-256.jpg' : 'images/shou-ye-1200-128.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/g1roup-116.png' : 'images/g1roup-58.png');
$('.js-3').attr('src', (dpi>1) ? 'images/group-22-84.png' : 'images/group-22-42.png');
$('.js-4').attr('src', (dpi>1) ? 'images/group-3-108.png' : 'images/group-3-54.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});