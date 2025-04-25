/* out-of-character 1.2.4 MIT */
function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var require$$0 = [
	{
		actualUnicodeChar: "\n",
		aka: "LF",
		code: "U+000A",
		codeEscaped: "\\u000A",
		escapeChar: "\\n",
		name: "LINE FEED",
		type: "Line Break",
		url: "https://www.compart.com/en/unicode/U+000A"
	},
	{
		actualUnicodeChar: "\u000b",
		aka: "TAB",
		code: "U+000B",
		codeEscaped: "\\u000B",
		escapeChar: "\\t",
		name: "LINE TABULATION",
		replaceWith: "\t",
		type: "Separator",
		url: "https://www.compart.com/en/unicode/U+000B"
	},
	{
		actualUnicodeChar: "\f",
		aka: "FF",
		code: "U+000C",
		codeEscaped: "\\u000C",
		escapeChar: "\\f",
		name: "FORM FEED",
		replaceWith: "",
		type: "Separator",
		url: "https://www.compart.com/en/unicode/U+000C"
	},
	{
		actualUnicodeChar: "\r",
		aka: "CR",
		code: "U+000D",
		codeEscaped: "\\u000D",
		escapeChar: "\\r",
		name: "CARRIAGE RETURN",
		type: "Line Break",
		url: "https://www.compart.com/en/unicode/U+000D"
	},
	{
		actualUnicodeChar: "",
		aka: "NEL",
		code: "U+0085",
		codeEscaped: "\\u0085",
		escapeChar: "",
		name: "NEXT LINE",
		replaceWith: "",
		type: "Separators",
		url: "https://www.compart.com/en/unicode/U+0085"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+00A0",
		codeEscaped: "\\u00A0",
		escapeChar: "",
		name: "NO-BREAK SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+00A0"
	},
	{
		actualUnicodeChar: "\u2028",
		aka: "",
		code: "U+2028",
		codeEscaped: "\\u2028",
		escapeChar: "",
		name: "LINE SEPARATOR",
		replaceWith: "",
		type: "Separators",
		url: "https://www.compart.com/en/unicode/U+2028"
	},
	{
		actualUnicodeChar: "\u2029",
		aka: "",
		code: "U+2029",
		codeEscaped: "\\u2029",
		escapeChar: "",
		name: "PARAGRAPH SEPARATOR",
		replaceWith: "",
		type: "Separators",
		url: "https://www.compart.com/en/unicode/U+2029"
	},
	{
		actualUnicodeChar: "\t",
		aka: "",
		code: "U+0009",
		codeEscaped: "\\u0009",
		escapeChar: "",
		name: "CHARACTER TABULATION",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+0009"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+0020",
		codeEscaped: "\\u0020",
		escapeChar: "",
		name: "SPACE",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+0020"
	},
	{
		actualUnicodeChar: "­",
		aka: "",
		code: "U+00AD",
		codeEscaped: "\\u00AD",
		csscode: "\\00AD",
		escapeChar: "",
		htmlcode: "&#173;",
		htmlentity: "&shy;",
		name: "SOFT HYPHEN",
		replaceWith: "",
		type: "Invisible",
		unicode: "U+00AD",
		url: "https://www.compart.com/en/unicode/U+00AD"
	},
	{
		actualUnicodeChar: "͏",
		aka: "",
		code: "U+034F",
		codeEscaped: "\\u034F",
		escapeChar: "",
		name: "COMBINING GRAPHEME JOINER",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+034F"
	},
	{
		actualUnicodeChar: "؜",
		aka: "",
		code: "U+061C",
		codeEscaped: "\\u061C",
		escapeChar: "",
		name: "ARABIC LETTER MARK",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+061C"
	},
	{
		actualUnicodeChar: "܏",
		aka: "",
		code: "U+070F",
		codeEscaped: "\\u070F",
		escapeChar: "",
		name: "SYRIAC ABBREVIATION MARK",
		replaceWith: "",
		type: "Visible",
		url: "https://www.compart.com/en/unicode/U+070F"
	},
	{
		actualUnicodeChar: "ᅟ",
		aka: "",
		code: "U+115F",
		codeEscaped: "\\u115F",
		escapeChar: "",
		name: "HANGUL CHOSEONG FILLER",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+115F"
	},
	{
		actualUnicodeChar: "ᅠ",
		aka: "",
		code: "U+1160",
		codeEscaped: "\\u1160",
		escapeChar: "",
		name: "HANGUL JUNGSEONG FILLER",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+1160"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+1680",
		codeEscaped: "\\u1680",
		escapeChar: "",
		name: "OGHAM SPACE MARK",
		replaceWith: " ",
		type: "Visible",
		url: "https://www.compart.com/en/unicode/U+1680"
	},
	{
		actualUnicodeChar: "឴",
		aka: "",
		code: "U+17B4",
		codeEscaped: "\\u17B4",
		escapeChar: "",
		name: "KHMER VOWEL INHERENT AQ",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+17B4"
	},
	{
		actualUnicodeChar: "឵",
		aka: "",
		code: "U+17B5",
		codeEscaped: "\\u17B5",
		escapeChar: "",
		name: "KHMER VOWEL INHERENT AA",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+17B5"
	},
	{
		actualUnicodeChar: "᠎",
		aka: "",
		code: "U+180E",
		codeEscaped: "\\u180E",
		escapeChar: "",
		name: "MONGOLIAN VOWEL SEPARATOR",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+180E"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2000",
		codeEscaped: "\\u2000",
		escapeChar: "",
		name: "EN QUAD",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+2000"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2001",
		codeEscaped: "\\u2001",
		escapeChar: "",
		name: "EM QUAD",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+2001"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2002",
		codeEscaped: "\\u2002",
		csscode: "\\2002",
		escapeChar: "",
		htmlcode: "&#8194;",
		htmlentity: "&ensp;",
		name: "EN SPACE",
		replaceWith: " ",
		type: "Whitespace",
		unicode: "U+2002",
		url: "https://www.compart.com/en/unicode/U+2002"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2003",
		codeEscaped: "\\u2003",
		csscode: "\\2003",
		escapeChar: "",
		htmlcode: "&#8195;",
		htmlentity: "&emsp;",
		name: "EM SPACE",
		replaceWith: " ",
		type: "Whitespace",
		unicode: "U+2003",
		url: "https://www.compart.com/en/unicode/U+2003"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2004",
		codeEscaped: "\\u2004",
		escapeChar: "",
		name: "THREE-PER-EM SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+2004"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2005",
		codeEscaped: "\\u2005",
		escapeChar: "",
		name: "FOUR-PER-EM SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+2005"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2006",
		codeEscaped: "\\u2006",
		escapeChar: "",
		name: "SIX-PER-EM SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+2006"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2007",
		codeEscaped: "\\u2007",
		escapeChar: "",
		name: "FIGURE SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+2007"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2008",
		codeEscaped: "\\u2008",
		escapeChar: "",
		name: "PUNCTUATION SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+2008"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+2009",
		codeEscaped: "\\u2009",
		csscode: "\\2009",
		escapeChar: "",
		htmlcode: "&#8201;",
		htmlentity: "&thinsp;",
		name: "THIN SPACE",
		replaceWith: " ",
		type: "Whitespace",
		unicode: "U+2009",
		url: "https://www.compart.com/en/unicode/U+2009"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+200A",
		codeEscaped: "\\u200A",
		escapeChar: "",
		name: "HAIR SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+200A"
	},
	{
		actualUnicodeChar: "​",
		aka: "",
		code: "U+200B",
		codeEscaped: "\\u200B",
		escapeChar: "",
		name: "ZERO WIDTH SPACE",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+200B"
	},
	{
		actualUnicodeChar: "‌",
		aka: "",
		code: "U+200C",
		codeEscaped: "\\u200C",
		csscode: "\\200C",
		escapeChar: "",
		htmlcode: "&#8204;",
		htmlentity: "&zwnj;",
		name: "ZERO WIDTH NON-JOINER",
		replaceWith: "",
		type: "Invisible",
		unicode: "U+200C",
		url: "https://www.compart.com/en/unicode/U+200C"
	},
	{
		actualUnicodeChar: "‍",
		aka: "",
		code: "U+200D",
		codeEscaped: "\\u200D",
		csscode: "\\200D",
		escapeChar: "",
		htmlcode: "&#8205;",
		htmlentity: "&zwj;",
		name: "ZERO WIDTH",
		replaceWith: "",
		type: "Invisible",
		unicode: "U+200D",
		url: "https://www.compart.com/en/unicode/U+200D"
	},
	{
		actualUnicodeChar: "‎",
		aka: "",
		code: "U+200E",
		codeEscaped: "\\u200E",
		csscode: "\\200E",
		escapeChar: "",
		htmlcode: "&#8206;",
		htmlentity: "&lrm;",
		name: "LEFT-TO-RIGHT MARK",
		replaceWith: "",
		type: "Invisible",
		unicode: "U+200E",
		url: "https://www.compart.com/en/unicode/U+200E"
	},
	{
		actualUnicodeChar: "‏",
		aka: "",
		code: "U+200F",
		codeEscaped: "\\u200F",
		csscode: "\\200F",
		escapeChar: "",
		htmlcode: "&#8207;",
		htmlentity: "&rlm;",
		name: "RIGHT-TO-LEFT MARK",
		replaceWith: "",
		type: "Invisible",
		unicode: "U+200F",
		url: "https://www.compart.com/en/unicode/U+200F"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+202F",
		codeEscaped: "\\u202F",
		escapeChar: "",
		name: "NARROW NO-BREAK SPACE",
		replaceWith: "",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+202F"
	},
	{
		actualUnicodeChar: " ",
		aka: "",
		code: "U+205F",
		codeEscaped: "\\u205F",
		escapeChar: "",
		name: "MEDIUM MATHEMATICAL SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+205F"
	},
	{
		actualUnicodeChar: "⁠",
		aka: "",
		code: "U+2060",
		codeEscaped: "\\u2060",
		escapeChar: "",
		name: "WORD JOINER",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+2060"
	},
	{
		actualUnicodeChar: "⁡",
		aka: "",
		code: "U+2061",
		codeEscaped: "\\u2061",
		escapeChar: "",
		name: "FUNCTION APPLICATION",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+2061"
	},
	{
		actualUnicodeChar: "⁢",
		aka: "",
		code: "U+2062",
		codeEscaped: "\\u2062",
		escapeChar: "",
		name: "INVISIBLE TIMES",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+2062"
	},
	{
		actualUnicodeChar: "⁣",
		aka: "",
		code: "U+2063",
		codeEscaped: "\\u2063",
		escapeChar: "",
		name: "INVISIBLE SEPARATOR",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+2063"
	},
	{
		actualUnicodeChar: "⁤",
		aka: "",
		code: "U+2064",
		codeEscaped: "\\u2064",
		escapeChar: "",
		name: "INVISIBLE PLUS",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+2064"
	},
	{
		actualUnicodeChar: "⁪",
		aka: "",
		code: "U+206A",
		codeEscaped: "\\u206A",
		escapeChar: "",
		name: "INHIBIT SYMMETRIC SWAPPING",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+206A"
	},
	{
		actualUnicodeChar: "⁫",
		aka: "",
		code: "U+206B",
		codeEscaped: "\\u206B",
		escapeChar: "",
		name: "ACTIVATE SYMMETRIC SWAPPING",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+206B"
	},
	{
		actualUnicodeChar: "⁬",
		aka: "",
		code: "U+206C",
		codeEscaped: "\\u206C",
		escapeChar: "",
		name: "INHIBIT ARABIC FORM SHAPING",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+206C"
	},
	{
		actualUnicodeChar: "⁭",
		aka: "",
		code: "U+206D",
		codeEscaped: "\\u206D",
		escapeChar: "",
		name: "ACTIVATE ARABIC FORM SHAPING",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+206D"
	},
	{
		actualUnicodeChar: "⁮",
		aka: "",
		code: "U+206E",
		codeEscaped: "\\u206E",
		escapeChar: "",
		name: "NATIONAL DIGIT SHAPES",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+206E"
	},
	{
		actualUnicodeChar: "⁯",
		aka: "",
		code: "U+206F",
		codeEscaped: "\\u206F",
		escapeChar: "",
		name: "NOMINAL DIGIT SHAPES",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+206F"
	},
	{
		actualUnicodeChar: "　",
		aka: "",
		code: "U+3000",
		codeEscaped: "\\u3000",
		escapeChar: "",
		name: "IDEOGRAPHIC SPACE",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+3000"
	},
	{
		actualUnicodeChar: "⠀",
		aka: "",
		code: "U+2800",
		codeEscaped: "\\u2800",
		escapeChar: "",
		name: "BRAILLE PATTERN BLANK",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+2800"
	},
	{
		actualUnicodeChar: "ㅤ",
		aka: "",
		code: "U+3164",
		codeEscaped: "\\u3164",
		escapeChar: "",
		name: "HANGUL FILLER",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+3164"
	},
	{
		actualUnicodeChar: "﻿",
		aka: "",
		code: "U+FEFF",
		codeEscaped: "\\uFEFF",
		escapeChar: "",
		name: "ZERO WIDTH NO-BREAK SPACE",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+FEFF"
	},
	{
		actualUnicodeChar: "ﾠ",
		aka: "",
		code: "U+FFA0",
		codeEscaped: "\\uFFA0",
		escapeChar: "",
		name: "HALFWIDTH HANGUL FILLER",
		replaceWith: " ",
		type: "Whitespace",
		url: "https://www.compart.com/en/unicode/U+FFA0"
	},
	{
		actualUnicodeChar: "𑂱",
		aka: "",
		code: "U+110B1",
		codeEscaped: "\\u110B1",
		escapeChar: "",
		name: "KAITHI VOWEL SIGN I",
		replaceWith: "",
		type: "Visible",
		url: "https://www.compart.com/en/unicode/U+110B1"
	},
	{
		actualUnicodeChar: "𛲠",
		aka: "",
		code: "U+1BCA0",
		codeEscaped: "\\u1BCA0",
		escapeChar: "",
		name: "SHORTHAND FORMAT LETTER OVERLAP",
		replaceWith: "",
		type: "Visible",
		url: "https://www.compart.com/en/unicode/U+1BCA0"
	},
	{
		actualUnicodeChar: "𛲡",
		aka: "",
		code: "U+1BCA1",
		codeEscaped: "\\u1BCA1",
		escapeChar: "",
		name: "SHORTHAND FORMAT CONTINUING OVERLAP",
		replaceWith: "",
		type: "Visible",
		url: "https://www.compart.com/en/unicode/U+1BCA1"
	},
	{
		actualUnicodeChar: "𛲢",
		aka: "",
		code: "U+1BCA2",
		codeEscaped: "\\u1BCA2",
		escapeChar: "",
		name: "SHORTHAND FORMAT DOWN STEP",
		replaceWith: "",
		type: "Visible",
		url: "https://www.compart.com/en/unicode/U+1BCA2"
	},
	{
		actualUnicodeChar: "𛲣",
		aka: "",
		code: "U+1BCA3",
		codeEscaped: "\\u1BCA3",
		escapeChar: "",
		name: "SHORTHAND FORMAT UP STEP",
		replaceWith: "",
		type: "Visible",
		url: "https://www.compart.com/en/unicode/U+1BCA3"
	},
	{
		actualUnicodeChar: "𝅙",
		aka: "",
		code: "U+1D159",
		codeEscaped: "\\u1D159",
		escapeChar: "",
		name: "MUSICAL SYMBOL NULL NOTEHEAD",
		replaceWith: "",
		type: "Visible",
		url: "https://www.compart.com/en/unicode/U+1D159"
	},
	{
		actualUnicodeChar: "𝅳",
		aka: "",
		code: "U+1D173",
		codeEscaped: "\\u1D173",
		escapeChar: "",
		name: "MUSICAL SYMBOL BEGIN BEAM",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+1D173"
	},
	{
		actualUnicodeChar: "𝅴",
		aka: "",
		code: "U+1D174",
		codeEscaped: "\\u1D174",
		escapeChar: "",
		name: "MUSICAL SYMBOL END BEAM",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+1D174"
	},
	{
		actualUnicodeChar: "𝅵",
		aka: "",
		code: "U+1D175",
		codeEscaped: "\\u1D175",
		escapeChar: "",
		name: "MUSICAL SYMBOL BEGIN TIE",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+1D175"
	},
	{
		actualUnicodeChar: "𝅶",
		aka: "",
		code: "U+1D176",
		codeEscaped: "\\u1D176",
		escapeChar: "",
		name: "MUSICAL SYMBOL END TIE",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+1D176"
	},
	{
		actualUnicodeChar: "𝅷",
		aka: "",
		code: "U+1D177",
		codeEscaped: "\\u1D177",
		escapeChar: "",
		name: "MUSICAL SYMBOL BEGIN SLUR",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+1D177"
	},
	{
		actualUnicodeChar: "𝅸",
		aka: "",
		code: "U+1D178",
		codeEscaped: "\\u1D178",
		escapeChar: "",
		name: "MUSICAL SYMBOL END SLUR",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+1D178"
	},
	{
		actualUnicodeChar: "𝅹",
		aka: "",
		code: "U+1D179",
		codeEscaped: "\\u1D179",
		escapeChar: "",
		name: "MUSICAL SYMBOL BEGIN PHRASE",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+1D179"
	},
	{
		actualUnicodeChar: "𝅺",
		aka: "",
		code: "U+1D17A",
		codeEscaped: "\\u1D17A",
		escapeChar: "",
		name: "MUSICAL SYMBOL END PHRASE",
		replaceWith: "",
		type: "Invisible",
		url: "https://www.compart.com/en/unicode/U+1D17A"
	}
];

