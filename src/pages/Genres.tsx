import React from 'react'
import { useQuery } from 'react-query'
import { fetchGenres } from '../utils/getItems'
import classes from '../css/Genres.module.css'
import { useNavigate } from 'react-router-dom'
import { GenresData } from '../utils/types'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    genreid?: number
  }
}
const Genres = () => {
  const { data, error, isError } = useQuery<GenresData, Error>(['genre'], () =>
    fetchGenres()
  )

  const navigate = useNavigate()
  const handleClick = (event: any): void => {
    const genreId = event.target.getAttribute('genreid')
    const genreName = event.target.innerText
    navigate(`/genres/${genreId}/${genreName}`)
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <>
      <h3 className={classes.genresHeader}>Select a genre :</h3>
      <div className={classes.genres}>
        {data &&
          data.genres.map((genre) => (
            <div
              key={genre.id}
              genreid={genre.id}
              onClick={handleClick}
              className={classes.genre}
            >
              {genre.name}
            </div>
          ))}
      </div>
    </>
  )
}

export default Genres
