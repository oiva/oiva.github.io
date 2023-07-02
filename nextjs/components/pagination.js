import React from 'react'

const intersperse = (arr, sep) => {
  if (arr.length === 0) {
    return []
  }

  return arr.slice(1).reduce(
    function (xs, x, i) {
      return xs.concat([sep, x])
    },
    [arr[0]]
  )
}

export default function Pagination({ page, totalPages }) {
  if (page > totalPages) {
    throw Error('page number too big')
  }
  const pageNumber = (
    <span className="page_number">
      Page {page} / {totalPages}:
    </span>
  )
  const links = []
  if (page > 1) {
    links.push(
      <a className="previous" href={`page${page - 1}`}>
        previous page
      </a>
    )
  }
  if (page < totalPages) {
    links.push(
      <a className="next" href={`/page${page + 1}`}>
        next page
      </a>
    )
  }
  return (
    <div className="pagination">
      {pageNumber} {intersperse(links, ', ')}
    </div>
  )
}
