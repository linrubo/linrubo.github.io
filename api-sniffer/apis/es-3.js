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
			"undefined",
			"decodeURI",
			"decodeURIComponent",
			"encodeURI",
			"encodeURIComponent",
			"eval",
			"isFinite",
			"isNaN",
			"parseFloat",
			"parseInt"
		],
		"Object": [
			"prototype",
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString",
			"toString",
			"valueOf"
		],
		"Function": [
			"prototype",
			"constructor",
			"apply",
			"call",
			"toString",
			"length",
			"prototype"
		],
		"Array": [
			"prototype",
			"constructor",
			"concat",
			"join",
			"pop",
			"push",
			"reverse",
			"shift",
			"slice",
			"sort",
			"splice",
			"toLocaleString",
			"toString",
			"unshift",
			"length"
		],
		"String": [
			"prototype",
			"fromCharCode",
			"constructor",
			"charAt",
			"charCodeAt",
			"concat",
			"indexOf",
			"lastIndexOf",
			"localeCompare",
			"match",
			"replace",
			"search",
			"slice",
			"split",
			"substring",
			"toLocaleLowerCase",
			"toLocaleUpperCase",
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
			"toExponential",
			"toFixed",
			"toLocaleString",
			"toPrecision",
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
			"toLocaleDateString",
			"toLocaleString",
			"toLocaleTimeString",
			"toString",
			"toTimeString",
			"toUTCString",
			"valueOf"
		],
		"RegExp": [
			"prototype",
			"constructor",
			"exec",
			"test",
			"toString",
			"global",
			"ignoreCase",
			"lastIndex",
			"multiline",
			"source"
		],
		"Error": [
			"prototype",
			"constructor",
			"message",
			"name",
			"toString"
		],
		"Arguments": [
			"callee",
			"length"
		]
	};

	sniffer(interfaces, instances);
}());