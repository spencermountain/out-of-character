/* eslint-disable no-console */
import raw from '../data/characters-raw.js'

// Lists hidden-ish characters in the latest Unicode release that are missing
// from data/characters-raw.js. It only prints candidates — adding one is a judgement call.
const base = 'https://www.unicode.org/Public/UCD/latest/ucd/'
const props = ['Default_Ignorable_Code_Point', 'Bidi_Control', 'Variation_Selector', 'White_Space']
// format controls, and space/line/paragraph separators
const cats = ['Cf', 'Zs', 'Zl', 'Zp']

const toHex = (num) => 'U+' + num.toString(16).toUpperCase().padStart(4, '0')
const have = new Set(raw.map((obj) => parseInt(obj.code.slice(2), 16)))
// ordinary whitespace, and the tag block that src/match.js covers as a range
const isHandled = (num) => have.has(num) || [0x9, 0xa, 0xd, 0x20].includes(num) || (num >= 0xe0000 && num <= 0xe007f)

const getLines = async (file) => {
  const res = await fetch(base + file)
  if (!res.ok) {
    throw new Error(`${file}: ${res.status}`)
  }
  return (await res.text()).split('\n')
}

const names = new Map()
const found = new Map() // code point -> reasons
const add = (num, why) => {
  if (!found.has(num)) {
    found.set(num, [])
  }
  found.get(num).push(why)
}

const [unicodeData, propList, derived] = await Promise.all(
  ['UnicodeData.txt', 'PropList.txt', 'DerivedCoreProperties.txt'].map(getLines)
)

// UnicodeData rows are 'code;name;category;...'
unicodeData.forEach((line) => {
  const fields = line.split(';')
  if (fields.length > 2) {
    const num = parseInt(fields[0], 16)
    names.set(num, fields[1])
    if (cats.includes(fields[2])) {
      add(num, fields[2])
    }
  }
})

// property rows are '0009..000D ; White_Space # ...'
propList.concat(derived).forEach((line) => {
  const m = line.match(/^([0-9A-F]+)(?:\.\.([0-9A-F]+))?\s*;\s*(\w+)/)
  if (m !== null && props.includes(m[3])) {
    const from = parseInt(m[1], 16)
    const to = parseInt(m[2] || m[1], 16)
    for (let num = from; num <= to; num += 1) {
      add(num, m[3])
    }
  }
})

// collapse neighbours with the same reasons into one range
const runs = []
const missing = [...found.keys()].filter((num) => !isHandled(num)).sort((a, b) => a - b)
missing.forEach((num) => {
  const why = found.get(num).join(', ')
  const last = runs[runs.length - 1]
  if (last !== undefined && last.to === num - 1 && last.why === why) {
    last.to = num
  } else {
    runs.push({ from: num, to: num, why })
  }
})

console.log(`${missing.length} candidates missing from data/characters-raw.js\n`)
runs.forEach((run) => {
  const name = names.get(run.from) || '<unassigned>'
  if (run.from === run.to) {
    console.log(`${toHex(run.from)}  ${name}  [${run.why}]`)
  } else {
    const count = run.to - run.from + 1
    console.log(`${toHex(run.from)}..${toHex(run.to)}  ${name}… (${count})  [${run.why}]`)
  }
})
