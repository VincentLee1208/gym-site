import React, { Fragment } from 'react'

import Footer from './Footer'
import NavBar from './NavBar'
import Routers from '../routers/Routers'

const Layout = () => {
  return <Fragment>
    <NavBar/>
    <div>
        <Routers />
    </div>
    <Footer/>
  </Fragment>
}

export default Layout