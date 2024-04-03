const cut = (url, width, height) => {
  if (!url) {
    return ''
  }
  if (!width || !height) {
    return url
  }
  const cutKey = `2/w/${width}/h/${height}`
  return url.replace(/(imageView2\/)(.*)(\/format\/)/g, `$1${cutKey}$3`)
}

const removeCut = (url) => {
  if (!url) {
    return ''
  }
  const cutKey = '0'
  return url.replace(/(imageView2\/)(.*)(\/format\/)/g, `$1${cutKey}$3`)
}

const toWebp = (url) => {
  if (!url) {
    return ''
  }
  let base = url
  base += '?imageView2/0/format/webp/interlace/1/q/70'
  return base
}

export const fn = {
  cut,
  removeCut,
  toWebp
}