/** a hidden character found in the text */
export interface FoundCharacter {
  /** unicode name, like 'ZERO WIDTH SPACE' */
  name: string
  /** unicode code point, like 'U+200B' */
  code: string
  /** category, like 'Invisible', 'Whitespace', 'Bidi', 'Variation', or 'Tag' */
  type: string
  /** UTF-16 code-unit index into the input, like String.prototype.indexOf */
  offset: number
  /** what replace() will swap this character with — often an empty string */
  replacement: string
}

export interface Options {
  /** codes (like 'U+202E') or types (like 'Bidi') to leave alone */
  exclude?: string[]
}

/** find the invisible characters in this text, or null if there are none */
export function detect(input: string, opts?: Options): FoundCharacter[] | null

/** remove invisible characters from the text */
export function replace(input: string, opts?: Options): string
