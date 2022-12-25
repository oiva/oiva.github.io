import React from 'react'
import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <li className="has-excerpt">
      <div className="mb-5">
        {coverImage && (
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={278}
            width={556}
          />
        )}
      </div>
      <span className="post-meta">
        <DateFormatter dateString={date} />
      </span>
      <h2 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h2>

      <p
        className="post-excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </li>
  )
}
