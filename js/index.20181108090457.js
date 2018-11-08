(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/shou-ye-1200-438.jpg' : 'images/shou-ye-1200-219.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/rectangle-400.png' : 'images/rectangle-200.png');
$('.js-3').attr('src', (dpi>1) ? 'images/kai-qi-158.png' : 'images/kai-qi-79.png');}else{$('.js').attr('src', (dpi>1) ? 'images/shou-ye-1200-188.jpg' : 'images/shou-ye-1200-94.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/rectangle-196.png' : 'images/rectangle-98.png');
$('.js-3').attr('src', (dpi>1) ? 'images/kai-qi-72.png' : 'images/kai-qi-36.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});