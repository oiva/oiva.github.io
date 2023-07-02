import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import ErrorPage from 'next/error'
import markdownToHtml from '../lib/markdownToHtml'
import React from 'react'

const intersperse = (arr, sep) => {
  if (arr.length === 0) {
    return []
  }

  return arr.slice(1).reduce(
    function (xs, x, i) {
      return xs.concat([sep, x])
    },
    [arr[0]]
  )
}

const getPagination = (page, totalPages) => {
  const pageNumber = (
    <span className="page_number">
      Page {page} / {totalPages}:
    </span>
  )
  const links = []
  if (page > 1) {
    links.push(
      <a className="previous" href={`page${page - 1}`}>
        previous page
      </a>
    )
  }
  if (page < totalPages) {
    links.push(
      <a className="next" href={`/page${page + 1}`}>
        next page
      </a>
    )
  }
  return (
    <div className="pagination">
      {pageNumber} {intersperse(links, ', ')}
    </div>
  )
}

export default function Index(params) {
  const { allPosts = [], preview, slug, page, totalPages } = params

  console.log({ slug, page })
  if (typeof slug === 'undefined' && page == 1) {
    return <ErrorPage statusCode={404} />
  }

  let heroPosts = allPosts.slice(0, 5)
  let morePosts = allPosts.slice(5)
  if (page >= 2) {
    heroPosts = []
    morePosts = allPosts
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Oiva Eskola</title>
        </Head>
        <Intro />
        <Header />
        <Container>
          {heroPosts.map((heroPost) => (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              content={heroPost.content}
              key={heroPost.slug}
            />
          ))}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          {getPagination(page, totalPages)}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 9 }).map((_, i) => `/page${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  let page = 1
  if (
    Array.isArray(params.slug) &&
    params.slug.length > 0 &&
    params.slug[0].match(/^page\d{1,}/)
  ) {
    page = parseInt(params.slug[0].replace('page', ''), 10)
  }
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content',
  ])

  const markdownPosts = [],
    postsPerPage = 20,
    totalPages = Math.ceil(allPosts.length / postsPerPage)

  for (const post of allPosts) {
    post.content = await markdownToHtml(post.content || '')
    post.excerpt = await markdownToHtml(post.excerpt || '')
    markdownPosts.push(post)
  }

  const totalPostCount = 20,
    paginatedPosts = markdownPosts.slice(
      postsPerPage * (page - 1),
      postsPerPage * page
    )

  return {
    props: { allPosts: paginatedPosts, totalPostCount, page, totalPages },
  }
}
