import { Fragment } from 'react'

import classes from '../css/Layout.module.css'
import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  )
}

export default Layout
