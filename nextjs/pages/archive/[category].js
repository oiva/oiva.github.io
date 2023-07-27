import React from 'react'

import Container from '../../components/container'
import Header from '../../components/header'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Head from 'next/head'

import { getAllPosts } from '../../lib/api'
import { async } from 'regenerator-runtime'

export default function Archive(params) {
  const { categoryPosts = [], category } = params
  const listItems = categoryPosts.map((post) => (
    <li key={post.slug}>
      <a
        href={`/${post.slug}`}
        dangerouslySetInnerHTML={{ __html: post.title }}
      ></a>{' '}
      <time pubdate="" dateTime={post.datetime}>
        {post.formattedDate}
      </time>
    </li>
  ))

  return (
    <>
      <Layout>
        <Head>
          <title>Oiva Eskola</title>
        </Head>
        <Container>
          <div className="archive">
            <h3 id={category}>Kategoria: {category}</h3>
            <ul>{listItems}</ul>
          </div>
        </Container>
      </Layout>
    </>
  )
}

const allPosts = getAllPosts([
  'title',
  'date',
  'formattedDate',
  'datetime',
  'slug',
  'author',
  'coverImage',
  'excerpt',
  'content',
  'categories',
])

export async function getStaticProps({ params }) {
  console.log('category ' + params.category)
  const categoryPosts = allPosts.filter((post) =>
    post.categories.includes(params.category)
  )

  return { props: { categoryPosts, category: params.category } }
}

export async function getStaticPaths() {
  const categories = allPosts.reduce((cat, post) => {
    post.categories.forEach((category) => {
      if (!cat.includes(category)) {
        cat.push(category)
      }
    })
    return cat
  }, [])

  return {
    paths: categories.map((category) => {
      return {
        params: {
          category,
        },
      }
    }),
    fallback: false,
  }
}
