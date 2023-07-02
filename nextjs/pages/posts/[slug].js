import { useRouter } from 'next/router'
import React from 'react'
import { Helmet } from 'react-helmet'

import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostFooter from '../../components/post-footer'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
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
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
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
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  

  const content = await markdownToHtml(post.content || '')

  if (post.content == '') {
    throw Error('empty content')
  }

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
