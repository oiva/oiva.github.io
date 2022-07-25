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

expect.extend({
  toMatchField(received, oldValue, message) {
    if (util.isDeepStrictEqual(received, oldValue)) {
      return {
        message: () =>
          `${message}\n\nreceived: \x1b[32m${received}\n\n\x1b[37mexpected: \x1b[31m${oldValue}`,
        pass: true,
      }
    }
    return {
      message: () =>
        `${message}\n\nreceived: \x1b[32m${received}\n\n\x1b[37mexpected: \x1b[31m${oldValue}`,
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
        const oldField = oldItem[field]
        const newField = docNew.rss.channel.item[item][field]
        expect(newField).toMatchField(
          oldField,
          `field '${field}' does not match`
        )
      }
    }
  })
})
