import React from 'react'

import Header from '../widgets/header'
import Footer from './footer'

const Wrap = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Wrap
