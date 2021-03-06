// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {
		"Global": function () {
			return window;
		},
		"TypedArray": function () {
			return window.Int8Array;
		},
		"Generator": function () {
			return function *demon() {};
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
			"assign",
			"create",
			"defineProperties",
			"defineProperty",
			"entries",
			"freeze",
			"getOwnPropertyDescriptor",
			"getOwnPropertyDescriptors",
			"getOwnPropertyNames",
			"getOwnPropertySymbols",
			"getPrototypeOf",
			"is",
			"isExtensible",
			"isFrozen",
			"isSealed",
			"keys",
			"preventExtensions",
			"seal",
			"setPrototypeOf",
			"values",
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
			"length",
			"constructor",
			"apply",
			"bind",
			"call",
			"toString",
			"length",
			"name",
			"prototype"
		],
		"Boolean": [
			"prototype",
			"constructor",
			"toString",
			"valueOf"
		],
		"Symbol": [
			"prototype",
			"for",
			"hasInstance",
			"isConcatSpreadable",
			"iterator",
			"keyFor",
			"match",
			"replace",
			"search",
			"species",
			"split",
			"toPrimitive",
			"toStringTag",
			"unscopables",
			"constructor",
			"toString",
			"valueOf"
		],
		"Error": [
			"prototype",
			"constructor",
			"message",
			"name",
			"toString"
		],
		"Number": [
			"EPSILON",
			"MAX_SAFE_INTEGER",
			"MAX_VALUE",
			"MIN_SAFE_INTEGER",
			"MIN_VALUE",
			"NEGATIVE_INFINITY",
			"NaN",
			"POSITIVE_INFINITY",
			"prototype",
			"isFinite",
			"isInteger",
			"isNaN",
			"isSafeInteger",
			"parseFloat",
			"parseInt",
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
			"acosh",
			"asin",
			"asinh",
			"atan",
			"atan2",
			"atanh",
			"cbrt",
			"ceil",
			"clz32",
			"cos",
			"cosh",
			"exp",
			"expm1",
			"floor",
			"fround",
			"hypot",
			"imul",
			"log",
			"log10",
			"log1p",
			"log2",
			"max",
			"min",
			"pow",
			"random",
			"round",
			"sign",
			"sin",
			"sinh",
			"sqrt",
			"tan",
			"tanh",
			"trunc"
		],
		"Date": [
			"prototype",
			"UTC",
			"now",
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
			"toISOString",
			"toJSON",
			"toLocaleDateString",
			"toLocaleString",
			"toLocaleTimeString",
			"toString",
			"toTimeString",
			"toUTCString",
			"valueOf"
		],
		"String": [
			"prototype",
			"fromCharCode",
			"fromCodePoint",
			"raw",
			"constructor",
			"charAt",
			"charCodeAt",
			"codePointAt",
			"concat",
			"endsWith",
			"includes",
			"indexOf",
			"lastIndexOf",
			"localeCompare",
			"match",
			"normalize",
			"padEnd",
			"padStart",
			"repeat",
			"replace",
			"search",
			"slice",
			"split",
			"startsWith",
			"substring",
			"toLocaleLowerCase",
			"toLocaleUpperCase",
			"toLowerCase",
			"toString",
			"toUpperCase",
			"trim",
			"valueOf",
			"length"
		],
		"RegExp": [
			"prototype",
			"constructor",
			"flags",
			"global",
			"ignoreCase",
			"multiline",
			"source",
			"sticky",
			"unicode",
			"exec",
			"test",
			"toString",
			"lastIndex"
		],
		"Array": [
			"prototype",
			"from",
			"isArray",
			"of",
			"constructor",
			"concat",
			"copyWithin",
			"entries",
			"every",
			"fill",
			"filter",
			"find",
			"findIndex",
			"forEach",
			"includes",
			"indexOf",
			"join",
			"keys",
			"lastIndexOf",
			"map",
			"pop",
			"push",
			"reduce",
			"reduceRight",
			"reverse",
			"shift",
			"slice",
			"some",
			"sort",
			"splice",
			"toLocaleString",
			"toString",
			"unshift",
			"values",
			"length"
		],
		"TypedArray": [
			"prototype",
			"BYTES_PER_ELEMENT",
			"constructor",
			"BYTES_PER_ELEMENT"
		],
		"Map": [
			"prototype",
			"constructor",
			"size",
			"clear",
			"delete",
			"entries",
			"forEach",
			"get",
			"has",
			"keys",
			"set",
			"values"
		],
		"Set": [
			"prototype",
			"constructor",
			"size",
			"add",
			"clear",
			"delete",
			"entries",
			"forEach",
			"has",
			"keys",
			"values"
		],
		"WeakMap": [
			"prototype",
			"constructor",
			"delete",
			"get",
			"has",
			"set"
		],
		"WeakSet": [
			"prototype",
			"constructor",
			"add",
			"delete",
			"has"
		],
		"ArrayBuffer": [
			"prototype",
			"isView",
			"constructor",
			"byteLength",
			"slice"
		],
		"SharedArrayBuffer": [
			"prototype",
			"constructor",
			"byteLength",
			"slice"
		],
		"DataView": [
			"prototype",
			"constructor",
			"buffer",
			"byteLength",
			"byteOffset",
			"getFloat32",
			"getFloat64",
			"getInt8",
			"getInt16",
			"getInt32",
			"getUint8",
			"getUint16",
			"getUint32",
			"setFloat32",
			"setFloat64",
			"setInt8",
			"setInt16",
			"setInt32",
			"setUint8",
			"setUint16",
			"setUint32"
		],
		"Atomics": [
			"add",
			"and",
			"compareExchange",
			"exchange",
			"isLockFree",
			"load",
			"or",
			"store",
			"sub",
			"wait",
			"wake",
			"xor"
		],
		"JSON": [
			"parse",
			"stringify"
		],
		"Generator": [
			"constructor",
			"next",
			"return",
			"throw"
		],
		"Promise": [
			"prototype",
			"all",
			"race",
			"reject",
			"resolve",
			"constructor",
			"catch",
			"then"
		],
		"Reflect": [
			"apply",
			"construct",
			"defineProperty",
			"deleteProperty",
			"get",
			"getOwnPropertyDescriptor",
			"getPrototypeOf",
			"has",
			"isExtensible",
			"ownKeys",
			"preventExtensions",
			"set",
			"setPrototypeOf"
		],
		"Proxy": [
			"revocable"
		],
		"Arguments": [
			"callee",
			"length"
		]
	};

	sniffer(interfaces, instances);
}());