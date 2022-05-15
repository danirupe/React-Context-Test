import React, { useState, useContext, useEffect } from 'react'
import { PhotosContext } from '../context/photos/PhotosContext'
import '../components/PhotosList.css'
import Loader from './Loader'

const PhotosList = () => {
  const { photos, fetchPhotos, loading } = useContext(PhotosContext)
  const [results, setResults] = useState(10)

  useEffect(() => {
    fetchPhotos(results)
  }, [results])

  const handlePhotos = () => {
    setResults((prevResults) => prevResults + 10)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div id='photos-list-container'>
      <div id='photos-list'>
        {photos.length &&
          photos.map((photo) => (
            <div className='photo' key={photo.char_id}>
              <img className='photo__img' src={photo.img} alt={photo.name} />
              <h3 className='photo__name'>{photo.name}</h3>
            </div>
          ))}
      </div>
      <button id='photos-button' onClick={handlePhotos}>
        Cargar más
      </button>
    </div>
  )
}

export default PhotosList
