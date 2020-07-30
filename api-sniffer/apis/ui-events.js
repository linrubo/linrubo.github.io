// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {};

	var interfaces = {
		"UIEvent": [
			"detail",
			"view"
		],
		"FocusEvent": [
			"relatedTarget"
		],
		"MouseEvent": [
			"altKey",
			"button",
			"buttons",
			"clientX",
			"clientY",
			"ctrlKey",
			"metaKey",
			"relatedTarget",
			"screenX",
			"screenY",
			"shiftKey",
			"getModifierState"
		],
		"WheelEvent": [
			"deltaMode",
			"deltaX",
			"deltaY",
			"deltaZ"
		],
		"InputEvent": [
			"data",
			"isComposing",
			"inputType"
		],
		"KeyboardEvent": [
			"altKey",
			"code",
			"ctrlKey",
			"isComposing",
			"key",
			"location",
			"metaKey",
			"repeat",
			"shiftKey",
			"getModifierState"
		],
		"CompositionEvent": [
			"data"
		]
	};

	sniffer(interfaces, instances);
}());