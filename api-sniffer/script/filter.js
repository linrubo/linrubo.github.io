// Author:
// E-mail:

(function (global) {
	'use strict';

	var input = document.getElementById('input');
	var output = document.getElementById('output');
	var start = document.getElementById('start');

	var Demon = {
		forEach: function (source, callback, context) {
			var index, length, item;

			try {
				source.forEach(callback, context);
			} catch (e) {
				if (source === null || source === undefined) {
					throw new TypeError('Array.prototype.forEach called on null or undefined');
				}
				if (typeof callback !== 'function') {
					throw new TypeError(callback + ' not is a function');
				}

				length = source.length;
				for (index = 0; index < length; index += 1) {
					item = source[index];
					if (index in source) {
						callback.call(context, item, index, source);
					}
				}
			}
		},
		some: function (source, callback, context) {
			var index, length, item;
			var result = false;

			try {
				result = source.some(callback, context);
			} catch (e) {
				if (source === null || source === undefined) {
					throw new TypeError('Array.prototype.some called on null or undefined');
				}
				if (typeof callback !== 'function') {
					throw new TypeError(callback + ' not is a function');
				}

				length = source.length;
				for (index = 0; index < length; index += 1) {
					item = source[index];
					if (index in source) {
						result = callback.call(context, item, index, source);
						if (result === true) {
							break;
						}
					}
				}
			}

			return Boolean(result);
		},
		keys: function (object) {
			var result = [];
			var key;

			try {
				result = Object.keys(object);
			} catch (e) {
				if (object !== Object(object)) {
					throw new TypeError('Object.keys called on non-object');
				}

				for (key in object) {
					if (object.hasOwnProperty(key)) {
						result.push(key);
					}
				}
			}

			return result;
		},
		addEventListener: function (element, type, handle) {
			try {
				element.addEventListener(type, handle);
			} catch (e) {
				element.attachEvent('on' + type, handle);
			}
		}
	};

	Demon.addEventListener(start, 'click', function (event) {
		var instances = {};
		var interfaces = {};
		var included = [];
		var missing = [];
		var list = input.value.split(/\n/);
		var context;

		Demon.forEach(list, function (item) {
			var field = item.match(/([#\*\+]+)\s+(\w+)/) || [];
			var flag = field[1];
			var value = field[2];

			switch (flag) {
			case '###':
				context = interfaces[value] = [];
				if (value in global) {
					included.push(value);
				} else {
					missing.push(value);
					instances[value] = null;
				}
				break;
			case '*':
			case '+':
				context.push(value);
				break;
			default:
			}
		});

		// console.log(included);
		// console.log(missing);
		output.value = [
			'var instances = ' + JSON.stringify(instances, null, 4) + ';',
			'var interfaces = ' + JSON.stringify(interfaces, null, 4) + ';'
		].join('\n');
	}, false);
}(window));