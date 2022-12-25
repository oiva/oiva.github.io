import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import React from 'react'

export default function Index({ allPosts = [], preview }) {
  const heroPosts = allPosts.slice(0, 5)
  const morePosts = allPosts.slice(5)
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
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
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
  for (const post of allPosts) {
    post.content = await markdownToHtml(post.content || '')
    post.excerpt = await markdownToHtml(post.excerpt || '')
    markdownPosts.push(post)
  }

  return {
    props: { allPosts: markdownPosts },
  }
}
