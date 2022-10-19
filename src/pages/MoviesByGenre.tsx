import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useUrlSearchParams } from 'use-url-search-params'
import { fetchMoviesByGenre } from '../utils/getItems'
import SingleFilmCard from '../components/SingleFilmCard'
import PaginationButtons from '../components/PaginationButtons'
import { Data } from '../utils/types'

const MoviesByGenre = () => {
  const params = useParams()
  const genreId: any = params.genreId
  const genId = parseInt(genreId)
  const genreName = params.genreName

  const [pageParams, setPageParams] = useUrlSearchParams()
  const [page, setPage] = useState(1)
  const { data, error, isError, isLoading, isPreviousData } = useQuery<
    Data,
    Error
  >(['genreMovies', genId, page], () => fetchMoviesByGenre(genId, page))

  useEffect(() => {
    setPageParams({ ...pageParams, page })
  }, [page, pageParams, setPageParams])

  if (isLoading) {
    return <span>Loading Movies...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <div>
      {<h2>Discover {genreName} Movies...</h2>}
      <PaginationButtons
        isPreviousData={isPreviousData}
        data={data}
        page={page}
        setPage={setPage}
      />
      {data?.results && genreId && (
        <div className='movieCard-Box'>
          {data.results
            .filter((movies) => movies.adult === false)
            .map((movie) => (
              <SingleFilmCard key={movie.id} movie={movie} />
            ))}
        </div>
      )}
      <PaginationButtons
        isPreviousData={isPreviousData}
        data={data}
        page={page}
        setPage={setPage}
      />
    </div>
  )
}

export default MoviesByGenre
