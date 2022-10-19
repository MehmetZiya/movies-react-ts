import { NavLink } from 'react-router-dom'

//styles
import classes from '../css/Navbar.module.css'

type Props = {
  handleLinkClick: () => void
}

const NavLinks: React.FC<Props> = ({ handleLinkClick }) => {
  return (
    <>
      <NavLink onClick={handleLinkClick} to='/home' className={classes.navItem}>
        Home
      </NavLink>

      <NavLink
        onClick={handleLinkClick}
        to='/popular'
        className={classes.navItem}
      >
        Popular Films
      </NavLink>

      <NavLink
        onClick={handleLinkClick}
        to='/now_playing'
        className={classes.navItem}
      >
        Now Playing
      </NavLink>

      <NavLink
        onClick={handleLinkClick}
        to='/top_rated'
        className={classes.navItem}
      >
        Top Rated
      </NavLink>

      <NavLink
        onClick={handleLinkClick}
        to='/genres'
        className={classes.navItem}
      >
        Genres
      </NavLink>
    </>
  )
}

export default NavLinks
