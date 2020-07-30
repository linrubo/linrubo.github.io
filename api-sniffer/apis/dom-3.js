// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {
		"DocumentEvent": function () {
			return document;
		},
		// IE 11
		"EventTarget": function () {
			return this['Node']();
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
			return document.createTextNode('test');
		}
	};

	var interfaces = {
		"DOMImplementation": [
			"createDocument",
			"createDocumentType",
			// "getFeature",
			"hasFeature"
		],
		"Document": [
			"doctype",
			"documentElement",
			"documentURI",
			// "domConfig",
			"implementation",
			// "inputEncoding",
			// "strictErrorChecking",
			// "xmlEncoding",
			// "xmlStandalone",
			// "xmlVersion",
			"adoptNode",
			"createAttribute",
			"createAttributeNS",
			"createCDATASection",
			"createComment",
			"createDocumentFragment",
			"createElement",
			"createElementNS",
			// "createEntityReference",
			"createProcessingInstruction",
			"createTextNode",
			// "getElementById",
			"getElementsByTagName",
			"getElementsByTagNameNS",
			"importNode",
			// "normalizeDocument",
			// "renameNode"
		],
		"Node": [
			"ELEMENT_NODE",
			"ATTRIBUTE_NODE",
			"TEXT_NODE",
			"CDATA_SECTION_NODE",
			// "ENTITY_REFERENCE_NODE",
			// "ENTITY_NODE",
			"PROCESSING_INSTRUCTION_NODE",
			"COMMENT_NODE",
			"DOCUMENT_NODE",
			"DOCUMENT_TYPE_NODE",
			"DOCUMENT_FRAGMENT_NODE",
			// "NOTATION_NODE",
			"DOCUMENT_POSITION_DISCONNECTED",
			"DOCUMENT_POSITION_PRECEDING",
			"DOCUMENT_POSITION_FOLLOWING",
			"DOCUMENT_POSITION_CONTAINS",
			"DOCUMENT_POSITION_CONTAINED_BY",
			"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",
			// "attributes",
			"baseURI",
			"childNodes",
			"firstChild",
			"lastChild",
			// "localName",
			// "namespaceURI",
			"nextSibling",
			"nodeName",
			"nodeType",
			"nodeValue",
			"ownerDocument",
			"parentNode",
			// "prefix",
			"previousSibling",
			"textContent",
			"appendChild",
			"cloneNode",
			"compareDocumentPosition",
			// "getFeature",
			// "getUserData",
			// "hasAttributes",
			"hasChildNodes",
			"insertBefore",
			"isDefaultNamespace",
			"isEqualNode",
			// "isSameNode",
			// "isSupported",
			"lookupNamespaceURI",
			"lookupPrefix",
			"normalize",
			"removeChild",
			"replaceChild",
			// "setUserData"
		],
		"NodeList": [
			"length",
			"item"
		],
		"NamedNodeMap": [
			"length",
			"getNamedItem",
			"getNamedItemNS",
			"item",
			"removeNamedItem",
			"removeNamedItemNS",
			"setNamedItem",
			"setNamedItemNS"
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
			// "isId",
			"name",
			"ownerElement",
			// "schemaTypeInfo",
			"specified",
			"value"
		],
		"Element": [
			// "schemaTypeInfo",
			"tagName",
			"getAttribute",
			"getAttributeNS",
			"getAttributeNode",
			"getAttributeNodeNS",
			"getElementsByTagName",
			"getElementsByTagNameNS",
			"hasAttribute",
			"hasAttributeNS",
			"removeAttribute",
			"removeAttributeNS",
			"removeAttributeNode",
			"setAttribute",
			"setAttributeNS",
			"setAttributeNode",
			"setAttributeNodeNS",
			// "setIdAttribute",
			// "setIdAttributeNS",
			// "setIdAttributeNode"
		],
		"Text": [
			// "isElementContentWhitespace",
			"wholeText",
			// "replaceWholeText",
			"splitText"
		],
		"EventTarget": [
			"addEventListener",
			"dispatchEvent",
			"removeEventListener"
		],
		"Event": [
			"bubbles",
			"cancelable",
			"currentTarget",
			"defaultPrevented",
			"eventPhase",
			"target",
			"timeStamp",
			"type",
			"initEvent",
			"preventDefault",
			"stopImmediatePropagation",
			"stopPropagation"
		],
		"DocumentEvent": [
			"createEvent"
		]
	};

	sniffer(interfaces, instances);
}());