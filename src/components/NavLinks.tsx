import { NavLink } from 'react-router-dom'

//styles
import classes from '../css/Navbar.module.css'
let activeStyle = {
  textDecoration: 'underline',
}

type Props = {
  handleLinkClick: () => void
}

const NavLinks: React.FC<Props> = ({ handleLinkClick }) => {
  return (
    <>
      <NavLink
        onClick={handleLinkClick}
        to='/popular'
        className={classes.navItem}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Popular Films
      </NavLink>

      <NavLink
        onClick={handleLinkClick}
        to='/now_playing'
        className={classes.navItem}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Now Playing
      </NavLink>

      <NavLink
        onClick={handleLinkClick}
        to='/top_rated'
        className={classes.navItem}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Top Rated
      </NavLink>

      <NavLink
        onClick={handleLinkClick}
        to='/genres'
        className={classes.navItem}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Genres
      </NavLink>
    </>
  )
}

export default NavLinks
