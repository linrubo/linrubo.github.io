// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {
		"Global": function () {
			return window;
		},
		"Arguments": function () {
			return arguments;
		}
	};

	var interfaces = {
		"Global": [
			"Infinity",
			"NaN",
			"escape",
			"eval",
			"isFinite",
			"isNaN",
			"parseFloat",
			"parseInt",
			"unescape"
		],
		"Object": [
			"prototype",
			"constructor",
			"toString",
			"valueOf"
		],
		"Function": [
			"prototype",
			"length",
			"constructor",
			"toString",
			"length",
			"prototype"
		],
		"Array": [
			"prototype",
			"length",
			"constructor",
			"join",
			"reverse",
			"sort",
			"toString",
			"length"
		],
		"String": [
			"prototype",
			"fromCharCode",
			"constructor",
			"charAt",
			"charCodeAt",
			"indexOf",
			"lastIndexOf",
			"split",
			"substring",
			"toLowerCase",
			"toString",
			"toUpperCase",
			"valueOf",
			"length"
		],
		"Boolean": [
			"prototype",
			"constructor",
			"toString",
			"valueOf"
		],
		"Number": [
			"MAX_VALUE",
			"MIN_VALUE",
			"NEGATIVE_INFINITY",
			"NaN",
			"POSITIVE_INFINITY",
			"prototype",
			"constructor",
			"toString",
			"valueOf"
		],
		"Math": [
			"E",
			"LN10",
			"LN2",
			"LOG10E",
			"LOG2E",
			"PI",
			"SQRT1_2",
			"SQRT2",
			"abs",
			"acos",
			"asin",
			"atan",
			"atan2",
			"ceil",
			"cos",
			"exp",
			"floor",
			"log",
			"max",
			"min",
			"pow",
			"random",
			"round",
			"sin",
			"sqrt",
			"tan"
		],
		"Date": [
			"prototype",
			"UTC",
			"parse",
			"constructor",
			"getDate",
			"getDay",
			"getFullYear",
			"getHours",
			"getMilliseconds",
			"getMinutes",
			"getMonth",
			"getSeconds",
			"getTime",
			"getTimezoneOffset",
			"getUTCDate",
			"getUTCDay",
			"getUTCFullYear",
			"getUTCHours",
			"getUTCMilliseconds",
			"getUTCMinutes",
			"getUTCMonth",
			"getUTCSeconds",
			"setDate",
			"setFullYear",
			"setHours",
			"setMilliseconds",
			"setMinutes",
			"setMonth",
			"setSeconds",
			"setTime",
			"setUTCDate",
			"setUTCFullYear",
			"setUTCHours",
			"setUTCMilliseconds",
			"setUTCMinutes",
			"setUTCMonth",
			"setUTCSeconds",
			"toDateString",
			"toString",
			"toUTCString",
			"valueOf"
		],
		"Arguments": [
			"callee",
			"length"
		]
	};

	sniffer(interfaces, instances);
}());