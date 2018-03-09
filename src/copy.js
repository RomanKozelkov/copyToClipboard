(function(exports) {
	"use strict";

	function copyToClipboard(text) {
		var parent = document.body;
		var isRTL = document.documentElement.getAttribute('dir') === 'rtl';

		var el = document.createElement('textarea');
		el.style.position = 'fixed';
		el.style[isRTL ? 'right' : 'left'] = '-9999px';
		el.style.opacity = 0;
		el.value = text;
		el.setAttribute('readonly', 'true');

		parent.appendChild(el);
		el.focus().select();
		el.setSelectionRange(0, el.value.length);
		try {
			document.execCommand('copy');
		} catch (e) {
			console.error(e);
		}
		parent.removeChild(el);
		return true;
	}

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
		module.exports = copyToClipboard;
	else
		window.copyToClipboard = copyToClipboard;
}());
