(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-13').attr('src', (dpi>1) ? 'images/rectangle-2-640.png' : 'images/rectangle-2-320.png');
$('.js-14').attr('src', (dpi>1) ? 'images/group-7-132.png' : 'images/group-7-66.png');
$('.js-15').attr('src', (dpi>1) ? 'images/8-940.png' : 'images/8-470.png');
$('.js-16').attr('src', (dpi>1) ? 'images/2-120.png' : 'images/2-60.png');
$('.js-17').attr('src', (dpi>1) ? 'images/3-92.png' : 'images/3-46.png');
$('.js-18').attr('src', (dpi>1) ? 'images/4-114.png' : 'images/4-57.png');
$('.js-19').attr('src', (dpi>1) ? 'images/7-788.png' : 'images/7-394.png');
$('.js-20').attr('src', (dpi>1) ? 'images/6-284.png' : 'images/6-142.png');
$('.js-21').attr('src', (dpi>1) ? 'images/line-5-1618.png' : 'images/line-5-809.png');
$('.js-22').attr('src', (dpi>1) ? 'images/rectangle-1260-1.png' : 'images/rectangle-630-2.png');
$('.js-23').attr('src', (dpi>1) ? 'images/5-824.png' : 'images/5-412.png');}else if($(window).width()>=480){$('.js-13').attr('src', (dpi>1) ? 'images/rectangle-2-322.png' : 'images/rectangle-2-161.png');
$('.js-14').attr('src', (dpi>1) ? 'images/group-7-158.png' : 'images/group-7-79.png');
$('.js-15').attr('src', (dpi>1) ? 'images/8-588.png' : 'images/8-294.png');
$('.js-16').attr('src', 'images/2-86.png');
$('.js-17').attr('src', (dpi>1) ? 'images/3-122.png' : 'images/3-61.png');
$('.js-18').attr('src', (dpi>1) ? 'images/4-158.png' : 'images/4-79.png');
$('.js-19').attr('src', (dpi>1) ? 'images/7-660.png' : 'images/7-330.png');
$('.js-20').attr('src', (dpi>1) ? 'images/6-334.png' : 'images/6-167.png');
$('.js-21').attr('src', (dpi>1) ? 'images/line-5-810.png' : 'images/line-5-405.png');
$('.js-22').attr('src', (dpi>1) ? 'images/rectangle-630-3.png' : 'images/rectangle-315.png');
$('.js-23').attr('src', (dpi>1) ? 'images/5-726.png' : 'images/5-363.png');}else{$('.js-13').attr('src', (dpi>1) ? 'images/rectangle-2-214-2.png' : 'images/rectangle-2-107-2.png');
$('.js-14').attr('src', (dpi>1) ? 'images/group-7-104.png' : 'images/group-7-52.png');
$('.js-15').attr('src', (dpi>1) ? 'images/8-392.png' : 'images/8-196.png');
$('.js-16').attr('src', (dpi>1) ? 'images/2-114.png' : 'images/2-57.png');
$('.js-17').attr('src', (dpi>1) ? 'images/3-76.png' : 'images/3-38.png');
$('.js-18').attr('src', (dpi>1) ? 'images/4-106.png' : 'images/4-53.png');
$('.js-19').attr('src', (dpi>1) ? 'images/7-440.png' : 'images/7-220.png');
$('.js-20').attr('src', (dpi>1) ? 'images/6-224.png' : 'images/6-112.png');
$('.js-21').attr('src', (dpi>1) ? 'images/line-5-540.png' : 'images/line-5-270.png');
$('.js-22').attr('src', (dpi>1) ? 'images/rectangle-420-3.png' : 'images/rectangle-210-3.png');
$('.js-23').attr('src', (dpi>1) ? 'images/5-484.png' : 'images/5-242.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});