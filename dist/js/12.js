(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#%\\^\\&\\*\\(\\)\\=\\$\\-\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\r\n    comments: {\r\n        blockComment: ['###', '###'],\r\n        lineComment: '#'\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\r\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    ignoreCase: true,\r\n    tokenPostfix: '.coffee',\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\r\n    ],\r\n    regEx: /\\/(?!\\/\\/)(?:[^\\/\\\\]|\\\\.)*\\/[igm]*/,\r\n    keywords: [\r\n        'and', 'or', 'is', 'isnt', 'not', 'on', 'yes', '@', 'no', 'off',\r\n        'true', 'false', 'null', 'this',\r\n        'new', 'delete', 'typeof', 'in', 'instanceof',\r\n        'return', 'throw', 'break', 'continue', 'debugger',\r\n        'if', 'else', 'switch', 'for', 'while', 'do', 'try', 'catch', 'finally',\r\n        'class', 'extends', 'super',\r\n        'undefined', 'then', 'unless', 'until', 'loop', 'of', 'by', 'when'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?&%|+\\-*\\/\\^\\.,\\:]+/,\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [/\\@[a-zA-Z_]\\w*/, 'variable.predefined'],\r\n            [/[a-zA-Z_]\\w*/, {\r\n                    cases: {\r\n                        'this': 'variable.predefined',\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': ''\r\n                    }\r\n                }],\r\n            // whitespace\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            // Comments\r\n            [/###/, 'comment', '@comment'],\r\n            [/#.*$/, 'comment'],\r\n            // regular expressions\r\n            ['///', { token: 'regexp', next: '@hereregexp' }],\r\n            [/^(\\s*)(@regEx)/, ['', 'regexp']],\r\n            [/(\\()(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\r\n            [/(\\,)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\=)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\:)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\[)(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\r\n            [/(\\!)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\&)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\|)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\?)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\r\n            [/(\\{)(\\s*)(@regEx)/, ['@brackets', '', 'regexp']],\r\n            [/(\\;)(\\s*)(@regEx)/, ['', '', 'regexp']],\r\n            // delimiters\r\n            [/}/, {\r\n                    cases: {\r\n                        '$S2==interpolatedstring': { token: 'string', next: '@pop' },\r\n                        '@default': '@brackets'\r\n                    }\r\n                }],\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/@symbols/, 'delimiter'],\r\n            // numbers\r\n            [/\\d+[eE]([\\-+]?\\d+)?/, 'number.float'],\r\n            [/\\d+\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\r\n            [/0[0-7]+(?!\\d)/, 'number.octal'],\r\n            [/\\d+/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[,.]/, 'delimiter'],\r\n            // strings:\r\n            [/\"\"\"/, 'string', '@herestring.\"\"\"'],\r\n            [/'''/, 'string', '@herestring.\\'\\'\\''],\r\n            [/\"/, {\r\n                    cases: {\r\n                        '@eos': 'string',\r\n                        '@default': { token: 'string', next: '@string.\"' }\r\n                    }\r\n                }],\r\n            [/'/, {\r\n                    cases: {\r\n                        '@eos': 'string',\r\n                        '@default': { token: 'string', next: '@string.\\'' }\r\n                    }\r\n                }],\r\n        ],\r\n        string: [\r\n            [/[^\"'\\#\\\\]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\./, 'string.escape.invalid'],\r\n            [/\\./, 'string.escape.invalid'],\r\n            [/#{/, {\r\n                    cases: {\r\n                        '$S2==\"': { token: 'string', next: 'root.interpolatedstring' },\r\n                        '@default': 'string'\r\n                    }\r\n                }],\r\n            [/[\"']/, {\r\n                    cases: {\r\n                        '$#==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }],\r\n            [/#/, 'string']\r\n        ],\r\n        herestring: [\r\n            [/(\"\"\"|''')/, {\r\n                    cases: {\r\n                        '$1==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }],\r\n            [/[^#\\\\'\"]+/, 'string'],\r\n            [/['\"]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\./, 'string.escape.invalid'],\r\n            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],\r\n            [/#/, 'string']\r\n        ],\r\n        comment: [\r\n            [/[^#]+/, 'comment',],\r\n            [/###/, 'comment', '@pop'],\r\n            [/#/, 'comment'],\r\n        ],\r\n        hereregexp: [\r\n            [/[^\\\\\\/#]+/, 'regexp'],\r\n            [/\\\\./, 'regexp'],\r\n            [/#.*$/, 'comment'],\r\n            ['///[igm]*', { token: 'regexp', next: '@pop' }],\r\n            [/\\//, 'regexp'],\r\n        ],\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/.pnpm/registry.npmmirror.com+monaco-editor@0.20.0/node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.js?");

/***/ })

}]);