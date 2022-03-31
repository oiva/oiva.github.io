import fs from 'fs'
import { join } from 'path'
import { getPage } from 'next-page-tester'
import { screen, fireEvent } from '@testing-library/react'
import { getServerSideProps } from '../pages/feed.xml'

const testDirectory = join(process.cwd(), '__tests__')

describe('RSS Feed', () => {
  it('renders RSS feed', async () => {
    const fullPath = join(testDirectory, `old-feed.xml`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    let rendered, responseHeader, responseHeaderValue
    const res = {
      setHeader: (headerName, value) => {
        responseHeader = headerName
        responseHeaderValue = value
      },
      write: (content) => {
        rendered = content
      },
      end: () => {},
    }
    await getServerSideProps({ res })
    expect(responseHeader).toMatch('Content-Type')
    expect(responseHeaderValue).toMatch('text/xml')

    let offset = 0
    const step = 20
    while (offset < fileContents.length) {
      expect(rendered.substring(offset, offset + step)).toMatch(
        fileContents.substring(offset, offset + step)
      )
      offset += step
    }
  })
})
