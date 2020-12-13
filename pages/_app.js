import React, { useContext } from 'react'
import AuthState from '../context/auth/AuthState'
import AppState from '../context/app/appState'
import '../styles/global.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
          <title>rentar</title>
        </Head>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  )
}

export default MyApp
