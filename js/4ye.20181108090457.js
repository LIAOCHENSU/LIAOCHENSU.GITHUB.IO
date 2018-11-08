(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-128').attr('src', (dpi>1) ? 'images/rectangle-2-640.png' : 'images/rectangle-2-320.png');
$('.js-129').attr('src', (dpi>1) ? 'images/lian-xi-wo-130.png' : 'images/lian-xi-wo-65.png');
$('.js-130').attr('src', (dpi>1) ? 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-558.png' : 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-279.png');
$('.js-131').attr('src', (dpi>1) ? 'images/g2oup-332.png' : 'images/g2oup-166.png');
$('.js-132').attr('src', (dpi>1) ? 'images/weixin-72.png' : 'images/weixin-36.png');
$('.js-133').attr('src', (dpi>1) ? 'images/qq-60.png' : 'images/qq-30.png');
$('.js-134').attr('src', (dpi>1) ? 'images/weibo-84.png' : 'images/weibo-42.png');
$('.js-135').attr('src', (dpi>1) ? 'images/2-120.png' : 'images/2-60.png');
$('.js-136').attr('src', (dpi>1) ? 'images/3-92.png' : 'images/3-46.png');
$('.js-137').attr('src', (dpi>1) ? 'images/4-114.png' : 'images/4-57.png');
$('.js-138').attr('src', (dpi>1) ? 'images/work-hark-will-save-1372.png' : 'images/work-hark-will-save-686.png');
$('.js-139').attr('src', (dpi>1) ? 'images/rectangle-1260.png' : 'images/rectangle-630-1.png');}else{$('.js-128').attr('src', (dpi>1) ? 'images/rectangle-2-214-1.png' : 'images/rectangle-2-107-1.png');
$('.js-129').attr('src', (dpi>1) ? 'images/lian-xi-wo-44.png' : 'images/lian-xi-wo-22.png');
$('.js-130').attr('src', (dpi>1) ? 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-186.png' : 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-93.png');
$('.js-131').attr('src', (dpi>1) ? 'images/g2oup-112.png' : 'images/g2oup-56.png');
$('.js-132').attr('src', (dpi>1) ? 'images/weixin-24.png' : 'images/weixin-12.png');
$('.js-133').attr('src', (dpi>1) ? 'images/qq-22.png' : 'images/qq-11.png');
$('.js-134').attr('src', (dpi>1) ? 'images/weibo-28.png' : 'images/weibo-14.png');
$('.js-135').attr('src', (dpi>1) ? 'images/2-40.png' : 'images/2-20.png');
$('.js-136').attr('src', (dpi>1) ? 'images/3-32.png' : 'images/3-16.png');
$('.js-137').attr('src', (dpi>1) ? 'images/4-38.png' : 'images/4-19.png');
$('.js-138').attr('src', (dpi>1) ? 'images/work-hark-will-save-458.png' : 'images/work-hark-will-save-229.png');
$('.js-139').attr('src', (dpi>1) ? 'images/rectangle-420-2.png' : 'images/rectangle-210-2.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});