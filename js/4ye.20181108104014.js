(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-130').attr('src', (dpi>1) ? 'images/rectangle-2-640-1.png' : 'images/rectangle-2-320-2.png');
$('.js-131').attr('src', (dpi>1) ? 'images/lian-xi-wo-130.png' : 'images/lian-xi-wo-65.png');
$('.js-132').attr('src', (dpi>1) ? 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-558.png' : 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-279.png');
$('.js-133').attr('src', (dpi>1) ? 'images/g2oup-332.png' : 'images/g2oup-166.png');
$('.js-134').attr('src', (dpi>1) ? 'images/weixin-72.png' : 'images/weixin-36.png');
$('.js-135').attr('src', (dpi>1) ? 'images/qq-60.png' : 'images/qq-30.png');
$('.js-136').attr('src', (dpi>1) ? 'images/weibo-84.png' : 'images/weibo-42.png');
$('.js-137').attr('src', (dpi>1) ? 'images/2-120.png' : 'images/2-60.png');
$('.js-138').attr('src', (dpi>1) ? 'images/3-92.png' : 'images/3-46.png');
$('.js-139').attr('src', (dpi>1) ? 'images/4-114.png' : 'images/4-57.png');
$('.js-140').attr('src', (dpi>1) ? 'images/work-hark-will-save-1372.png' : 'images/work-hark-will-save-686.png');
$('.js-141').attr('src', (dpi>1) ? 'images/rectangle-1260.png' : 'images/rectangle-630-1.png');}else{$('.js-130').attr('src', (dpi>1) ? 'images/rectangle-2-320-1.png' : 'images/rectangle-2-160.png');
$('.js-131').attr('src', (dpi>1) ? 'images/lian-xi-wo-130.png' : 'images/lian-xi-wo-65.png');
$('.js-132').attr('src', (dpi>1) ? 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-584.png' : 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-292.png');
$('.js-133').attr('src', (dpi>1) ? 'images/g2oup-340.png' : 'images/g2oup-170.png');
$('.js-134').attr('src', (dpi>1) ? 'images/weixin-102.png' : 'images/weixin-51.png');
$('.js-135').attr('src', (dpi>1) ? 'images/qq-78.png' : 'images/qq-39.png');
$('.js-136').attr('src', 'images/weibo-55.png');
$('.js-137').attr('src', (dpi>1) ? 'images/2-118.png' : 'images/2-59.png');
$('.js-138').attr('src', (dpi>1) ? 'images/3-86.png' : 'images/3-43.png');
$('.js-139').attr('src', (dpi>1) ? 'images/4-110.png' : 'images/4-55.png');
$('.js-140').attr('src', (dpi>1) ? 'images/work-hark-will-save-688.png' : 'images/work-hark-will-save-344.png');
$('.js-141').attr('src', (dpi>1) ? 'images/rectangle-630-4.png' : 'images/rectangle-315-2.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});