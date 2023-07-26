import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { filenameToSlug, slugToFilename } from './urlParser'

const postsDirectory = join(process.cwd(), '../_posts')

export function getPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory)
  const paths = filenames.map(filenameToSlug)
  return paths
}

export function getPostBySlug(slug, fields = []) {
  console.log('getPostBySlug: ' + slug)
  const realSlug = slug.replace(/\.markdown$/, ''),
    fileName = slugToFilename(realSlug)

  if (!fileName.match(/^\d{4}-\d{2}-\d{2}/)) {
    return null
  }

  const fullPath = join(postsDirectory, `${fileName}.markdown`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterOptions = {
    excerpt: true,
    excerpt_separator: '<a id="more"></a>',
  }
  const { data, excerpt, content, isEmpty } = matter(
    fileContents,
    matterOptions
  )
  const items = {}

  const commonFields = [
    'content',
    'status',
    'published',
    'date',
    'lang',
    'excerpt',
  ]
  for (const field of commonFields) {
    if (!fields.includes(field)) {
      fields.push(field)
    }
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'excerpt') {
      items[field] = excerpt
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }

    if (field === 'lang' && typeof items['lang'] === 'undefined') {
      if (data['date'] < '2014-10-08 00:00:00 +0200') {
        items['lang'] = 'fi'
      } else {
        items['lang'] = 'en'
      }
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // remove previews
    .filter((post) => post.published)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}
