<div align="center">
  <div><b>out-of-character</b></div>
  <div>remove invisible unicode characters from text</div>
  <div>
    <img width="300" height="8" alt="image" src="https://github.com/user-attachments/assets/a8454327-add3-4486-ad7d-c24be50f9d8d" />
  </div>
  <a href="https://npmjs.org/package/out-of-character">
    <img src="https://img.shields.io/npm/v/out-of-character.svg?style=flat-square" />
  </a>
  <a href="https://bundlephobia.com/result?p=out-of-character">
    <img src="https://badgen.net/bundlejs/min/out-of-character" />
  </a>
  <div align="center">
    <code>npm install out-of-character</code>
  </div>
</div>
<!-- spacer -->
<img height="20px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

Unicode has [a few-dozen](https://character.construction/blanks) characters that _do not render anything_, on purpose.

This is _cool_ for cultural idiosyncracies in historical languages.
More often though, their use is unintentional _(or [nefarious!](https://330k.github.io/misc_tools/unicode_steganography.html))_, and these characters end-up causing problems parsing text formats.

<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
<!-- spacer -->

these are sometimes called _'zero-width'_, _'ignorable'_, or _'tag-characters'_

<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
<!-- spacer -->

This library helps spot and remove these funboys, before they cause some trouble.

It also catches _bidirectional control characters_ (the ['Trojan Source'](https://trojansource.codes/) trick), _tag characters_ (invisible letters used for [steganography](https://330k.github.io/misc_tools/unicode_steganography.html)), and _stray variation selectors_ — while leaving legitimate emoji, keycap, CJK, and Mongolian sequences alone.

Please remember that some text is meant to have _Khmer-vowels_, or _Kaithi-alphabet_ characters.

<!-- spacer -->
<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

<img width="655" alt="image" src="https://user-images.githubusercontent.com/399657/107824755-009c8100-6d50-11eb-8ac3-a5c241335a15.png">

## CLI

<di>
  <code>npm install -g out-of-character</code>
</di>

detect invisible characters in all files in a directory

```bash
out-of-character ./path/to/dir
```

remove them from all files in a directory

```bash
out-of-character ./path/to/dir --replace
```

include files in nested sub-directories

```bash
out-of-character ./path/to/dir --replace --recursive
```

---

detect invisible characters in a file

```bash
out-of-character ./path/to/file.txt
```

remove invisible characters from a file

```bash
out-of-character ./path/to/file.txt --replace
```

_(`--remove` is an alias for `--replace`, and glob patterns like `./src/**/*.js` work too)_

<!-- spacer -->
<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

## Javascript API

```js
import { detect, replace } from 'out-of-character'

let str = 'noth­ing s͏neak឵y h᠎ere' //actually, there is.
console.log(detect(str))
/*  😮  😮  😮
[
  {
    name: 'SOFT HYPHEN',
    code: 'U+00AD',
    type: 'Invisible',
    offset: 4,
    replacement: ''
  },
  {
    name: 'COMBINING GRAPHEME JOINER',
    code: 'U+034F',
    type: 'Invisible',
    offset: 10,
    replacement: ''
  },
  {
    name: 'KHMER VOWEL INHERENT AA',
    code: 'U+17B5',
    type: 'Invisible',
    offset: 15,
    replacement: ''
  },
  {
    name: 'MONGOLIAN VOWEL SEPARATOR',
    code: 'U+180E',
    type: 'Invisible',
    offset: 19,
    replacement: ''
  }
]*/

// get rid of them!
let after = replace(str)
console.log(str !== after)
// true
```

`detect` returns `null` when the text is clean. Offsets are UTF-16 code-unit indices, like `String.prototype.indexOf`.

Both functions accept an options object, to leave some characters alone — by code, or by type:

```js
// keep bidi controls, and the zero-width space
replace(str, { exclude: ['Bidi', 'U+200B'] })

// types are: 'Invisible', 'Whitespace', 'Bidi', 'Variation', 'Tag',
//   'Separator', 'Line Break', and 'Visible'
```

fixing/detecting in files can be done like:

```js
const fs = require('fs')
const { detect, replace } = require('out-of-character')

let text = fs.readFileSync('./some-file.txt').toString()
console.log(detect(text))
// yikes.

// ok, fix it
fs.writeFileSync('./some-file.txt', replace(text))

// ok, double-check it.
let goodNow = fs.readFileSync('./some-file.txt').toString()
console.log(detect(goodNow))
// fhew.
```

<!-- spacer -->
<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

### See also

- [printable-characters](https://github.com/xpl/printable-characters) - by Vit Gordon
- [unzalgo](https://github.com/kdex/unzalgo) - by kdex

<!-- spacer -->
<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

_Thank you to [character.construction/blanks](https://character.construction/blanks) by [Jan Lelis](https://janlelis.com/)_

_and [a tale of characters in Unicode](https://www.contentful.com/blog/2016/12/06/unicode-javascript-and-the-emoji-family/) by [Stefan Judis](https://github.com/stefanjudis)_

MIT - PRs welcomed
