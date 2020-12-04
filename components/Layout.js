import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>rentar</title>
      </Head>
      <div>
        <Header />
        {children}
      </div>
    </>
  )
}

export default Layout
