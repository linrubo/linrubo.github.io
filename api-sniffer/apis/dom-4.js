// Author:
// E-mail:

(function () {
	'use strict';

	var instances = {
		"NonElementParentNode": function () {
			var result;
			if ('Document' in window) {
				result = Document.prototype;
			} else {
				result = document;
			}
			return result;
		},
		"ParentNode": function () {
			var result;
			if ('Element' in window) {
				result = Element.prototype;
			} else {
				result = document.createElement('div');
			}
			return result;
		},
		"NonDocumentTypeChildNode": function () {
			var result;
			if ('Element' in window) {
				result = Element.prototype;
			} else {
				result = document.createElement('div');
			}
			return result;
		},
		"ChildNode": function () {
			var result;
			if ('Element' in window) {
				result = Element.prototype;
			} else {
				result = document.createElement('div');
			}
			return result;
		},
		// IE 11
		"EventTarget": function () {
			return this['Node']();
		},
		// "AbortController": null,
		// "AbortSignal": null,
		// IE 10
		// "MutationObserver": null,
		// "MutationRecord": null,
		// IE 9
		// "DOMTokenList": null,
		// IE8
		// "CustomEvent": null,
		"Node": function () {
			var result;
			if ('Element' in window) {
				result = Element.prototype;
			} else {
				result = document.createElement('div');
			}
			return result;
		},
		"Document": function () {
			return document;
		},
		"DocumentType": function () {
			return document.doctype;
		} ,
		"CharacterData": function () {
			return document.createTextNode('text');
		}
		// "Range": null,
		// "NodeIterator": null,
		// "TreeWalker": null,
		// "NodeFilter": null
	};

	var interfaces = {
		"Event": [
			"NONE",
			"CAPTURING_PHASE",
			"AT_TARGET",
			"BUBBLING_PHASE",
			"bubbles",
			"cancelable",
			"composed",
			"currentTarget",
			"defaultPrevented",
			"eventPhase",
			"isTrusted",
			"target",
			"timeStamp",
			"type",
			"composedPath",
			"preventDefault",
			"stopImmediatePropagation",
			"stopPropagation"
		],
		"CustomEvent": [
			"detail",
			"initCustomEvent"
		],
		"EventTarget": [
			"addEventListener",
			"dispatchEvent",
			"removeEventListener"
		],
		"AbortController": [
			"signal",
			"abort"
		],
		"AbortSignal": [
			"aborted",
			"onabort"
		],
		"NonElementParentNode": [
			"getElementById"
		],
		"ParentNode": [
			"childElementCount",
			"children",
			"firstElementChild",
			"lastElementChild",
			"append",
			"prepend",
			"querySelector",
			"querySelectorAll"
		],
		"NonDocumentTypeChildNode": [
			"nextElementSibling",
			"previousElementSibling"
		],
		"ChildNode": [
			"after",
			"before",
			"remove",
			"replaceWith"
		],
		"NodeList": [
			"length",
			"item"
		],
		"HTMLCollection": [
			"length",
			"item",
			"namedItem"
		],
		"MutationObserver": [
			"disconnect",
			"observe",
			"takeRecords"
		],
		"MutationRecord": [
			"addedNodes",
			"attributeName",
			"attributeNamespace",
			"nextSibling",
			"oldValue",
			"previousSibling",
			"removedNodes",
			"target",
			"type"
		],
		"Node": [
			"ELEMENT_NODE",
			"ATTRIBUTE_NODE",
			"TEXT_NODE",
			"CDATA_SECTION_NODE",
			"PROCESSING_INSTRUCTION_NODE",
			"COMMENT_NODE",
			"DOCUMENT_NODE",
			"DOCUMENT_TYPE_NODE",
			"DOCUMENT_FRAGMENT_NODE",
			"DOCUMENT_POSITION_DISCONNECTED",
			"DOCUMENT_POSITION_PRECEDING",
			"DOCUMENT_POSITION_FOLLOWING",
			"DOCUMENT_POSITION_CONTAINS",
			"DOCUMENT_POSITION_CONTAINED_BY",
			"DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",
			"baseURI",
			"childNodes",
			"firstChild",
			"isConnected",
			"lastChild",
			"nextSibling",
			"nodeName",
			"nodeType",
			"nodeValue",
			"ownerDocument",
			"parentElement",
			"parentNode",
			"previousSibling",
			"textContent",
			"appendChild",
			"cloneNode",
			"compareDocumentPosition",
			"contains",
			"getRootNode",
			"hasChildNodes",
			"insertBefore",
			"isDefaultNamespace",
			"isEqualNode",
			"lookupNamespaceURI",
			"lookupPrefix",
			"normalize",
			"removeChild",
			"replaceChild"
		],
		"Document": [
			"URL",
			"characterSet",
			"compatMode",
			"contentType",
			"doctype",
			"documentElement",
			"documentURI",
			"implementation",
			"origin",
			"adoptNode",
			"createAttribute",
			"createAttributeNS",
			"createCDATASection",
			"createComment",
			"createDocumentFragment",
			"createElement",
			"createElementNS",
			"createEvent",
			"createNodeIterator",
			"createProcessingInstruction",
			"createRange",
			"createTextNode",
			"createTreeWalker",
			"getElementsByClassName",
			"getElementsByTagName",
			"getElementsByTagNameNS",
			"importNode"
		],
		"DOMImplementation": [
			"createDocument",
			"createDocumentType",
			"createHTMLDocument",
			"hasFeature"
		],
		"DocumentType": [
			"name",
			"publicId",
			"systemId"
		],
		"Element": [
			"attributes",
			"classList",
			"className",
			"id",
			"localName",
			"namespaceURI",
			"prefix",
			"shadowRoot",
			"slot",
			"tagName",
			"attachShadow",
			"closest",
			"getAttribute",
			"getAttributeNS",
			"getAttributeNames",
			"getAttributeNode",
			"getAttributeNodeNS",
			"getElementsByClassName",
			"getElementsByTagName",
			"getElementsByTagNameNS",
			"hasAttribute",
			"hasAttributeNS",
			"hasAttributes",
			"matches",
			"removeAttribute",
			"removeAttributeNS",
			"removeAttributeNode",
			"setAttribute",
			"setAttributeNS",
			"setAttributeNode",
			"setAttributeNodeNS",
			"toggleAttribute"
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
		"Attr": [
			"localName",
			"name",
			"namespaceURI",
			"ownerElement",
			"prefix",
			"specified",
			"value"
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
		"Text": [
			"wholeText",
			"splitText"
		],
		"Range": [
			"START_TO_START",
			"START_TO_END",
			"END_TO_END",
			"END_TO_START",
			"collapsed",
			"commonAncestorContainer",
			"endContainer",
			"endOffset",
			"startContainer",
			"startOffset",
			"cloneContents",
			"cloneRange",
			"collapse",
			"compareBoundaryPoints",
			"comparePoint",
			"deleteContents",
			"detach",
			"extractContents",
			"insertNode",
			"intersectsNode",
			"isPointInRange",
			"selectNode",
			"selectNodeContents",
			"setEnd",
			"setEndAfter",
			"setEndBefore",
			"setStart",
			"setStartAfter",
			"setStartBefore",
			"surroundContents"
		],
		"NodeIterator": [
			"filter",
			"pointerBeforeReferenceNode",
			"referenceNode",
			"root",
			"whatToShow",
			"detach",
			"nextNode",
			"previousNode"
		],
		"TreeWalker": [
			"currentNode",
			"filter",
			"root",
			"whatToShow",
			"firstChild",
			"lastChild",
			"nextNode",
			"nextSibling",
			"parentNode",
			"previousNode",
			"previousSibling"
		],
		"NodeFilter": [
			"FILTER_ACCEPT",
			"FILTER_REJECT",
			"FILTER_SKIP",
			"SHOW_ALL",
			"SHOW_ELEMENT",
			"SHOW_ATTRIBUTE",
			"SHOW_TEXT",
			"SHOW_CDATA_SECTION",
			"SHOW_PROCESSING_INSTRUCTION",
			"SHOW_COMMENT",
			"SHOW_DOCUMENT",
			"SHOW_DOCUMENT_TYPE",
			"SHOW_DOCUMENT_FRAGMENT"
		],
		"DOMTokenList": [
			"length",
			"add",
			"contains",
			"item",
			"remove",
			"replace",
			"supports",
			"toggle"
		]
	};

	sniffer(interfaces, instances);
}());