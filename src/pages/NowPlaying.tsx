import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import SingleFilmCard from '../components/SingleFilmCard'
import PaginationButtons from '../components/PaginationButtons'
import { fetchNowPlaying } from '../utils/getItems'
import { useUrlSearchParams } from 'use-url-search-params'
import { Data } from '../utils/types'

const NowPlaying = () => {
  const [pageParams, setPageParams] = useUrlSearchParams()
  const [page, setPage] = useState(1)

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery<Data, Error>(['now_playing', page], () => fetchNowPlaying(page), {
      keepPreviousData: true,
    })

  useEffect(() => {
    setPageParams({ ...pageParams, page })
  }, [page, pageParams, setPageParams])
  return (
    <div>
      <h2>Now Playing</h2>
      {isLoading && <div>Loading data</div>}
      {isError && <div>{error.message}</div>}
      <PaginationButtons
        isPreviousData={isPreviousData}
        data={data}
        page={page}
        setPage={setPage}
      />
      {data && (
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
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  )
}

export default NowPlaying
