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
        <content>${escape(
          fixFeedProblems(idAttributes(post.content))
        )}</content>
        <pubDate>${post.dateString}</pubDate>
        <dc:creator>Oiva Eskola</dc:creator>
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
  const timeFormat = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  for (const post of allPosts) {
    post.rawContent = post.content
    post.content = await markdownToHtml(post.content || '', {
      sanitize: false,
      collapseEmptyAttributes: false,
    })
    post.excerpt = await markdownToHtml(post.excerpt || '')
    const date = new Date(post.date)
    post.dateString = `${timeFormat.format(date)} ${zeropad(
      date.getHours()
    )}:${zeropad(date.getMinutes())}:${zeropad(date.getSeconds())} +0${
      date.getTimezoneOffset() / -60
    }00`
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

function zeropad(num) {
  if (num < 10) return `0${num}`
  return num
}

function idAttributes(value) {
  return value.replace(
    /<h([1-6])>(.*?)<\/h/g,
    (match, p1, p2, offset, string) => {
      const slug = p2
        .replace(/\s/g, '-')
        .replace(/[^a-zA-Z\-]/g, '')
        .toLowerCase()
      return `<h${p1} id="${slug}">${p2}</h`
    }
  )
}

function fixFeedProblems(value) {
  return value
    .replace(/_\(David_Bowie_song\)/, '_\\(David_Bowie_song\\)')
    .replace('”<a href', '“<a href')
    .replace(/allowfullscreen>/g, 'allowfullscreen="">')
}

function escape(value) {
  return value
    .replace(/\n/g, '\n\n')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
