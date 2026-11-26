<!--
#### [unreleased]

-->

#### 3.0.0 [Nov 2026]

- **[change]** - package renamed from `out-of-character` to `char-out`
- **[change]** - use native nodev22 glob
- **[change]** - Node 20 is no longer supported
- **[change]** - Exit non-zero when hidden characters are found
- **[change]** - detect() always returns an array
- **[change]** - Multiple paths in CLI
- **[change]** - `--test, --detect` and `--remove` CLI flags removed
- **[change]** - unminified builds/out-of-character.js is no longer shipped
- **[new]** - 4,006 new hidden characters
- - Supplementary variation selectors
- - Unassigned
- - Egyptian hieroglyph format controls
- **[change]** - now zero dependencies

#### 2.3.0 [Jul 2026]

- **[fix]** `replace()` no longer leaves a lone surrogate behind when removing an astral character (kaithi, duployan, musical symbols)
- **[fix]** `require('out-of-character')` works again — added a proper commonjs build (`builds/out-of-character.cjs`)
- **[fix]** cli `--remove` actually removes, `--recursive` actually recurses (and no longer disables `--replace`)
- **[fix]** narrow no-break space (U+202F) is replaced with a space, instead of being deleted
- **[new]** detect bidirectional control characters (U+202A-U+202E, U+2066-U+2069) — the 'trojan source' attack
- **[new]** detect tag characters (U+E0000-U+E007F) used for steganography, while preserving emoji tag-sequences like the england flag
- **[new]** detect stray variation selectors (U+FE00-U+FE0F, U+180B-U+180F), while preserving emoji, keycap, cjk, and mongolian sequences
- **[new]** detect interlinear annotation characters (U+FFF9-U+FFFB)
- **[new]** `detect()` and `replace()` accept `{ exclude: ['Bidi', 'U+200B'] }` to leave some characters alone
- **[new]** results include a `type` field ('Invisible', 'Bidi', 'Tag', etc)
- **[fix]** improved emoji handling using unicode property escapes — zero-width joiners next to non-emoji astral characters are now caught
- **[fix]** richer typescript types, and a `.d.cts` for commonjs consumers
- **[change]** sourcemaps are disabled for the umd build
- **[update]** cleanup dependencies

#### 2.2.0

- update dependencies

#### 2.1.0

- update dependencies

#### 2.0.1

- performance improvements

#### 2.0.0

- **BREAKING CHANGE**: dropped support for Node <=18
- removed Babel to get rid of inefficient polyfills
- performance improvements

#### 1.2.4

- performance improvements

#### 1.2.3

- update deps
- cosmetic changes
- performance improvements

#### 1.2.2

- fix/nbsp
- cosmetic changes
- update deps

#### 1.2.1

- typescript fix
- update deps

#### 1.1.0

- allow invisible characters in emojis

#### 1.0.0

- support testing a directory of files
- require --replace flag before making any edits

#### 0.0.1

-woop woop
