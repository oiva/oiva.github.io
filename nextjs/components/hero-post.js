import React from 'react'
import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostBody from '../components/post-body'
import Link from 'next/link'
import { slugToParts } from '../lib/urlParser'

export default function HeroPost({
  title,
  coverImage,
  date,
  content,
  author,
  slug,
}) {
  const { urlYear, urlMonth, urlDate, urlSlug } = slugToParts(slug)

  return (
    <li className="full-post">
      <span className="post-meta">
        <DateFormatter dateString={date} />
      </span>
      <div className="">
        {coverImage && (
          <CoverImage
            title={title}
            src={coverImage}
            slug={slug}
            height={620}
            width={1240}
          />
        )}
      </div>
      <div>
        <h2>
          <Link
            as={`/${urlYear}/${urlMonth}/${urlDate}/${urlSlug}`}
            href="/[urlYear]/[urlMonth]/[urlDate]/[urlSlug]"
          >
            <a className="post-link">{title}</a>
          </Link>
        </h2>
        <PostBody content={content} />
      </div>
    </li>
  )
}
