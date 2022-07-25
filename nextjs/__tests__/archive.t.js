import fs from 'fs'
import { join } from 'path'
import { getPage } from 'next-page-tester'

const testDirectory = join(process.cwd(), '__tests__')

// describe('Archive page', () => {
//   return
//   it('renders archive page', async () => {
//     const { serverRenderToString } = await getPage({
//       route: '/archive/elama/',
//     })

//     const fullPath = join(testDirectory, `old-archive.html`)
//     let fileContents = fs.readFileSync(fullPath, 'utf8')

//     fileContents = fileContents.replace(/\n\n/g, '')
//     let rendered = serverRenderToString()
//     rendered = rendered.html.replace(/\n\n/g, '')

//     expect(rendered).toMatch(fileContents)
//   })
// })
