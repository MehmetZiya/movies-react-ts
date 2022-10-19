import { useEffect, useState } from 'react'
import Cast from './Cast'
import { useNavigate } from 'react-router-dom'
import classes from '../css/MovieDetail.module.css'
import { CastType, MovieDetailsType } from '../utils/types'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    genreid?: number
  }
}
type Props = {
  data: MovieDetailsType
}

const MovieDetail: React.FC<Props> = ({ data }) => {
  const baseImgURL = 'https://image.tmdb.org/t/p/w500'
  const [cast, setCast] = useState<CastType[]>()
  const [number, setNumber] = useState(8)
  const navigate = useNavigate()
  const handleClick = () => {
    setNumber(number + 8)
  }
  const goMoviesByGenre = (e: any) => {
    const genreId = e.target.getAttribute('genreid')
    const genreName = e.target.innerText
    navigate(`/genres/${genreId}/${genreName}`)
  }

  useEffect(() => {
    // showing only 8 actors for the first render
    if (data.credits.cast) {
      const showing = data.credits.cast.slice(0, number)
      setCast(showing)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number])

  return (
    <div className={classes.movieDetailPage}>
      <div className={classes.movieDetail}>
        {data.poster_path ? (
          <div className={classes.poster}>
            <img src={`${baseImgURL}${data.poster_path}`} alt={data.title} />
          </div>
        ) : (
          <div className={classes.poster}>
            <img
              src={`https://via.placeholder.com/500x750?text=${data.title}`}
              alt={data.title}
            />
          </div>
        )}
        <div className={classes.movieInfo}>
          <div>
            <h3>{data.title}</h3>
            <p>{data.overview}</p>
            <p>
              {' '}
              <b>Average Vote :</b> {data.vote_average}
            </p>
            <p>
              {' '}
              <b>Run Time :</b> {data.runtime} min.
            </p>
            <p>
              {' '}
              <b>Release Date :</b> {data.release_date}
            </p>
            <p>
              <b>Genres : </b>
            </p>
            <div className={classes.genreLinksBox}>
              {data.genres &&
                data.genres.map((genre) => (
                  <span
                    key={genre.id}
                    genreid={genre.id}
                    className={classes.genreLinks}
                    onClick={goMoviesByGenre}
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          {data.backdrop_path ? (
            <div className={classes.backDrop}>
              <img
                src={`${baseImgURL}${data.backdrop_path}`}
                alt={data.title}
              />
            </div>
          ) : (
            <div className={classes.backDrop}>
              <img
                src={`https://via.placeholder.com/500x281?text=${data.title}`}
                alt={data.title}
              />
            </div>
          )}
        </div>
      </div>

      <div className={classes.castWrapper}>
        <h3>Actors</h3>
        <div className={classes.cast}>
          {cast?.map((actor, i) => (
            <Cast key={i} actor={actor} />
          ))}
        </div>

        {cast && cast.length < data.credits.cast.length && (
          <div className='centered'>
            <button className='btn' onClick={handleClick}>
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieDetail
