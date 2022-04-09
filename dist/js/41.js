(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/python/python.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/python/python.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\n// Allow for running under nodejs/requirejs in tests\r\nvar _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '#',\r\n        blockComment: ['\\'\\'\\'', '\\'\\'\\''],\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"', notIn: ['string'] },\r\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ],\r\n    onEnterRules: [\r\n        {\r\n            beforeText: new RegExp(\"^\\\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\\\s*$\"),\r\n            action: { indentAction: _monaco.languages.IndentAction.Indent }\r\n        }\r\n    ],\r\n    folding: {\r\n        offSide: true,\r\n        markers: {\r\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\r\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.python',\r\n    keywords: [\r\n        'and',\r\n        'as',\r\n        'assert',\r\n        'break',\r\n        'class',\r\n        'continue',\r\n        'def',\r\n        'del',\r\n        'elif',\r\n        'else',\r\n        'except',\r\n        'exec',\r\n        'finally',\r\n        'for',\r\n        'from',\r\n        'global',\r\n        'if',\r\n        'import',\r\n        'in',\r\n        'is',\r\n        'lambda',\r\n        'None',\r\n        'not',\r\n        'or',\r\n        'pass',\r\n        'print',\r\n        'raise',\r\n        'return',\r\n        'self',\r\n        'try',\r\n        'while',\r\n        'with',\r\n        'yield',\r\n        'int',\r\n        'float',\r\n        'long',\r\n        'complex',\r\n        'hex',\r\n        'abs',\r\n        'all',\r\n        'any',\r\n        'apply',\r\n        'basestring',\r\n        'bin',\r\n        'bool',\r\n        'buffer',\r\n        'bytearray',\r\n        'callable',\r\n        'chr',\r\n        'classmethod',\r\n        'cmp',\r\n        'coerce',\r\n        'compile',\r\n        'complex',\r\n        'delattr',\r\n        'dict',\r\n        'dir',\r\n        'divmod',\r\n        'enumerate',\r\n        'eval',\r\n        'execfile',\r\n        'file',\r\n        'filter',\r\n        'format',\r\n        'frozenset',\r\n        'getattr',\r\n        'globals',\r\n        'hasattr',\r\n        'hash',\r\n        'help',\r\n        'id',\r\n        'input',\r\n        'intern',\r\n        'isinstance',\r\n        'issubclass',\r\n        'iter',\r\n        'len',\r\n        'locals',\r\n        'list',\r\n        'map',\r\n        'max',\r\n        'memoryview',\r\n        'min',\r\n        'next',\r\n        'object',\r\n        'oct',\r\n        'open',\r\n        'ord',\r\n        'pow',\r\n        'print',\r\n        'property',\r\n        'reversed',\r\n        'range',\r\n        'raw_input',\r\n        'reduce',\r\n        'reload',\r\n        'repr',\r\n        'reversed',\r\n        'round',\r\n        'set',\r\n        'setattr',\r\n        'slice',\r\n        'sorted',\r\n        'staticmethod',\r\n        'str',\r\n        'sum',\r\n        'super',\r\n        'tuple',\r\n        'type',\r\n        'unichr',\r\n        'unicode',\r\n        'vars',\r\n        'xrange',\r\n        'zip',\r\n        'True',\r\n        'False',\r\n        '__dict__',\r\n        '__methods__',\r\n        '__members__',\r\n        '__class__',\r\n        '__bases__',\r\n        '__name__',\r\n        '__mro__',\r\n        '__subclasses__',\r\n        '__init__',\r\n        '__import__'\r\n    ],\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '[', close: ']', token: 'delimiter.bracket' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\r\n    ],\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@whitespace' },\r\n            { include: '@numbers' },\r\n            { include: '@strings' },\r\n            [/[,:;]/, 'delimiter'],\r\n            [/[{}\\[\\]()]/, '@brackets'],\r\n            [/@[a-zA-Z]\\w*/, 'tag'],\r\n            [/[a-zA-Z]\\w*/, {\r\n                    cases: {\r\n                        '@keywords': 'keyword',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }]\r\n        ],\r\n        // Deal with white space, including single and multi-line comments\r\n        whitespace: [\r\n            [/\\s+/, 'white'],\r\n            [/(^#.*$)/, 'comment'],\r\n            [/'''/, 'string', '@endDocString'],\r\n            [/\"\"\"/, 'string', '@endDblDocString']\r\n        ],\r\n        endDocString: [\r\n            [/[^']+/, 'string'],\r\n            [/\\\\'/, 'string'],\r\n            [/'''/, 'string', '@popall'],\r\n            [/'/, 'string']\r\n        ],\r\n        endDblDocString: [\r\n            [/[^\"]+/, 'string'],\r\n            [/\\\\\"/, 'string'],\r\n            [/\"\"\"/, 'string', '@popall'],\r\n            [/\"/, 'string']\r\n        ],\r\n        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation\r\n        numbers: [\r\n            [/-?0x([abcdef]|[ABCDEF]|\\d)+[lL]?/, 'number.hex'],\r\n            [/-?(\\d*\\.)?\\d+([eE][+\\-]?\\d+)?[jJ]?[lL]?/, 'number']\r\n        ],\r\n        // Recognize strings, including those broken across lines with \\ (but not without)\r\n        strings: [\r\n            [/'$/, 'string.escape', '@popall'],\r\n            [/'/, 'string.escape', '@stringBody'],\r\n            [/\"$/, 'string.escape', '@popall'],\r\n            [/\"/, 'string.escape', '@dblStringBody']\r\n        ],\r\n        stringBody: [\r\n            [/[^\\\\']+$/, 'string', '@popall'],\r\n            [/[^\\\\']+/, 'string'],\r\n            [/\\\\./, 'string'],\r\n            [/'/, 'string.escape', '@popall'],\r\n            [/\\\\$/, 'string']\r\n        ],\r\n        dblStringBody: [\r\n            [/[^\\\\\"]+$/, 'string', '@popall'],\r\n            [/[^\\\\\"]+/, 'string'],\r\n            [/\\\\./, 'string'],\r\n            [/\"/, 'string.escape', '@popall'],\r\n            [/\\\\$/, 'string']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/python/python.js?");

/***/ })

}]);