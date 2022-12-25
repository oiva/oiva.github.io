import React from 'react'
import { parse, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  try {
    const date = parse(dateString, 'yyyy-MM-dd HH:mm:ss xx', new Date())
    return <time dateTime={dateString}>{format(date, 'LLLL  d, yyyy')}</time>
  } catch (e) {
    return null
  }
}
