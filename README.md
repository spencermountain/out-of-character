<div align="center">
  <div><b>out-of-character</b></div>
  <div>this package has been renamed to <a href="https://npmjs.org/package/char-out">char-out</a></div>
</div>

It still works, and re-exports `char-out` - but please switch when you can:

```
npm uninstall out-of-character
npm install char-out
```

```js
import { detect, replace } from 'char-out'
```

The command-line tool is now called `char-out`, too.

See [char-out](https://github.com/spencermountain/char-out) for the docs.

MIT
