import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ActorsDetails from './pages/ActorDetails'
import Genres from './pages/Genres'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails'
import MoviesByGenre from './pages/MoviesByGenre'
import NowPlaying from './pages/NowPlaying'
import PopularFilms from './pages/PopularFilms'
import TopRated from './pages/TopRated'
const App = () => {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/popular' element={<PopularFilms />} />
          <Route path='/now_playing' element={<NowPlaying />} />
          <Route path='/top_rated' element={<TopRated />} />
          <Route path='/genres' element={<Genres />} />
          <Route
            path='/genres/:genreId/:genreName'
            element={<MoviesByGenre />}
          />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
          <Route path='/actors/:actorId' element={<ActorsDetails />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
