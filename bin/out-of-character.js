#!/usr/bin/env node
// forward to the char-out cli, which sits beside its builds dir
const entry = import.meta.resolve('char-out')
await import(new URL('../bin/char-out.js', entry).href)
