// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {
		// IE 10
		"HTMLDocument": function () {
			return this['Document']();
		},
		// IE 8
		"Document": function () {
			return document;
		},
		"Node": function () {
			var result;
			if ('Element' in window) {
				result = Element.prototype;
			} else {
				result = document.createElement('div');
			}
			return result;
		},
		"CharacterData": function () {
			return document.createTextNode('text');
		},
		"HTMLElement": function () {
			return this['Node']();
		}
	};
	var interfaces = {
		"DOMImplementation": [
			"hasFeature"
		],
		"Document": [
			"doctype",
			"documentElement",
			"implementation",
			"createAttribute",
			"createCDATASection",
			"createComment",
			"createDocumentFragment",
			"createElement",
			// "createEntityReference",
			"createProcessingInstruction",
			"createTextNode",
			"getElementsByTagName"
		],
		"Node": [
			"ELEMENT_NODE",
			"ATTRIBUTE_NODE",
			"TEXT_NODE",
			"CDATA_SECTION_NODE",
			"ENTITY_REFERENCE_NODE",
			"ENTITY_NODE",
			"PROCESSING_INSTRUCTION_NODE",
			"COMMENT_NODE",
			"DOCUMENT_NODE",
			"DOCUMENT_TYPE_NODE",
			"DOCUMENT_FRAGMENT_NODE",
			"NOTATION_NODE",
			// "attributes",
			"childNodes",
			"firstChild",
			"lastChild",
			"nextSibling",
			"nodeName",
			"nodeType",
			"nodeValue",
			"ownerDocument",
			"parentNode",
			"previousSibling",
			"appendChild",
			"cloneNode",
			"hasChildNodes",
			"insertBefore",
			"removeChild",
			"replaceChild"
		],
		"NodeList": [
			"length",
			"item"
		],
		"NamedNodeMap": [
			"length",
			"getNamedItem",
			"item",
			"removeNamedItem",
			"setNamedItem"
		],
		"CharacterData": [
			"data",
			"length",
			"appendData",
			"deleteData",
			"insertData",
			"replaceData",
			"substringData"
		],
		"Attr": [
			"name",
			"specified",
			"value"
		],
		"Element": [
			"tagName",
			"getAttribute",
			"getAttributeNode",
			"getElementsByTagName",
			"normalize",
			"removeAttribute",
			"removeAttributeNode",
			"setAttribute",
			"setAttributeNode"
		],
		"Text": [
			"splitText"
		],
		"HTMLCollection": [
			"length",
			"item",
			"namedItem"
		],
		"HTMLDocument": [
			"URL",
			"anchors",
			"applets",
			"body",
			"cookie",
			"domain",
			"forms",
			"images",
			"links",
			"referrer",
			"title",
			"close",
			"getElementById",
			"getElementsByName",
			"open",
			"write",
			"writeln"
		],
		"HTMLElement": [
			"className",
			"dir",
			"id",
			"lang",
			"title"
		]
	};

	sniffer(interfaces, instances);
}());