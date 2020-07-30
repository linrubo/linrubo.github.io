// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {
		// IE 10
		"HTMLDocument": function () {
			return document;
		},
		// IE 8
		"HTMLElement": function () {
			return document.createElement("div");
		}
	};

	var interfaces = {
		"HTMLDocument": [
			"activeElement",
			"body",
			"cookie",
			"currentScript",
			"defaultView",
			"designMode",
			"dir",
			"domain",
			"embeds",
			"forms",
			"head",
			"images",
			"lastModified",
			"links",
			"location",
			"onreadystatechange",
			"plugins",
			"readyState",
			"referrer",
			"scripts",
			"title",
			"close",
			"execCommand",
			"getElementsByName",
			"hasFocus",
			"open",
			"queryCommandEnabled",
			"queryCommandIndeterm",
			"queryCommandState",
			"queryCommandSupported",
			"queryCommandValue",
			"write",
			"writeln"
		],
		"HTMLElement": [
			"accessKey",
			"accessKeyLabel",
			"autocapitalize",
			"autofocus",
			"dataset",
			"dir",
			"draggable",
			"hidden",
			"innerText",
			"lang",
			"nonce",
			"spellcheck",
			"tabIndex",
			"title",
			"translate",
			"attachInternals",
			"blur",
			"click",
			"focus"
		]
	};

	sniffer(interfaces, instances);
}());