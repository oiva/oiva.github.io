import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-8 md:mb-16 sm:mx-0">
        {coverImage && (
          <CoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
        )}
      </div>
      <p className="post-meta">
        <DateFormatter dateString={date} />
      </p>
    </>
  )
}
