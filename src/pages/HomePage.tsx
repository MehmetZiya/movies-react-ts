import { Link } from 'react-router-dom'
import popularMovies from '../assets/popular.jpeg'
import nowPlaying from '../assets/nowPlaying.jpeg'
import toprated from '../assets/toprated.jpeg'
import genres from '../assets/genres.jpeg'

//styles
import classes from '../css/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={classes.home}>
      <div className={classes.homePageLinks}>
        <Link to='/popular'>
          <div className={classes.navigate}>
            <img
              src={popularMovies}
              alt='popular movies'
              className={classes.homePoster}
            />
            <p>Popular Films</p>
          </div>
        </Link>
      </div>
      <div className={classes.homePageLinks}>
        <Link to='/now_playing'>
          <div className={classes.navigate}>
            <img
              src={nowPlaying}
              alt='now_playing movies'
              className={classes.homePoster}
            />
            <p>Now Playing</p>
          </div>
        </Link>
      </div>
      <div className={classes.homePageLinks}>
        <Link to='/top_rated'>
          <div className={classes.navigate}>
            <img
              src={toprated}
              alt='top_rated movies'
              className={classes.homePoster}
            />
            <p>Top Rated</p>
          </div>
        </Link>
      </div>

      <div className={classes.homePageLinks}>
        {' '}
        <Link to='/genres'>
          <div className={classes.navigate}>
            <img src={genres} alt='genres' className={classes.homePoster} />
            <p>Genres</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
