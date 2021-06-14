/* out-of-character 1.2.1 MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.outOfCharacter = factory());
}(this, (function () { 'use strict';

  var require$$0 = [
  	{
  		type: "Line Break",
  		name: "LINE FEED",
  		code: "U+000A",
  		escapeChar: "\\n",
  		aka: "LF",
  		actualUnicodeChar: "\n",
  		codeEscaped: "\\u000A",
  		url: "https://www.compart.com/en/unicode/U+000A"
  	},
  	{
  		type: "Separator",
  		name: "LINE TABULATION",
  		code: "U+000B",
  		escapeChar: "\\t",
  		aka: "TAB",
  		replaceWith: "\t",
  		actualUnicodeChar: "\u000b",
  		codeEscaped: "\\u000B",
  		url: "https://www.compart.com/en/unicode/U+000B"
  	},
  	{
  		type: "Separator",
  		name: "FORM FEED",
  		code: "U+000C",
  		escapeChar: "\\f",
  		aka: "FF",
  		replaceWith: "",
  		actualUnicodeChar: "\f",
  		codeEscaped: "\\u000C",
  		url: "https://www.compart.com/en/unicode/U+000C"
  	},
  	{
  		type: "Line Break",
  		name: "CARRIAGE RETURN",
  		code: "U+000D",
  		escapeChar: "\\r",
  		aka: "CR",
  		actualUnicodeChar: "\r",
  		codeEscaped: "\\u000D",
  		url: "https://www.compart.com/en/unicode/U+000D"
  	},
  	{
  		type: "Separators",
  		name: "NEXT LINE",
  		code: "U+0085",
  		escapeChar: "",
  		aka: "NEL",
  		replaceWith: "",
  		actualUnicodeChar: "",
  		codeEscaped: "\\u0085",
  		url: "https://www.compart.com/en/unicode/U+0085"
  	},
  	{
  		type: "Separators",
  		name: "LINE SEPARATOR",
  		code: "U+2028",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "\u2028",
  		codeEscaped: "\\u2028",
  		url: "https://www.compart.com/en/unicode/U+2028"
  	},
  	{
  		type: "Separators",
  		name: "PARAGRAPH SEPARATOR",
  		code: "U+2029",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "\u2029",
  		codeEscaped: "\\u2029",
  		url: "https://www.compart.com/en/unicode/U+2029"
  	},
  	{
  		type: "Whitespace",
  		name: "CHARACTER TABULATION",
  		code: "U+0009",
  		escapeChar: "",
  		actualUnicodeChar: "\t",
  		codeEscaped: "\\u0009",
  		url: "https://www.compart.com/en/unicode/U+0009"
  	},
  	{
  		type: "Whitespace",
  		name: "SPACE",
  		code: "U+0020",
  		escapeChar: "",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u0020",
  		url: "https://www.compart.com/en/unicode/U+0020"
  	},
  	{
  		htmlentity: "&shy;",
  		htmlcode: "&#173;",
  		csscode: "\\00AD",
  		unicode: "U+00AD",
  		name: "SOFT HYPHEN",
  		type: "Invisible",
  		code: "U+00AD",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "­",
  		codeEscaped: "\\u00AD",
  		url: "https://www.compart.com/en/unicode/U+00AD"
  	},
  	{
  		type: "Invisible",
  		name: "COMBINING GRAPHEME JOINER",
  		code: "U+034F",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "͏",
  		codeEscaped: "\\u034F",
  		url: "https://www.compart.com/en/unicode/U+034F"
  	},
  	{
  		type: "Invisible",
  		name: "ARABIC LETTER MARK",
  		code: "U+061C",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "؜",
  		codeEscaped: "\\u061C",
  		url: "https://www.compart.com/en/unicode/U+061C"
  	},
  	{
  		type: "Visible",
  		name: "SYRIAC ABBREVIATION MARK",
  		code: "U+070F",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "܏",
  		codeEscaped: "\\u070F",
  		url: "https://www.compart.com/en/unicode/U+070F"
  	},
  	{
  		type: "Whitespace",
  		name: "HANGUL CHOSEONG FILLER",
  		code: "U+115F",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: "ᅟ",
  		codeEscaped: "\\u115F",
  		url: "https://www.compart.com/en/unicode/U+115F"
  	},
  	{
  		type: "Whitespace",
  		name: "HANGUL JUNGSEONG FILLER",
  		code: "U+1160",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: "ᅠ",
  		codeEscaped: "\\u1160",
  		url: "https://www.compart.com/en/unicode/U+1160"
  	},
  	{
  		type: "Visible",
  		name: "OGHAM SPACE MARK",
  		code: "U+1680",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u1680",
  		url: "https://www.compart.com/en/unicode/U+1680"
  	},
  	{
  		type: "Invisible",
  		name: "KHMER VOWEL INHERENT AQ",
  		code: "U+17B4",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "឴",
  		codeEscaped: "\\u17B4",
  		url: "https://www.compart.com/en/unicode/U+17B4"
  	},
  	{
  		type: "Invisible",
  		name: "KHMER VOWEL INHERENT AA",
  		code: "U+17B5",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "឵",
  		codeEscaped: "\\u17B5",
  		url: "https://www.compart.com/en/unicode/U+17B5"
  	},
  	{
  		type: "Invisible",
  		name: "MONGOLIAN VOWEL SEPARATOR",
  		code: "U+180E",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "᠎",
  		codeEscaped: "\\u180E",
  		url: "https://www.compart.com/en/unicode/U+180E"
  	},
  	{
  		type: "Whitespace",
  		name: "EN QUAD",
  		code: "U+2000",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2000",
  		url: "https://www.compart.com/en/unicode/U+2000"
  	},
  	{
  		type: "Whitespace",
  		name: "EM QUAD",
  		code: "U+2001",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2001",
  		url: "https://www.compart.com/en/unicode/U+2001"
  	},
  	{
  		htmlentity: "&ensp;",
  		htmlcode: "&#8194;",
  		csscode: "\\2002",
  		unicode: "U+2002",
  		name: "EN SPACE",
  		type: "Whitespace",
  		code: "U+2002",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2002",
  		url: "https://www.compart.com/en/unicode/U+2002"
  	},
  	{
  		htmlentity: "&emsp;",
  		htmlcode: "&#8195;",
  		csscode: "\\2003",
  		unicode: "U+2003",
  		name: "EM SPACE",
  		type: "Whitespace",
  		code: "U+2003",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2003",
  		url: "https://www.compart.com/en/unicode/U+2003"
  	},
  	{
  		type: "Whitespace",
  		name: "THREE-PER-EM SPACE",
  		code: "U+2004",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2004",
  		url: "https://www.compart.com/en/unicode/U+2004"
  	},
  	{
  		type: "Whitespace",
  		name: "FOUR-PER-EM SPACE",
  		code: "U+2005",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2005",
  		url: "https://www.compart.com/en/unicode/U+2005"
  	},
  	{
  		type: "Whitespace",
  		name: "SIX-PER-EM SPACE",
  		code: "U+2006",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2006",
  		url: "https://www.compart.com/en/unicode/U+2006"
  	},
  	{
  		type: "Whitespace",
  		name: "FIGURE SPACE",
  		code: "U+2007",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2007",
  		url: "https://www.compart.com/en/unicode/U+2007"
  	},
  	{
  		type: "Whitespace",
  		name: "PUNCTUATION SPACE",
  		code: "U+2008",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2008",
  		url: "https://www.compart.com/en/unicode/U+2008"
  	},
  	{
  		htmlentity: "&thinsp;",
  		htmlcode: "&#8201;",
  		csscode: "\\2009",
  		unicode: "U+2009",
  		name: "THIN SPACE",
  		type: "Whitespace",
  		code: "U+2009",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u2009",
  		url: "https://www.compart.com/en/unicode/U+2009"
  	},
  	{
  		type: "Whitespace",
  		name: "HAIR SPACE",
  		code: "U+200A",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u200A",
  		url: "https://www.compart.com/en/unicode/U+200A"
  	},
  	{
  		type: "Invisible",
  		name: "ZERO WIDTH SPACE",
  		code: "U+200B",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "​",
  		codeEscaped: "\\u200B",
  		url: "https://www.compart.com/en/unicode/U+200B"
  	},
  	{
  		htmlentity: "&zwnj;",
  		htmlcode: "&#8204;",
  		csscode: "\\200C",
  		unicode: "U+200C",
  		name: "ZERO WIDTH NON-JOINER",
  		type: "Invisible",
  		code: "U+200C",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "‌",
  		codeEscaped: "\\u200C",
  		url: "https://www.compart.com/en/unicode/U+200C"
  	},
  	{
  		htmlentity: "&zwj;",
  		htmlcode: "&#8205;",
  		csscode: "\\200D",
  		unicode: "U+200D",
  		name: "ZERO WIDTH",
  		type: "Invisible",
  		code: "U+200D",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "‍",
  		codeEscaped: "\\u200D",
  		url: "https://www.compart.com/en/unicode/U+200D"
  	},
  	{
  		htmlentity: "&lrm;",
  		htmlcode: "&#8206;",
  		csscode: "\\200E",
  		unicode: "U+200E",
  		name: "LEFT-TO-RIGHT MARK",
  		type: "Invisible",
  		code: "U+200E",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "‎",
  		codeEscaped: "\\u200E",
  		url: "https://www.compart.com/en/unicode/U+200E"
  	},
  	{
  		htmlentity: "&rlm;",
  		htmlcode: "&#8207;",
  		csscode: "\\200F",
  		unicode: "U+200F",
  		name: "RIGHT-TO-LEFT MARK",
  		type: "Invisible",
  		code: "U+200F",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "‏",
  		codeEscaped: "\\u200F",
  		url: "https://www.compart.com/en/unicode/U+200F"
  	},
  	{
  		type: "Whitespace",
  		name: "NARROW NO-BREAK SPACE",
  		code: "U+202F",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u202F",
  		url: "https://www.compart.com/en/unicode/U+202F"
  	},
  	{
  		type: "Whitespace",
  		name: "MEDIUM MATHEMATICAL SPACE",
  		code: "U+205F",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: " ",
  		codeEscaped: "\\u205F",
  		url: "https://www.compart.com/en/unicode/U+205F"
  	},
  	{
  		type: "Invisible",
  		name: "WORD JOINER",
  		code: "U+2060",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁠",
  		codeEscaped: "\\u2060",
  		url: "https://www.compart.com/en/unicode/U+2060"
  	},
  	{
  		type: "Invisible",
  		name: "FUNCTION APPLICATION",
  		code: "U+2061",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁡",
  		codeEscaped: "\\u2061",
  		url: "https://www.compart.com/en/unicode/U+2061"
  	},
  	{
  		type: "Invisible",
  		name: "INVISIBLE TIMES",
  		code: "U+2062",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁢",
  		codeEscaped: "\\u2062",
  		url: "https://www.compart.com/en/unicode/U+2062"
  	},
  	{
  		type: "Invisible",
  		name: "INVISIBLE SEPARATOR",
  		code: "U+2063",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁣",
  		codeEscaped: "\\u2063",
  		url: "https://www.compart.com/en/unicode/U+2063"
  	},
  	{
  		type: "Invisible",
  		name: "INVISIBLE PLUS",
  		code: "U+2064",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁤",
  		codeEscaped: "\\u2064",
  		url: "https://www.compart.com/en/unicode/U+2064"
  	},
  	{
  		type: "Invisible",
  		name: "INHIBIT SYMMETRIC SWAPPING",
  		code: "U+206A",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁪",
  		codeEscaped: "\\u206A",
  		url: "https://www.compart.com/en/unicode/U+206A"
  	},
  	{
  		type: "Invisible",
  		name: "ACTIVATE SYMMETRIC SWAPPING",
  		code: "U+206B",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁫",
  		codeEscaped: "\\u206B",
  		url: "https://www.compart.com/en/unicode/U+206B"
  	},
  	{
  		type: "Invisible",
  		name: "INHIBIT ARABIC FORM SHAPING",
  		code: "U+206C",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁬",
  		codeEscaped: "\\u206C",
  		url: "https://www.compart.com/en/unicode/U+206C"
  	},
  	{
  		type: "Invisible",
  		name: "ACTIVATE ARABIC FORM SHAPING",
  		code: "U+206D",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁭",
  		codeEscaped: "\\u206D",
  		url: "https://www.compart.com/en/unicode/U+206D"
  	},
  	{
  		type: "Invisible",
  		name: "NATIONAL DIGIT SHAPES",
  		code: "U+206E",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁮",
  		codeEscaped: "\\u206E",
  		url: "https://www.compart.com/en/unicode/U+206E"
  	},
  	{
  		type: "Invisible",
  		name: "NOMINAL DIGIT SHAPES",
  		code: "U+206F",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "⁯",
  		codeEscaped: "\\u206F",
  		url: "https://www.compart.com/en/unicode/U+206F"
  	},
  	{
  		type: "Whitepace",
  		name: "IDEOGRAPHIC SPACE",
  		code: "U+3000",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: "　",
  		codeEscaped: "\\u3000",
  		url: "https://www.compart.com/en/unicode/U+3000"
  	},
  	{
  		type: "Whitepace",
  		name: "BRAILLE PATTERN BLANK",
  		code: "U+2800",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: "⠀",
  		codeEscaped: "\\u2800",
  		url: "https://www.compart.com/en/unicode/U+2800"
  	},
  	{
  		type: "Whitepace",
  		name: "HANGUL FILLER",
  		code: "U+3164",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: "ㅤ",
  		codeEscaped: "\\u3164",
  		url: "https://www.compart.com/en/unicode/U+3164"
  	},
  	{
  		type: "Invisible",
  		name: "ZERO WIDTH NO-BREAK SPACE",
  		code: "U+FEFF",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "﻿",
  		codeEscaped: "\\uFEFF",
  		url: "https://www.compart.com/en/unicode/U+FEFF"
  	},
  	{
  		type: "Whitespace",
  		name: "HALFWIDTH HANGUL FILLER",
  		code: "U+FFA0",
  		escapeChar: "",
  		replaceWith: " ",
  		actualUnicodeChar: "ﾠ",
  		codeEscaped: "\\uFFA0",
  		url: "https://www.compart.com/en/unicode/U+FFA0"
  	},
  	{
  		type: "Visible",
  		name: "KAITHI VOWEL SIGN I",
  		code: "U+110B1",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𑂱",
  		codeEscaped: "\\u110B1",
  		url: "https://www.compart.com/en/unicode/U+110B1"
  	},
  	{
  		type: "Visible",
  		name: "SHORTHAND FORMAT LETTER OVERLAP",
  		code: "U+1BCA0",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𛲠",
  		codeEscaped: "\\u1BCA0",
  		url: "https://www.compart.com/en/unicode/U+1BCA0"
  	},
  	{
  		type: "Visible",
  		name: "SHORTHAND FORMAT CONTINUING OVERLAP",
  		code: "U+1BCA1",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𛲡",
  		codeEscaped: "\\u1BCA1",
  		url: "https://www.compart.com/en/unicode/U+1BCA1"
  	},
  	{
  		type: "Visible",
  		name: "SHORTHAND FORMAT DOWN STEP",
  		code: "U+1BCA2",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𛲢",
  		codeEscaped: "\\u1BCA2",
  		url: "https://www.compart.com/en/unicode/U+1BCA2"
  	},
  	{
  		type: "Visible",
  		name: "SHORTHAND FORMAT UP STEP",
  		code: "U+1BCA3",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𛲣",
  		codeEscaped: "\\u1BCA3",
  		url: "https://www.compart.com/en/unicode/U+1BCA3"
  	},
  	{
  		type: "Visible",
  		name: "MUSICAL SYMBOL NULL NOTEHEAD",
  		code: "U+1D159",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅙",
  		codeEscaped: "\\u1D159",
  		url: "https://www.compart.com/en/unicode/U+1D159"
  	},
  	{
  		type: "Invisible",
  		name: "MUSICAL SYMBOL BEGIN BEAM",
  		code: "U+1D173",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅳",
  		codeEscaped: "\\u1D173",
  		url: "https://www.compart.com/en/unicode/U+1D173"
  	},
  	{
  		type: "Invisible",
  		name: "MUSICAL SYMBOL END BEAM",
  		code: "U+1D174",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅴",
  		codeEscaped: "\\u1D174",
  		url: "https://www.compart.com/en/unicode/U+1D174"
  	},
  	{
  		type: "Invisible",
  		name: "MUSICAL SYMBOL BEGIN TIE",
  		code: "U+1D175",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅵",
  		codeEscaped: "\\u1D175",
  		url: "https://www.compart.com/en/unicode/U+1D175"
  	},
  	{
  		type: "Invisible",
  		name: "MUSICAL SYMBOL END TIE",
  		code: "U+1D176",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅶",
  		codeEscaped: "\\u1D176",
  		url: "https://www.compart.com/en/unicode/U+1D176"
  	},
  	{
  		type: "Invisible",
  		name: "MUSICAL SYMBOL BEGIN SLUR",
  		code: "U+1D177",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅷",
  		codeEscaped: "\\u1D177",
  		url: "https://www.compart.com/en/unicode/U+1D177"
  	},
  	{
  		type: "Invisible",
  		name: "MUSICAL SYMBOL END SLUR",
  		code: "U+1D178",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅸",
  		codeEscaped: "\\u1D178",
  		url: "https://www.compart.com/en/unicode/U+1D178"
  	},
  	{
  		type: "Invisible",
  		name: "MUSICAL SYMBOL BEGIN PHRASE",
  		code: "U+1D179",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅹",
  		codeEscaped: "\\u1D179",
  		url: "https://www.compart.com/en/unicode/U+1D179"
  	},
  	{
  		type: "Invisible",
  		name: "MUSICAL SYMBOL END PHRASE",
  		code: "U+1D17A",
  		escapeChar: "",
  		replaceWith: "",
  		actualUnicodeChar: "𝅺",
  		codeEscaped: "\\u1D17A",
  		url: "https://www.compart.com/en/unicode/U+1D17A"
  	}
  ];

  var isVariationSelector = function isVariationSelector(num) {
    return num >= 65024 && num <= 65039;
  }; // const highSurrogates = /[\uD800-\uDBFF]/


  var isHighSurrogate = function isHighSurrogate(num) {
    return num >= 55296 && num <= 56319;
  }; // const lowSurrogates = /[\uDC00-\uDFFF]/


  var isLowSurrogate = function isLowSurrogate(num) {
    return num >= 56320 && num <= 57343;
  }; // allow invisible characters in emojis


  var isEmoji$1 = function isEmoji(text, i) {
    // look at code before
    if (text[i - 1]) {
      var code = text.charCodeAt(i - 1);

      if (isHighSurrogate(code) || isLowSurrogate(code) || isVariationSelector(code)) {
        return true;
      }
    } // look at code before


    if (text[i + 1]) {
      var _code = text.charCodeAt(i + 1);

      if (isHighSurrogate(_code) || isLowSurrogate(_code) || isVariationSelector(_code)) {
        return true;
      }
    }

    return false;
  };

  var isEmoji_1 = isEmoji$1;

  var data = require$$0;
  var isEmoji = isEmoji_1;
  /** add spaces at the end */

  var padStr = function padStr(str, width) {
    while (str.length < width) {
      str = '0' + str;
    }

    return str;
  }; // for easier look-up


  var byCode = data.reduce(function (h, obj) {
    h[obj.code] = obj;
    return h;
  }, {}); // chars to create our regex with

  var codes = data.filter(function (obj) {
    return obj.replaceWith !== undefined;
  }).map(function (obj) {
    return obj.code.replace(/^U\+/, "\\u");
  }); // return an array of found invisible characters

  var findAll$1 = function findAll(text) {
    // console.log(codes)
    var regEx = new RegExp("(".concat(codes.join('|'), ")"), 'g');
    var matches = [];
    text.replace(regEx, function (ch, _b, offset) {
      // find the code of the char we matched
      var code = ch.charCodeAt(0);
      var hex = code.toString(16).toUpperCase();
      hex = "U+" + padStr(hex, 4); // console.log(ch, code, hex)

      var found = byCode[hex] || {}; // dont match for emoji zero-width chars

      if (found.code === 'U+200D') {
        // is this zero-width used in an emoji?
        if (isEmoji(text, offset)) {
          return ch; //do nothing
        }
      }

      matches.push({
        name: found.name,
        code: found.code,
        offset: offset,
        replacement: found.replaceWith || ''
      });
      return ch; //do nothing
    });
    return matches;
  };

  var match = findAll$1;

  var findAll = match;
  var src = {
    // find invisible or strange unicode characters in the text
    detect: function detect(text) {
      var matches = findAll(text);

      if (matches.length > 0) {
        return matches;
      }

      return null;
    },
    // remove invisible or strange unicode characters from the text
    replace: function replace(text) {
      var matches = findAll(text);
      matches.forEach(function (o) {
        var code = o.code.replace(/^U\+/, "\\u");
        var reg = new RegExp(code, 'g');
        text = text.replace(reg, o.replacement || '');
      });
      return text;
    }
  };

  return src;

})));
//# sourceMappingURL=out-of-character.js.map
