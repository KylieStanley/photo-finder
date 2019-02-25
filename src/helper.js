export const cleanPhotos = results => {
  return results.map(result => {
    return {
      id: result.id,
      image: result.urls.small
    }
  })
}

export const parseQueryString = string => {
  return string.replace(' ', '%20')
}
