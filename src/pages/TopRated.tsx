import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import SingleFilmCard from '../components/SingleFilmCard'
import PaginationButtons from '../components/PaginationButtons'
import { fetchTopRated } from '../utils/getItems'
import { useUrlSearchParams } from 'use-url-search-params'
import { Data } from '../utils/types'

const TopRated = () => {
  const [pageParams, setPageParams] = useUrlSearchParams()
  const [page, setPage] = useState(1)
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery<Data, Error>(['toplist', page], () => fetchTopRated(page), {
      keepPreviousData: true,
    })
  useEffect(() => {
    setPageParams({ ...pageParams, page })
  }, [page, pageParams, setPageParams])
  return (
    <div>
      <h2>Top Rated Movies</h2>
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
          {data.results.map((movie) => (
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

export default TopRated
