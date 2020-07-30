// Author:
// E-mail:

(function () {
	'use strict';

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
		}
	};

	var params = (function (input) {
		var result = {};
		var fields = (input || '').split('&');

		Demon.forEach(fields, function (item) {
			var field = item.split('=');
			result[field[0]] = decodeURIComponent(field[1]);
		});

		return result;
	}((location.search || location.hash).slice(1)));

	var sniffer = function (interfaces, instances) {
		var list = document.getElementById('list');
		var title = document.getElementById('title');
		var counter = document.createTextNode('');
		var count = 0;
		var included = 0;
		var missing = [];

		var sniff = function (attributes, target, namespace) {
			var sources = [target.prototype, target];

			if ('HTMLElement' in window) {
				sources.push(HTMLElement.prototype);
			}

			Demon.forEach(attributes, function (attribute) {
				var dd = document.createElement('dd');
				var text = document.createTextNode(attribute);
				var state = Demon.some(sources, function (item) {
					return item && attribute in item;
				});

				if (state === false) {
					dd.className = 'missing';
					dd.title = '属性或方法不存在';
					missing.push([namespace, attribute].join('/'));
				} else {
					included += 1;
				}

				dd.appendChild(text);
				list.appendChild(dd);
			});
		};

		Demon.forEach(Demon.keys(interfaces), function (item) {
			var target;
			var attributes = interfaces[item];
			var dt = document.createElement('dt');
			var text = document.createTextNode(item);

			dt.appendChild(text);
			list.appendChild(dt);

			count += attributes.length;

			if (item in window) {
				target = window[item];
				dt.className = '';
			} else if (item in instances) {
				target = instances[item]();
				dt.className = 'unreal';
				dt.title = '没有构造函数或构造函数不可调用';
				missing.push(item + '/constructor');
			}

			if (target) {
				sniff(attributes, target, item);
			} else {
				dt.className = 'missing';
				dt.title = '接口不存或无实例';
				missing.push(item + '/*');
			}
		});

		console.log(missing.join('\n'));
		counter.nodeValue = (included / count * 100).toFixed(2) + '% Support';
		title.appendChild(counter);
	};

	var loader = function (filePath, title) {
		var script = document.createElement('script');
		var title = document.getElementById('title');
		var text = document.createTextNode(params.title);

		if (filePath && title) {
			title.insertBefore(text, title.firstChild);

			script.setAttribute('src', params.file);
			script.setAttribute('charset', 'utf-8');
			document.body.insertBefore(script, document.body.lastChild);
		}
	};

	window.sniffer = sniffer;
	loader(params.file, params.title);
}());