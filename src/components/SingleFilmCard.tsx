import React from 'react'
import { Film } from '../utils/types'
import { useNavigate } from 'react-router-dom'
import classes from '../css/SingleFilmCard.module.css'
type Props = {
  movie: Film
}

const SingleFilmCard: React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate()
  const baseImgURL = 'https://image.tmdb.org/t/p/w400'
  const goDetailsPage = () => {
    navigate(`/movies/${movie.id}`)
  }
  return (
    <div className={classes.card}>
      {movie.poster_path ? (
        <div className={classes.image} onClick={goDetailsPage}>
          <img src={`${baseImgURL}${movie.poster_path}`} alt={movie.title} />
        </div>
      ) : (
        <div className={classes.image} onClick={goDetailsPage}>
          <img
            src='https://via.placeholder.com/200x300?text=No+poster+found'
            alt={movie.title}
          />
        </div>
      )}

      <div className={classes.movieInfo}>
        <h4>{movie.title}</h4>
        <p>
          <i>Popularity:</i> {movie.popularity}
        </p>
        <p>
          <i>Average Rate:</i> {movie.vote_average}
        </p>
      </div>
    </div>
  )
}

export default SingleFilmCard
