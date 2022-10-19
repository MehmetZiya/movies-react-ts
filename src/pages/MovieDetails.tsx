import { fetchMovieDetails } from '../utils/getItems'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import MovieDetail from '../components/MovieDetail'
import { MovieDetailsType } from '../utils/types'

const MovieDetails = () => {
  const params = useParams()
  const movieId: any = params.movieId
  const movId: number = parseInt(movieId)

  const { isLoading, isError, data, error } = useQuery<MovieDetailsType, Error>(
    ['movie_details', movId],
    () => fetchMovieDetails(movId)
  )

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return <div>{data && <MovieDetail data={data} />}</div>
}

export default MovieDetails
