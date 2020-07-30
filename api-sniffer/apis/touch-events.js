// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {};

	var interfaces = {
		"Touch": [
			"clientX",
			"clientY",
			"indentifier",
			"pageX",
			"pageY",
			"screenX",
			"screenY",
			"target"
		],
		"TouchList": [
			"length",
			"item"
		],
		"TouchEvent": [
			"altKey",
			"changedTouches",
			"ctrlKey",
			"metaKey",
			"shiftKey",
			"targetTouches",
			"touches"
		]
	};

	sniffer(interfaces, instances);
}());