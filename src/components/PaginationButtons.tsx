import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Data } from '../utils/types'
import classes from '../css/PaginationButtons.module.css'

type Props = {
  isPreviousData: boolean
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  data: Data | undefined
}

const PaginationButtons: React.FC<Props> = ({
  isPreviousData,
  page,
  setPage,
  data,
}) => {
  return (
    <div className={classes.buttonComponent}>
      {data && (
        <>
          <button
            className='btn'
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 1}
          >
            <ArrowLeftOutlined />
          </button>{' '}
          <p className={classes.pageNumber}>
            Page {page} on {data.total_pages}
          </p>
          <button
            className='btn'
            onClick={() => {
              if (!isPreviousData && data.total_pages > page) {
                setPage((old) => old + 1)
              }
            }}
            disabled={isPreviousData || data.total_pages === page}
          >
            <ArrowRightOutlined />
          </button>
        </>
      )}
    </div>
  )
}

export default PaginationButtons
