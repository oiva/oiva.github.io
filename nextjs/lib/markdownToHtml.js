const smartypants = require('@ngsctt/remark-smartypants')
import remark from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown, options) {
  const result = await remark()
    .use(smartypants)
    .use(html, options)
    .process(markdown)
  return result.toString()
}
