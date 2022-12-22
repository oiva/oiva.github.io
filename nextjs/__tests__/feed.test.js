import { max } from 'date-fns'
import fs from 'fs'
import { join } from 'path'
import { getServerSideProps } from '../pages/feed.xml'
const util = require('util')
const { XMLParser } = require('fast-xml-parser')

const testDirectory = join(process.cwd(), '__tests__')

let rendered, responseHeader, responseHeaderValue

const getFeed = async () => {
  if (rendered) {
    return { rendered, responseHeader, responseHeaderValue }
  }
  const res = {
    setHeader: (headerName, value) => {
      responseHeader = headerName
      responseHeaderValue = value
    },
    write: (content) => (rendered = content),
    end: () => {},
  }
  await getServerSideProps({ res })
  return { rendered, responseHeader, responseHeaderValue }
}

const trimLines = (value) => {
  // removes spaces from end of lines
  return value.replace(/[^\S\r\n]+\n/g, '\n')
}

const getDifference = (s, t) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return `index ${i}: ${s[i]}: ${s.charCodeAt(i)} != ${t.charCodeAt(
        i
      )}\n\n(${s.substring(Math.max(i - 20, 0), i + 20)})\n\n(${t.substring(Math.max(i - 20, 0), i + 20)})`
    }
  }
}

expect.extend({
  toMatchField(received, oldValue, message) {
    if (received == oldValue || util.isDeepStrictEqual(received, oldValue)) {
      return {
        message: () =>
          `${message}\n\nreceived: "\x1b[32m${received}\x1b[37m"\n\nexpected: "\x1b[31m${oldValue}\x1b[37m"`,
        pass: true,
      }
    }
    return {
      message: () =>
        `${message}\n\nreceived: "\x1b[32m${received}\x1b[37m"\n\nexpected: "\x1b[31m${oldValue}\x1b[37m"\n\nDiff: "${getDifference(
          received,
          oldValue
        )}"`,
      pass: false,
    }
  },
})

describe('RSS Feed', () => {
  it('renders RSS feed with correct content type', async () => {
    const { responseHeader, responseHeaderValue } = await getFeed()
    expect(responseHeader).toMatch('Content-Type')
    expect(responseHeaderValue).toMatch('text/xml')
  })

  it('compare items', async () => {
    const fullPath = join(testDirectory, `old-feed.xml`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { rendered } = await getFeed()
    const parser = new XMLParser()

    let docOld = parser.parse(fileContents)
    let docNew = parser.parse(rendered)
    for (const item in docOld.rss.channel.item) {
      const oldItem = docOld.rss.channel.item[item]
      for (const field in oldItem) {
        let oldField = oldItem[field]
        let newField = docNew.rss.channel.item[item][field]
        if (oldField.trim) {
          oldField = oldField.trim()
        }
        if (newField.trim) {
          newField = newField.trim()
        }
        // remove trailing spaces from 'content' field
        if (field === 'content') {
          oldField = trimLines(oldField)
        }

        expect(newField).toMatchField(
          oldField,
          `field '${field}' does not match`
        )
      }
    }
  })
})
