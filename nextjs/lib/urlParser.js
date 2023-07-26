export function filenameToSlug(fileName) {
  // convert '2007-01-08-wlan-hotspotteja' -> '2007/01/08/wlan-hotspotteja'
  return fileName.replace(/^(\d{4})-(\d{2})-(\d{2})-/, '$1/$2/$3/')
}

export function slugToFilename(slug) {
  return slug.replace(/^(\d{4})\/(\d{2})\/(\d{2})\//, '$1-$2-$3-')
}

export function slugToParts(slug) {
  const urlYear = slug.substring(0, 4),
    urlMonth = slug.substring(5, 7),
    urlDate = slug.substring(8, 10),
    urlSlug = slug.substring(11)

  return { urlYear, urlMonth, urlDate, urlSlug }
}

export function partsToSlug(urlYear, urlMonth, urlDate, urlSlug) {
  return `${urlYear}-${urlMonth}-${urlDate}-${urlSlug}`
}
