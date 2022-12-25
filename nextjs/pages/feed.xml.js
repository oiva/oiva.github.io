import { getAllPosts } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import React from 'react'
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const Feed = () => {}
export default Feed

export async function getServerSideProps({ res }) {
  const posts = await getPosts()
  const feed = getFeed(posts)

  res.setHeader('Content-Type', 'application/xml')
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
        <content>${fixFeedProblems(post.content)}</content>
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
    post.dateString = getDateString(post, timeFormat)
    post.slug = getSlug(post.slug)
    markdownPosts.push(post)
  }

  return markdownPosts
}

function description(value, truncateLength = 450) {
  // replace line breaks with spaces: description is a single line text
  value = value.replace(/\n{1,}/g, ' ')
  let text

  if (typeof document !== 'undefined') {
    const div = document.createElement('div')
    div.innerHTML = value
    text = div.textContent || div.innerText || ''
  } else {
    const dom = new JSDOM(
      `<!DOCTYPE html><body><div id="main">${value}</div></body>`
    )
    text = dom.window.document.getElementById('main').textContent
  }
  text = text.replace(/'/g, '’').replace(/\n/g, '')

  if (text.length > truncateLength) {
    text = text.substring(0, truncateLength - 3) + '...'
  }

  // maximum only one space
  text = text.replace(/\s{2,}/g, ' ')

  return text
}

function getSlug(postSlug) {
  return postSlug.replace(/^(\d{4})-(\d{2})-(\d{2})-/, '$1/$2/$3/') + '/'
}

function getDateString(post, timeFormat) {
  const date = new Date(post.date)
  let dateStr = `${timeFormat.format(date)} ${zeropad(
    date.getHours()
  )}:${zeropad(date.getMinutes())}:${zeropad(date.getSeconds())} +0${
    date.getTimezoneOffset() / -60
  }00`

  dateStr = dateStr
    .replace('Wed, 8 Oct', 'Wed, 08 Oct')
    .replace('Wed, 2 Jan', 'Wed, 02 Jan')
    .replace('Sept', 'Sep')
  return dateStr
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
        .replace(/<a href(.*?)>/, '')
        .replace(/<\/a>/, '')
        .replace(/\s/g, '-')
        .replace(/[^a-zA-Z\-0-9]/g, '')
        .toLowerCase()
      return `<h${p1} id="${slug}">${p2}</h`
    }
  )
}

function createFootnoteLinks(content) {
  // create links to footnotes. Matches "[^1]" without colon
  content = content.replace(
    /\[\^(\d+)\](?!:)/g,
    '<sup id="fnref:$1"><a href="#fn:$1" class="footnote">$1</a></sup>'
  )
  // create footnotes. Matches <p>[^1]: ... </p>
  content = content.replace(
    /<p>\[\^(\d+)\]:(\s*)(.*?)<\/p>\n/gs,
    '\n    <li id="fn:$1">\n\n      <p>$3 <a href="#fnref:$1" class="reversefootnote">&#8617;</a></p>\n    </li>'
  )

  // wrap all footnotes in <ol> by greedily selecting from first <li> to last </li>
  content = content.replace(
    /[^\S\r\n]+(<li id="fn:1">)(.*)(<\/li>)/gs,
    '<div class="footnotes">\n  <ol>\n    $1$2$3\n  </ol>\n</div>'
  )
  content = content.replace(
    /\n<div class="footnotes">/g,
    '<div class="footnotes">'
  )
  return content
}

function fixFeedProblems(content) {
  content = idAttributes(content)
  content = createFootnoteLinks(content)

  // wrap img tags in <p> unless inside <figure>
  content = content.replace(
    /(?<!(<figure>\n?))(<img.*?\/>)\n/g,
    '\n<p>$2</p>\n'
  )

  content = content.replace(
    /\n<a id="more"><\/a>\n/g,
    '\n<p><a id="more"></a></p>\n'
  )

  // some post specific problems
  content = content
    .replace(/_\(David_Bowie_song\)/, '_\\(David_Bowie_song\\)')
    .replace('”<a href', '“<a href')
    .replace(/([moz|webkit])?allowfullscreen/g, '$1allowfullscreen=""')
    .replace(/:\)<\/p>\n?$/, ':)</p>\n\n')

  content = fixFeedWhiteSpace(content)
  content = escape(content)
  return content
}

function fixFeedWhiteSpace(content) {
  content = content
    // add line feeds between paragraph but not <script>, <span>, or <li>
    .replace(
      /\/(?!(script|li))([a-z1-9]*?)>\n(\s*?)<(?!(script|span|li))/g,
      '/$2>\n\n$3<'
    )
    .replace(/\n<li>/g, '\n  <li>') // indent <li> tags
    .replace(/\n\n\n<p><img/g, '\n\n<p><img') // remove double linefeed before <p><img>
    .replace(
      /\n\n(\s*)<figcaption(.*)<\/figcaption>\n/g,
      '\n$1<figcaption$2</figcaption>'
    )
    .replace(/<\/iframe>\s*<figcaption>/g, '</iframe>\n  <figcaption>')
    .replace(/<\/figcaption>\n\n<\/figure>/g, '</figcaption>\n</figure>')
    .replace(/<\/iframe>[^\S\r\n]+\n/g, '</iframe>\n')
    .replace(/\n\n<\/blockquote>/g, '\n</blockquote>')

  // remove extra line feed between </p> and </li> (seen in footnotes)
  content = content.replace(/<\/p>\n\n(\s*)<\/li>/g, '</p>\n$1</li>')

  // remove extra line feed between </ol> and </div> (seen in footnotes)
  content = content.replace(/<\/ol>\n\n(\s*)<\/div>/g, '</ol>\n$1</div>')

  // remove trailing spaces after </a>
  content = content.replace('</a>.  ', '</a>.')

  content = fixTableLineBreaks(content)
  return content
}

function escape(content) {
  content = content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return content
}

function fixTableLineBreaks(content) {
  return content
    .replace(/\n\n(\s*)<(td|th)(.*?)<\/(td|th)>\n\n/g, '\n$1<$2$3</$4>\n')
    .replace(/\n\n(\s*?)<(\/?)(thead|tbody)>\n\n/g, '\n$1<$2$3>\n')
    .replace(/<\/tr>\n\n/g, '</tr>\n')
}
