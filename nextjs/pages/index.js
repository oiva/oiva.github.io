import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

import markdownToHtml from '../lib/markdownToHtml'
import React from 'react'

const POSTS_PER_PAGE = 20

export default function Index(params) {
  const { allPosts = [], preview, totalPages } = params
  console.log('index', allPosts.length)
  const heroPosts = allPosts.slice(0, 5),
    morePosts = allPosts.slice(5)

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
          <Pagination page={1} totalPages={totalPages} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  let page = 1
  console.log('index.js getStaticProps')
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
    totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)

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
    props: { allPosts: paginatedPosts, page, totalPages },
  }
}
