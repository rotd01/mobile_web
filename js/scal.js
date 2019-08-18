window.mobileUtil = (function(win, doc) {
	var UA = navigator.userAgent,
		isAndroid = /android|adr/gi.test(UA),
		isIOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid,
		isBlackBerry = /BlackBerry/i.test(UA),
		isWindowPhone = /IEMobile/i.test(UA),
		isMobile = isAndroid || isIOS || isBlackBerry || isWindowPhone;
	return {
		isAndroid: isAndroid,
		isIOS: isIOS,
		isMobile: isMobile,
		isWeixin: /MicroMessenger/gi.test(UA),
		isPC: !isMobile
	};
})(window, document);

!(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		fsize,
		fn = function() {
			var cWidth = !mobileUtil.isMobile ? 640 : docEl.clientWidth;
			fsize = cWidth / 6.4;
			cWidth && (docEl.style.fontSize = 2 * fsize + 'px');
		};
	fn();
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, fn, false);
})(document, window);
