const smartypants = require('@ngsctt/remark-smartypants')
import remark from 'remark'
import html from 'remark-html'
import { reporter } from 'vfile-reporter'

export default async function markdownToHtml(markdown, options) {
  if (typeof options === 'undefined') {
    options = {}
  }
  options.sanitize = false

  const result = await remark()
    .use(smartypants, { dashes: 'oldschool' })
    .use(html, options)
    .process(markdown)
  return result.toString()
}
