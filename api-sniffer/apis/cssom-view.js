// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {
		"MeidaQueryList": function () {
			var result;
			try {
				result = window.matchMedia("(min-width: 400px)");
			} catch (e) {

			}
			return result;
		},
		"CaretPosition": function () {
			var result;
			try {
				result = document.caretRangeFromPoint(10, 10);
			} catch (e) {

			}
			return result;
		},
		// IE 8
		"Document": function () {
			return document;
		},
		"HTMLElement": function () {
			return document.createElement('div');
		}
	};

	var interfaces = {
		"window": [
			"devicePixelRatio",
			"innerHeight",
			"innerWidth",
			"outerHeight",
			"outerWidth",
			"pageXOffset",
			"pageYOffset",
			"screenX",
			"screenY",
			"scrollX",
			"scrollY",
			"moveBy",
			"moveTo",
			"resizeBy",
			"resizeTo",
			"scroll",
			"scrollBy",
			"scrollTo"
		],
		"MeidaQueryList": [
			"matches",
			"media",
			"addLisener",
			"removeListener"
		],
		"Screen": [
			"availHeight",
			"availWidth",
			"colorDepth",
			"height",
			"pixelDepth",
			"width"
		],
		"Document": [
			"scrollingElement",
			"caretPositionFromPoint",
			"elementFromPoint",
			"elementsFromPoint"
		],
		"CaretPosition": [
			"offset",
			"offsetNode",
			"getClientRect"
		],
		"Element": [
			"clientHeight",
			"clientLeft",
			"clientTop",
			"clientWidth",
			"scrollHeight",
			"scrollLeft",
			"scrollTop",
			"scrollWidth",
			"getBoundingClientRect",
			"getClientRects",
			"scroll",
			"scrollBy",
			"scrollIntoView",
			"scrollTo"
		],
		"HTMLElement": [
			"offsetHeight",
			"offsetLeft",
			"offsetParent",
			"offsetTop",
			"offsetWidth"
		],
		"Range": [
			"getBoundingClientRect",
			"getClientRects"
		],
		"MouseEvent": [
			"clientX",
			"clientY",
			"offsetX",
			"offsetY",
			"pageX",
			"pageY",
			"screenX",
			"screenY",
			"x",
			"y"
		]
	};

	sniffer(interfaces, instances);
}());