var isEmoji_1;
var hasRequiredIsEmoji;
function requireIsEmoji() {
  if (hasRequiredIsEmoji) return isEmoji_1;
  hasRequiredIsEmoji = 1;
  var isVariationSelector = function isVariationSelector(num) {
    return num >= 65024 && num <= 65039;
  };
  var isHighSurrogate = function isHighSurrogate(num) {
    return num >= 55296 && num <= 56319;
  };
  var isLowSurrogate = function isLowSurrogate(num) {
    return num >= 56320 && num <= 57343;
  };

  /**
   * @description Checks if the character at the given index in the text is an emoji.
   * @param {string} text - The text to check for emojis.
   * @param {number} i - The offset of the character to check.
   * @returns {boolean} True if the character is an emoji, false otherwise.
   */
  var isEmoji = function isEmoji(text, i) {
    // Look at code before
    if (text[i - 1]) {
      var code = text.charCodeAt(i - 1);
      if (isHighSurrogate(code) || isLowSurrogate(code) || isVariationSelector(code)) {
        return true;
      }
    }
    // Look at code after
    if (text[i + 1]) {
      var _code = text.charCodeAt(i + 1);
      if (isHighSurrogate(_code) || isLowSurrogate(_code) || isVariationSelector(_code)) {
        return true;
      }
    }
    return false;
  };
  isEmoji_1 = isEmoji;
  return isEmoji_1;
}

