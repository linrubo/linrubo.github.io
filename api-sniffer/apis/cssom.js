// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {
		"LinkStyle": function () {
			return document.getElementsByTagName('style').item(0);
		},
		"StyleSheet": function () {
			return document.styleSheets.item(0);
		},
		// IE 8
		"Document": function () {
			return document;
		},
		"CSSRule": function () {
			var styleSheet = this["StyleSheet"]();
			return (styleSheet.cssRules || styleSheet.rules).item(0);
		}
	};

	var interfaces = {
		"StyleSheet": [
			"disabled",
			"href",
			"media",
			"ownerNode",
			"parentStyleSheet",
			"title",
			"type"
		],
		"CSSStyleSheet": [
			"cssRules",
			"ownerRule",
			"deleteRule",
			"insertRule"
		],
		"StyleSheetList": [
			"length",
			"item"
		],
		"Document": [
			"styleSheets"
		],
		"LinkStyle": [
			"sheet"
		],
		"CSSRuleList": [
			"length",
			"item"
		],
		"CSSRule": [
			"cssText",
			"parentRule",
			"parentStyleSheet",
			"type"
		],
		"CSSStyleRule": [
			"selectorText",
			"style"
		],
		"CSSImportRule": [
			"href",
			"media",
			"styleSheet"
		],
		"CSSGroupingRule": [
			"cssRules",
			"insertRule",
			"deleteRule"
		]
	};

	sniffer(interfaces, instances);
}());