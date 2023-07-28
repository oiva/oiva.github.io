import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { filenameToSlug, slugToFilename } from './urlParser'

const postsDirectory = join(process.cwd(), '../_posts'),
  singlePageDirectory = join(process.cwd(), '..')

export function getPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory)
  const paths = filenames.map(filenameToSlug)
  return paths
}

const getFileContents = (slug) => {
  const filename = slugToFilename(slug),
    singlePagePath = join(singlePageDirectory, filename, 'index.markdown'),
    postPath = join(postsDirectory, filename)

  if (fs.existsSync(singlePagePath)) {
    return fs.readFileSync(singlePagePath)
  }

  if (!filename.match(/^\d{4}-\d{2}-\d{2}/)) {
    return null
  }

  return fs.readFileSync(postPath, 'utf8')
}

export function getPostBySlug(slug, fields = []) {
  console.log('getPostBySlug', slug)
  const realSlug = slug.replace(/\.markdown$/, '')
  const fileContents = getFileContents(slug)
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
    } else if (field === 'content') {
      items[field] = content
    } else if (field === 'excerpt') {
      items[field] = excerpt
    } else if (field === 'formattedDate') {
      const date = new Date(data.date),
        options = { year: 'numeric', month: 'short', day: 'numeric' }
      items[field] = date.toLocaleDateString('en-EN', options)
    } else if (field === 'datetime') {
      items[field] = data.date
        .replace(' ', 'T')
        .replace(' +', '+')
        .replace(/00$/, ':00')
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
