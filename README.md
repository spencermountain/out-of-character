<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />

  <div>remove invisible unicode characters from a text</div>
  
  <!-- npm version -->
  <a href="https://npmjs.org/package/out-of-character">
    <img src="https://img.shields.io/npm/v/out-of-character.svg?style=flat-square" />
  </a>
  
  <!-- file size -->
  <a href="https://unpkg.com/out-of-character/builds/out-of-character.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/compromise/master/plugins/dates/builds/out-of-character.min.js" />
  </a>
   <hr/>
    <div>by <a href="https://spencermounta.in/">Spencer Kelly</a> and <a href="https://github.com/thegoatherder">Adam Tsiopani</a></div>
</div>

<div align="center">
  <code>npm install out-of-character</code>
</div>

Unicode has [dozens](https://character.construction/blanks) of characters that do not render any visible glyphs.

This is cool, for handling the cultural idiosyncracies of historical languages. 
More often though, their use is unintentional *(or [nefarious](https://330k.github.io/misc_tools/unicode_steganography.html)!)*, and these characters cause problems parsing text formats.

They are sometimes called *zero-width*, *ignorable*, or *tag-characters*.

This library helps spot, and remove these funboys, before they cause you some trouble:

### CLI
`npm install -g out-of-character`

test for any invisible characters in a file
`out-of-character ./path/to/file.txt --detect`

remove invisible characters from a file
`out-of-character ./path/to/file.txt`

use as part of a stream
`cat ./path/to/file.txt | out-of-character`

### JS API
```js
import {detect, remove} from 'out-of-character'

let str=''
```


### See also
* [printable-characters](https://github.com/xpl/printable-characters) - by Vit Gordon
* [unzalgo](https://github.com/kdex/unzalgo) - by kdex


MIT