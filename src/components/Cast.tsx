import { Link } from 'react-router-dom'
import classes from '../css/Cast.module.css'
import { CastType } from '../utils/types'

type Props = {
  actor: CastType
}

const Cast: React.FC<Props> = ({ actor }) => {
  const baseImgURL = 'https://image.tmdb.org/t/p/w200'
  return (
    <div className={classes.cast}>
      <Link to={`/actors/${actor.id}`} key={actor.id}>
        {actor.profile_path ? (
          <div className={classes.actorImg}>
            <img src={`${baseImgURL}${actor.profile_path}`} alt={actor.name} />
          </div>
        ) : (
          <div className={classes.actorImg}>
            <img
              src='https://via.placeholder.com/200x300?text=No+image+found'
              alt={actor.name}
            />
          </div>
        )}
        <div className={classes.actorName}>{actor.name}</div>
      </Link>
    </div>
  )
}

export default Cast
