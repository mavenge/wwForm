(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>', notIn: ['string'] }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '(', close: ')' },\r\n        { open: '[', close: ']' },\r\n        { open: '`', close: '`' },\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp(\"^\\\\s*<!--\\\\s*#?region\\\\b.*-->\"),\r\n            end: new RegExp(\"^\\\\s*<!--\\\\s*#?endregion\\\\b.*-->\")\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.rst',\r\n    control: /[\\\\`*_\\[\\]{}()#+\\-\\.!]/,\r\n    escapes: /\\\\(?:@control)/,\r\n    empty: [\r\n        'area', 'base', 'basefont', 'br', 'col', 'frame',\r\n        'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param'\r\n    ],\r\n    alphanumerics: /[A-Za-z0-9]/,\r\n    alphanumericsplus: /[A-Za-z0-9-_+:.]/,\r\n    simpleRefNameWithoutBq: /(?:@alphanumerics@alphanumericsplus*@alphanumerics)+|(?:@alphanumerics+)/,\r\n    simpleRefName: /(?:`@simpleRefNameWithoutBq`|@simpleRefNameWithoutBq)/,\r\n    phrase: /@simpleRefName(?:\\s@simpleRefName)*/,\r\n    citationName: /[A-Za-z][A-Za-z0-9-_.]*/,\r\n    blockLiteralStart: /(?:[!\"#$%&'()*+,-./:;<=>?@\\[\\]^_`{|}~]|[\\s])/,\r\n    precedingChars: /(?:[ -:/'\"<([{])/,\r\n    followingChars: /(?:[ -.,:;!?/'\")\\]}>]|$)/,\r\n    punctuation: /(=|-|~|`|#|\"|\\^|\\+|\\*|:|\\.|'|_|\\+)/,\r\n    tokenizer: {\r\n        root: [\r\n            //sections\r\n            [/^(@punctuation{3,}$){1,1}?/, 'keyword'],\r\n            //line-blocks\r\n            //No rules on it\r\n            //bullet-lists\r\n            [/^\\s*([\\*\\-+‣•]|[a-zA-Z0-9]+\\.|\\([a-zA-Z0-9]+\\)|[a-zA-Z0-9]+\\))\\s/, 'keyword'],\r\n            //literal-blocks\r\n            [/([ ]::)\\s*$/, 'keyword', '@blankLineOfLiteralBlocks'],\r\n            [/(::)\\s*$/, 'keyword', '@blankLineOfLiteralBlocks'],\r\n            { include: '@tables' },\r\n            { include: '@explicitMarkupBlocks' },\r\n            { include: '@inlineMarkup' },\r\n        ],\r\n        explicitMarkupBlocks: [\r\n            //citations\r\n            { include: '@citations' },\r\n            //footnotes\r\n            { include: '@footnotes' },\r\n            //directives\r\n            [/^(\\.\\.\\s)(@simpleRefName)(::\\s)(.*)$/, [{ token: '', next: 'subsequentLines' }, 'keyword', '', '']],\r\n            //hyperlink-targets\r\n            [/^(\\.\\.)(\\s+)(_)(@simpleRefName)(:)(\\s+)(.*)/, [{ token: '', next: 'hyperlinks' }, '', '', 'string.link', '', '', 'string.link']],\r\n            //anonymous-hyperlinks\r\n            [/^((?:(?:\\.\\.)(?:\\s+))?)(__)(:)(\\s+)(.*)/, [{ token: '', next: 'subsequentLines' }, '', '', '', 'string.link']],\r\n            [/^(__\\s+)(.+)/, ['', 'string.link']],\r\n            //substitution-definitions\r\n            [/^(\\.\\.)( \\|)([^| ]+[^|]*[^| ]*)(\\| )(@simpleRefName)(:: .*)/, [{ token: '', next: 'subsequentLines' }, '', 'string.link', '', 'keyword', ''], '@rawBlocks'],\r\n            [/(\\|)([^| ]+[^|]*[^| ]*)(\\|_{0,2})/, ['', 'string.link', '']],\r\n            //comments\r\n            [/^(\\.\\.)([ ].*)$/, [{ token: '', next: '@comments' }, 'comment']],\r\n        ],\r\n        inlineMarkup: [\r\n            { include: '@citationsReference' },\r\n            { include: '@footnotesReference' },\r\n            //hyperlink-references\r\n            [/(@simpleRefName)(_{1,2})/, ['string.link', '']],\r\n            //embedded-uris-and-aliases\r\n            [/(`)([^<`]+\\s+)(<)(.*)(>)(`)(_)/, ['', 'string.link', '', 'string.link', '', '', '']],\r\n            //emphasis\r\n            [/\\*\\*([^\\\\*]|\\*(?!\\*))+\\*\\*/, 'strong'],\r\n            [/\\*[^*]+\\*/, 'emphasis'],\r\n            //inline-literals\r\n            [/(``)((?:[^`]|\\`(?!`))+)(``)/, ['', 'keyword', '']],\r\n            [/(__\\s+)(.+)/, ['', 'keyword']],\r\n            //interpreted-text\r\n            [/(:)((?:@simpleRefNameWithoutBq)?)(:`)([^`]+)(`)/, ['', 'keyword', '', '', '']],\r\n            [/(`)([^`]+)(`:)((?:@simpleRefNameWithoutBq)?)(:)/, ['', '', '', 'keyword', '']],\r\n            [/(`)([^`]+)(`)/, ''],\r\n            //inline-internal-targets\r\n            [/(_`)(@phrase)(`)/, ['', 'string.link', '']],\r\n        ],\r\n        citations: [\r\n            [/^(\\.\\.\\s+\\[)((?:@citationName))(\\]\\s+)(.*)/, [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']],\r\n        ],\r\n        citationsReference: [\r\n            [/(\\[)(@citationName)(\\]_)/, ['', 'string.link', '']],\r\n        ],\r\n        footnotes: [\r\n            [/^(\\.\\.\\s+\\[)((?:[0-9]+))(\\]\\s+.*)/, [{ token: '', next: '@subsequentLines' }, 'string.link', '']],\r\n            [/^(\\.\\.\\s+\\[)((?:#@simpleRefName?))(\\]\\s+)(.*)/, [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']],\r\n            [/^(\\.\\.\\s+\\[)((?:\\*))(\\]\\s+)(.*)/, [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']],\r\n        ],\r\n        footnotesReference: [\r\n            [/(\\[)([0-9]+)(\\])(_)/, ['', 'string.link', '', '']],\r\n            [/(\\[)(#@simpleRefName?)(\\])(_)/, ['', 'string.link', '', '']],\r\n            [/(\\[)(\\*)(\\])(_)/, ['', 'string.link', '', '']]\r\n        ],\r\n        blankLineOfLiteralBlocks: [\r\n            [/^$/, '', '@subsequentLinesOfLiteralBlocks'],\r\n            [/^.*$/, '', '@pop'],\r\n        ],\r\n        subsequentLinesOfLiteralBlocks: [\r\n            [/(@blockLiteralStart+)(.*)/, ['keyword', '']],\r\n            [/^(?!blockLiteralStart)/, '', '@popall']\r\n        ],\r\n        subsequentLines: [\r\n            [/^[\\s]+.*/, ''],\r\n            [/^(?!\\s)/, '', '@pop'],\r\n        ],\r\n        hyperlinks: [\r\n            [/^[\\s]+.*/, 'string.link'],\r\n            [/^(?!\\s)/, '', '@pop'],\r\n        ],\r\n        comments: [\r\n            [/^[\\s]+.*/, 'comment'],\r\n            [/^(?!\\s)/, '', '@pop'],\r\n        ],\r\n        tables: [\r\n            [/\\+-[+-]+/, 'keyword'],\r\n            [/\\+=[+=]+/, 'keyword'],\r\n        ],\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js?");

/***/ })

}]);