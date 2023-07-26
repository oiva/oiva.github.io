import React from 'react'

import Container from '../components/container'
import Header from '../components/header'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'

import { getAllPosts } from '../lib/api'

export default function Archive(params) {
  const { allPosts = [] } = params
  console.log({ allPosts })

  const postsGroupedByYear = allPosts.reduce((acc, post) => {
    const postYear = post.date.substr(0, 4)
    if (typeof acc[postYear] === 'undefined') {
      acc[postYear] = []
    }
    acc[postYear].push(post)
    return acc
  }, {})

  console.log(postsGroupedByYear)

  const listItems = []
  Object.keys(postsGroupedByYear)
    .reverse()
    .forEach((year) => {
      listItems.push(<h2 key={`year-${year}`}>{year}</h2>)
      postsGroupedByYear[year].map((post) => {
        listItems.push(
          <li key={post.slug}>
            <a href={post.slug}>{post.title}</a>
            {post.date}
          </li>
        )
      })
    })

  return (
    <>
      <Layout>
        <Head>
          <title>Oiva Eskola</title>
        </Head>
        <Intro />
        <Header />
        <Container>
          <div className="archive">
            <ul>{listItems}</ul>
          </div>
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

  return { props: { allPosts } }
}
