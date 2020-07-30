// Author:
// E-mail:

(function () {
	"use strict";

	var instances = {
		"HTMLDOMImplementation": function () {
			return document.implementation;
		},
		"AbstractView": function () {
			return window;
		},
		"DocumentView": function () {
			return this["Document"]();
		},
		"LinkStyle": function () {
			return document.getElementsByTagName("style").item(0);
		},
		"DocumentStyle": function () {
			return this["Document"]();
		},
		"ViewCSS": function () {
			return window;
		},
		"DocumentCSS": function () {
			return this["Document"]();
		},
		"DOMImplementationCSS": function () {
			return document.implementation;
		},
		"ElementCSSInlineStyle": function () {
			return document.createElement("div");
		},
		"DocumentEvent": function () {
			return this["Document"]();
		},
		"DocumentTraversal": function () {
			return this["Document"]();
		},
		"DocumentRange": function () {
			return this["Document"]();
		},
		// IE 11
		"EventTarget": function () {
			return this["Node"]();
		},
		// IE 10
		"HTMLDocument": function () {
			return this["Document"]();
		},
		// IE 8
		"Document": function () {
			return document;
		},
		"Node": function () {
			var result;
			if ("Element" in window) {
				result = Element.prototype;
			} else {
				result = document.createElement("div");
			}
			return result;
		},
		"CharacterData": function () {
			return document.createTextNode("text");
		},
		"HTMLElement": function () {
			return document.createElement("div");
		},
		"StyleSheet": function () {
			return document.styleSheets.item(0);
		},
		"CSSRule": function () {
			var styleSheet = this["StyleSheet"]();
			return (styleSheet.cssRules || styleSheet.rules).item(0);
		}
		// "UIEvent": null,
		// "MouseEvent": null,
		// "MutationEvent": null,
		// "NodeIterator": null,
		// "NodeFilter": null,
		// "TreeWalker": null,
		// "Range": null
	};

	var interfaces = {
		"DOMImplementation": [
			"createDocument",
			"createDocumentType",
			"hasFeature"
		],
		"Document": [
			"doctype",
			"documentElement",
			"implementation",
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
			"getElementById",
			"getElementsByTagName",
			"getElementsByTagNameNS",
			"importNode"
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
			"appendChild",
			"cloneNode",
			"hasChildNodes",
			"insertBefore",
			"normalize",
			"removeChild",
			"replaceChild",
			// "supports"
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
			"name",
			"ownerElement",
			"specified",
			"value"
		],
		"Element": [
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
			"setAttributeNodeNS"
		],
		"Text": [
			"splitText"
		],
		"HTMLDOMImplementation": [
			"createHTMLDocument"
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
		],
		"AbstractView": [
			"document"
		],
		"DocumentView": [
			"defaultView"
		],
		"StyleSheet": [
			"disabled",
			"href",
			"media",
			"ownerNode",
			"parentStyleSheet",
			"title",
			"type"
		],
		"StyleSheetList": [
			"length",
			"item"
		],
		"LinkStyle": [
			"sheet"
		],
		"DocumentStyle": [
			"styleSheets"
		],
		"CSSStyleSheet": [
			"cssRules",
			"ownerRule",
			"deleteRule",
			"insertRule"
		],
		"CSSRuleList": [
			"length",
			"item"
		],
		"CSSRule": [
			"UNKNOWN_RULE",
			"STYLE_RULE",
			"CHARSET_RULE",
			"IMPORT_RULE",
			"MEDIA_RULE",
			"FONT_FACE_RULE",
			"PAGE_RULE",
			"cssText",
			"parentRule",
			"parentStyleSheet",
			"type"
		],
		"CSSStyleRule": [
			"selectorText",
			"style"
		],
		"ViewCSS": [
			"getComputedStyle"
		],
		"ElementCSSInlineStyle": [
			"style"
		],
		"EventTarget": [
			"addEventListener",
			"dispatchEvent",
			"removeEventListener"
		],
		"Event": [
			"CAPTURING_PHASE",
			"AT_TARGET",
			"BUBBLING_PHASE",
			"bubbles",
			"cancelable",
			"currentTarget",
			"eventPhase",
			"target",
			"timeStamp",
			"type",
			"initEvent",
			"preventDefault",
			"stopPropagation"
		],
		"DocumentEvent": [
			"createEvent"
		],
		"UIEvent": [
			"detail",
			"view",
			"initUIEvent"
		],
		"MouseEvent": [
			"altKey",
			"button",
			"clientX",
			"clientY",
			"ctrlKey",
			"metaKey",
			"relatedTarget",
			"screenX",
			"screenY",
			"shiftKey",
			"initMouseEvent"
		],
		"MutationEvent": [
			"attrName",
			"newValue",
			"prevValue",
			"relatedNode",
			"initMutationEvent"
		],
		"NodeIterator": [
			// "expandEntityReferences",
			"filter",
			"root",
			"whatToShow",
			"detach",
			"nextNode",
			"previousNode"
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
			"SHOW_ENTITY_REFERENCE",
			"SHOW_ENTITY",
			"SHOW_PROCESSING_INSTRUCTION",
			"SHOW_COMMENT",
			"SHOW_DOCUMENT",
			"SHOW_DOCUMENT_TYPE",
			"SHOW_DOCUMENT_FRAGMENT",
			"SHOW_NOTATION"
			// "acceptNode"
		],
		"TreeWalker": [
			"currentNode",
			// "expandEntityReferences",
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
		"DocumentTraversal": [
			"createNodeIterator",
			"createTreeWalker"
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
			"deleteContents",
			"detach",
			"extractContents",
			"insertNode",
			"selectNode",
			"selectNodeContents",
			"setEnd",
			"setEndAfter",
			"setEndBefore",
			"setStart",
			"setStartAfter",
			"setStartBefore",
			"surroundContents",
			"toString"
		],
		"DocumentRange": [
			"createRange"
		]
	};

	sniffer(interfaces, instances);
}());