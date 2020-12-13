import React from 'react'
import Headerr from './Headerr'

const Layout = ({ children }) => {
  return (
    <div>
      <Headerr/>
      {children}
    </div>
  )
}

export default Layout
