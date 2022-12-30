import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '../_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.markdown$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.markdown`)
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
