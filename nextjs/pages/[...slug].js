import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import ErrorPage from 'next/error'
import markdownToHtml from '../lib/markdownToHtml'
import React from 'react'

const POSTS_PER_PAGE = 20
let totalPages

export default function Index(params) {
  const { allPosts = [], preview, slug, page } = params
  console.log(Object.keys(params))
  console.log({ slug, page })
  if (typeof slug === 'undefined' && (page == 1 || page > totalPages)) {
    console.log('empty slug', page)
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
  return {
    // Prerender the next pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: totalPages - 1 }).map(
      (_, i) => `/page${i + 2}`
    ),
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
  console.log('[...slug].js getStaticProps')
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
    props: { allPosts: paginatedPosts, page, totalPages, slug: params.slug },
  }
}
