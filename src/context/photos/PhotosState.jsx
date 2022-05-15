import React, { useEffect, useState } from 'react'
import { PhotosContext } from './PhotosContext.js'

const PhotosState = (props) => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPhotos = (results = 10) => {
    setLoading(true)
    fetch(
      `https://www.breakingbadapi.com/api/characters/?limit=${results}&offset=offset`
    )
      .then((response) => response.json())
      .then((response) => setPhotos(response))
      .catch((err) => console.error(err))
      .then(() => setLoading(false))
  }

  return (
    <PhotosContext.Provider
      value={{
        photos,
        fetchPhotos,
        loading
      }}
    >
      {props.children}
    </PhotosContext.Provider>
  )
}

export default PhotosState
