(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-116').attr('src', (dpi>1) ? 'images/rectangle-2-640-2.png' : 'images/rectangle-2-320-5.png');
$('.js-117').attr('src', (dpi>1) ? 'images/lian-xi-wo-130.png' : 'images/lian-xi-wo-65.png');
$('.js-118').attr('src', (dpi>1) ? 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-558.png' : 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-279.png');
$('.js-119').attr('src', (dpi>1) ? 'images/g2oup-332.png' : 'images/g2oup-166.png');
$('.js-120').attr('src', (dpi>1) ? 'images/weixin-72.png' : 'images/weixin-36.png');
$('.js-121').attr('src', (dpi>1) ? 'images/qq-60.png' : 'images/qq-30.png');
$('.js-122').attr('src', (dpi>1) ? 'images/weibo-84.png' : 'images/weibo-42.png');
$('.js-123').attr('src', (dpi>1) ? 'images/2-120.png' : 'images/2-60.png');
$('.js-124').attr('src', (dpi>1) ? 'images/3-92.png' : 'images/3-46.png');
$('.js-125').attr('src', (dpi>1) ? 'images/4-114.png' : 'images/4-57.png');
$('.js-126').attr('src', (dpi>1) ? 'images/work-hark-will-save-1372.png' : 'images/work-hark-will-save-686.png');
$('.js-127').attr('src', (dpi>1) ? 'images/rectangle-1260-2.png' : 'images/rectangle-630-6.png');}else if($(window).width()>=480){$('.js-116').attr('src', (dpi>1) ? 'images/rectangle-2-320-4.png' : 'images/rectangle-2-160-2.png');
$('.js-117').attr('src', (dpi>1) ? 'images/lian-xi-wo-130.png' : 'images/lian-xi-wo-65.png');
$('.js-118').attr('src', (dpi>1) ? 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-584.png' : 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-292.png');
$('.js-119').attr('src', (dpi>1) ? 'images/g2oup-340.png' : 'images/g2oup-170.png');
$('.js-120').attr('src', (dpi>1) ? 'images/weixin-102.png' : 'images/weixin-51.png');
$('.js-121').attr('src', (dpi>1) ? 'images/qq-78.png' : 'images/qq-39.png');
$('.js-122').attr('src', 'images/weibo-55.png');
$('.js-123').attr('src', 'images/2-90.png');
$('.js-124').attr('src', 'images/3-76-1.png');
$('.js-125').attr('src', 'images/4-90.png');
$('.js-126').attr('src', (dpi>1) ? 'images/work-hark-will-save-688.png' : 'images/work-hark-will-save-344.png');
$('.js-127').attr('src', (dpi>1) ? 'images/rectangle-624.png' : 'images/rectangle-312.png');}else{$('.js-116').attr('src', (dpi>1) ? 'images/rectangle-2-214-4.png' : 'images/rectangle-2-107-4.png');
$('.js-117').attr('src', (dpi>1) ? 'images/lian-xi-wo-86.png' : 'images/lian-xi-wo-43.png');
$('.js-118').attr('src', (dpi>1) ? 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-388.png' : 'images/ru-guo-ni-xu-yao-wo-ke-yi-tong-guo-yi-xia-ge-zhong-fang-shi-le-jie-wo-194.png');
$('.js-119').attr('src', (dpi>1) ? 'images/g2oup-226.png' : 'images/g2oup-113.png');
$('.js-120').attr('src', (dpi>1) ? 'images/weixin-68.png' : 'images/weixin-34.png');
$('.js-121').attr('src', (dpi>1) ? 'images/qq-52.png' : 'images/qq-26.png');
$('.js-122').attr('src', (dpi>1) ? 'images/weibo-72.png' : 'images/weibo-36.png');
$('.js-123').attr('src', (dpi>1) ? 'images/2-120.png' : 'images/2-60.png');
$('.js-124').attr('src', (dpi>1) ? 'images/3-100.png' : 'images/3-50.png');
$('.js-125').attr('src', (dpi>1) ? 'images/4-120.png' : 'images/4-60.png');
$('.js-126').attr('src', (dpi>1) ? 'images/work-hark-will-save-458.png' : 'images/work-hark-will-save-229.png');
$('.js-127').attr('src', (dpi>1) ? 'images/rectangle-420-5.png' : 'images/rectangle-210-5.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});