import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchPopularFilms } from '../utils/getItems'
import { Data } from '../utils/types'
import { useUrlSearchParams } from 'use-url-search-params'
import SingleFilmCard from '../components/SingleFilmCard'
import PaginationButtons from '../components/PaginationButtons'

const PopularFilms = () => {
  const [pageParams, setPageParams] = useUrlSearchParams()
  const [page, setPage] = useState<number>(1)

  const { isLoading, data, isFetching, isPreviousData, isError, error } =
    useQuery<Data, Error>(['popular', page], () => fetchPopularFilms(page), {
      keepPreviousData: true,
    })

  useEffect(() => {
    setPageParams({ ...pageParams, page })
  }, [page, pageParams, setPageParams])

  return (
    <div>
      <h2>Popular Films</h2>
      {isLoading && <div>Loading data</div>}
      {isError && <div>{error?.message}</div>}
      <PaginationButtons
        isPreviousData={isPreviousData}
        data={data}
        page={page}
        setPage={setPage}
      />
      {data?.results && (
        <div className='movieCard-Box'>
          {data.results
            .filter((movies) => movies.adult === false)
            .map((movie) => (
              <SingleFilmCard movie={movie} key={movie.id} />
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

export default PopularFilms
