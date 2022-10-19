import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { fetchMoviesByActor } from '../utils/getItems'
import ActorDetail from '../components/ActorDetail'
import classes from '../css/ActorDetails.module.css'
import { MovieByActorType } from '../utils/types'

const ActorsDetails = () => {
  const baseImgURL = 'https://image.tmdb.org/t/p/w500'

  const params = useParams()
  const actorId: any = params.actorId
  const actId: number = parseInt(actorId)
  const { isLoading, isError, data, error } = useQuery<MovieByActorType, Error>(
    ['movies_byActor', actId],
    () => fetchMoviesByActor(actId)
  )
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className={classes.actorDetailPage}>
      <div className={classes.actorDetail}>
        {data && data.profile_path ? (
          <div className={classes.profilImg}>
            <img src={`${baseImgURL}${data.profile_path}`} alt={data.name} />
          </div>
        ) : (
          <div className={classes.profilImg}>
            <img
              src={`https://via.placeholder.com/500x750?text=${data?.name}`}
              alt={data?.name}
            />
          </div>
        )}
        <div className={classes.actorInfo}>
          <div>
            <h3>{data?.name}</h3>
            <p>{data?.biography}</p>
            <p>
              {' '}
              <b>Place of Birth :</b> {data?.place_of_birth}
            </p>
            <p>
              {' '}
              <b>Birthday :</b> {data?.birthday}
            </p>
            <p>
              {' '}
              <b>Popularity :</b> {data?.popularity}
            </p>
            <p></p>
          </div>
        </div>
      </div>

      <h3>{data?.name}'s Movies</h3>
      {data && <ActorDetail data={data} />}
    </div>
  )
}

export default ActorsDetails
