import fs from 'fs'
import { join } from 'path'
import { getServerSideProps } from '../pages/feed.xml'

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

describe('RSS Feed', () => {
  it('renders RSS feed with correct content type', async () => {
    const { responseHeader, responseHeaderValue } = await getFeed()
    expect(responseHeader).toMatch('Content-Type')
    expect(responseHeaderValue).toMatch('text/xml')
  })

  it('new and old feeds match', async () => {
    const fullPath = join(testDirectory, `old-feed.xml`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { rendered } = await getFeed()
    const parser = new XMLParser()

    let docOld = parser.parse(fileContents)
    let docNew = parser.parse(rendered)
    console.dir(docOld.rss.channel)
    for (const el in docOld.rss.channel.item) {
      const ret = expect(docOld.rss.channel.item[el]).toEqual(
        docNew.rss.channel.item[el]
      )
      console.dir(ret)
    }
    //expect(docNew).toEqual(docOld)
  })
})