var match;
var hasRequiredMatch;
function requireMatch() {
  if (hasRequiredMatch) return match;
  hasRequiredMatch = 1;
  var data = require$$0;
  var isEmoji = requireIsEmoji();

  // For easier lookup
  var byCode = data.reduce(function (h, obj) {
    h[obj.code] = obj;
    return h;
  }, {});

  // Chars to create our regex with
  var unicodePrefixRegex = /^U\+/;
  var codes = data.filter(function (obj) {
    return obj.replaceWith !== undefined;
  }).map(function (obj) {
    // Convert "U+XXXX" to "\\uXXXX" for RegExp
    return obj.code.replace(unicodePrefixRegex, "\\u");
  });
  var codeRegex = new RegExp("(".concat(codes.join('|'), ")"), 'g');

  /**
   * @description Finds all invisible characters in the given text.
   * @param {string} text - The text to search for invisible characters.
   * @returns {{name: string, code: string, offset: number, replacement: string}[]} An array
   * of objects representing the found invisible characters.
   */
  var findAll = function findAll(text) {
    var matches = [];
    var _iterator = _createForOfIteratorHelper(text.matchAll(codeRegex)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _match = _step.value;
        var _char = _match[0];
        var offset = _match.index;

        // Find the code details of the matched character
        var codePoint = _char.codePointAt(0); // Use codePointAt for full Unicode support
        var hex = 'U+' + codePoint.toString(16).toUpperCase().padStart(4, '0');
        var found = byCode[hex]; // Lookup using the canonical 'U+XXXX' format
        if (found) {
          // Don't report U+200D (Zero Width Joiner) if it's part of an emoji sequence
          if (found.code === 'U+200D' && isEmoji(text, offset)) {
            continue;
          }
          matches.push({
            name: found.name,
            code: found.code,
            offset: offset,
            replacement: found.replaceWith || ''
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return matches;
  };
  match = findAll;
  return match;
}

var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  var findAll = requireMatch();
  src = {
    /**
     * @description Detects hidden characters in the given text.
     * @param {string} text - The text to search for hidden characters.
     * @returns {{name: string, code: string, offset: number, replacement: string}[]|null} An array
     * of objects representing the found hidden characters, or null if none are found.
     */
    detect: function detect(text) {
      var matches = findAll(text);
      if (matches.length > 0) {
        return matches;
      }
      return null;
    },
    /**
     * @description Remove invisible or strange unicode characters from the text.
     * @param {string} text - The text to search.
     * @returns {string} The text with invisible characters removed.
     */
    replace: function replace(text) {
      var matches = findAll(text);

      // Early return if no matches
      if (matches.length === 0) {
        return text;
      }
      var result = '';
      var lastIndex = 0;
      var _iterator = _createForOfIteratorHelper(matches),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var match = _step.value;
          result += text.slice(lastIndex, match.offset);
          result += match.replacement;
          lastIndex = match.offset + 1;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      result += text.slice(lastIndex);
      return result;
    }
  };
  return src;
}

var srcExports = requireSrc();
var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

export { index as default };
