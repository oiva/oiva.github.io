import { Helmet } from 'react-helmet'

import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import PostBody from '../components/post-body'
import PostFooter from '../components/post-footer'
import PostHeader from '../components/post-header'

import { getAllPosts, getPostBySlug } from '../lib/api'
import Head from 'next/head'
import ErrorPage from 'next/error'
import markdownToHtml from '../lib/markdownToHtml'
import React from 'react'
import { async } from 'regenerator-runtime'

const POSTS_PER_PAGE = 20
let totalPages
const singlePages = ['about', 'b2w', 'scooter', 'sunnuntaimix']

export default function Index(params) {
  const { allPosts = [], preview, slug, page, post } = params

  console.log('slug', slug)

  if (typeof slug === 'undefined' && (page == 1 || page > totalPages)) {
    return <ErrorPage statusCode={404} />
  } else if (singlePages.includes(slug)) {
    console.log('is single page again')
    return (
      <Layout preview={preview}>
        <Helmet htmlAttributes={{ lang: post.lang }}>
          <meta charSet="utf-8" />
          <title>{post.title}</title>
          <meta name="description" content={post.excerpt}></meta>
          <link rel="canonical" href={`https://oivaeskola.fi/${post.slug}`} />
          {post.ogImage && (
            <meta property="og:image" content={post.ogImage.url} />
          )}
        </Helmet>
        <Container>
          <article className="">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
            <PostFooter slug={post.slug} title={post.title} lang={post.lang} />
          </article>
        </Container>
      </Layout>
    )
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
          <Pagination page={page} totalPages={totalPages} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  console.log('[...slug].js getStaticPaths')
  const allPosts = getAllPosts()
  if (typeof totalPages === 'undefined') {
    totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  }

  /**
   * This file handles two cases:
   * 1. pagination (/page2, /page3, /page4...)
   * 2. single pages under folders (hard coded for now)
   */
  const paginated = Array.from({ length: totalPages - 1 }).map(
    (_, i) => `/page${i + 2}`
  )

  return {
    // Prerender the next pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: paginated.concat(singlePages.map((page) => `/${page}`)),
    fallback: false,
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
  if (page > totalPages) {
  }
  const slug = params.slug[0]

  if (singlePages.includes(slug)) {
    console.log('is single page')
    return getPropsForSlug(slug)
  } else {
    return getPropsForPage(page, slug)
  }
}

async function getPropsForPage(page, slug) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content',
  ])

  const markdownPosts = []
  if (typeof totalPages === 'undefined') {
    totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  }

  for (const post of allPosts) {
    post.content = await markdownToHtml(post.content || '')
    post.excerpt = await markdownToHtml(post.excerpt || '')
    markdownPosts.push(post)
  }

  const paginatedPosts = markdownPosts.slice(
    POSTS_PER_PAGE * (page - 1),
    POSTS_PER_PAGE * page
  )

  return {
    props: { allPosts: paginatedPosts, page, totalPages, slug },
  }
}

async function getPropsForSlug(slug) {
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  if (!post) {
    throw Error('single page not found!')
  }

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
      slug,
    },
  }
}
