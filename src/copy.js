(function(exports) {
	"use strict";

	function copyToClipboard(text) {
		var parent = document.body;
		var isRTL = document.documentElement.getAttribute('dir') === 'rtl';

		var input = document.createElement('input');
		input.style.position = 'absolute';
		input.style[isRTL ? 'right' : 'left'] = '-9999px';
		input.style.opacity = 0;
		input.value = text;
		input.setAttribute('readonly', 'true');

		parent.appendChild(input);
		input.focus().select();
		input.setSelectionRange(0, input.value.length);
		try {
			document.execCommand('copy');
		} catch (e) {
			console.error(e);
		}
		parent.removeChild(input);
		return true;
	}

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
		module.exports = copyToClipboard;
	else
		window.copyToClipboard = copyToClipboard;
}());
