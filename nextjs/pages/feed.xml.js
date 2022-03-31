import { getAllPosts } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import React from 'react'

const Feed = () => {}
export default Feed

export async function getServerSideProps({ res }) {
  const posts = await getPosts()
  const feed = getFeed(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(feed)
  res.end()

  return {
    props: {},
  }
}

const getFeed = (posts) => {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title>Oiva Eskola</title>
    <description>Full stack web developer</description>
    <link>https://oivaeskola.fi/</link>
    <atom:link href="https://oivaeskola.fi/feed.xml" rel="self" type="application/rss+xml"/>
    <pubDate>Sun, 28 Jun 2020 18:39:40 +0300</pubDate>
    <lastBuildDate>Sun, 28 Jun 2020 18:39:40 +0300</lastBuildDate>
    <generator>Jekyll v3.8.7</generator>
    
      ${posts.map((post) => {
        return `<item>
        <title>${post.title}</title>
        <description>${description(post.content)}</description>
        <content>${escape(post.content)}</content>
        <pubDate>${post.date}</pubDate>
        <dc:creator/>
        <link>https://oivaeskola.fi/${post.slug}</link>
        <guid isPermaLink="false">https://oivaeskola.fi/${post.slug}</guid>
        ${
          post.tags ? post.tags.map((tag) => `<category>${tag}</category>`) : ''
        }
        ${
          post.categories
            ? post.categories.map(
                (category) => `<category>${category}</category>`
              )
            : ''
        }
        <slash:comments>${
          post.comments ? post.comments.length : ''
        }</slash:comments>
        </item>`
      })}
  </channel>
</rss>`
  return feed
}

async function getPosts() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content',
    'tags',
    'categories',
    'comments',
  ])

  const markdownPosts = []
  for (const post of allPosts) {
    post.rawContent = post.content
    post.content = await markdownToHtml(post.content || '')
    post.excerpt = await markdownToHtml(post.excerpt || '')
    markdownPosts.push(post)
  }

  return markdownPosts
}

function description(value, truncateLength = 450) {
  const div = document.createElement('div')
  div.innerHTML = value
  let text = div.textContent || div.innerText || ''
  text = text.replace(/'/g, '’').replace(/\n/g, '')
  if (text.length > truncateLength) {
    text = text.substring(0, truncateLength - 3) + '...'
  }
  return text
}

function escape(value) {
  return value.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '’')
}
