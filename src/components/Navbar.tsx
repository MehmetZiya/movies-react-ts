import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/theMovie-logo.png'
import NavLinks from './NavLinks'
import { MenuOutlined, CloseCircleOutlined } from '@ant-design/icons'

//styles
import classes from '../css/Navbar.module.css'

type Ref = {
  current: null | HTMLDivElement
}

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const navRef = useRef<null | HTMLDivElement>(null)
  const handleClick = () => {
    setShowDropdown(!showDropdown)
  }
  const handleLinkClick = () => {
    setShowDropdown(false)
  }
  const handleClickOutside = (e: any) => {
    setShowDropdown(false)
  }
  const OutsideClick = (callback: any, ref: Ref) => {
    const handleClickOutside = (e: any) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        callback()
        return
      }
    }
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }

  OutsideClick(handleClickOutside, navRef)

  return (
    <div
      className={`${classes.navbar} ${showDropdown && classes.dropstatus}`}
      ref={navRef}
    >
      {!showDropdown && (
        <Link to='/' className={classes.logo}>
          <img src={logo} alt='movie-central' />
        </Link>
      )}
      <nav className={classes.menu}>
        <NavLinks handleLinkClick={handleLinkClick} />
      </nav>

      {!showDropdown && (
        <MenuOutlined
          onClick={handleClick}
          className={`${classes.baricon}  ${showDropdown && classes.menubar}`}
        />
      )}

      {showDropdown && (
        <nav className={classes.dropMenu}>
          <CloseCircleOutlined
            onClick={handleClick}
            className={classes.closeIcon}
          />
          <NavLinks handleLinkClick={handleLinkClick} />
        </nav>
      )}
    </div>
  )
}

export default Navbar
