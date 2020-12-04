import React from 'react'
import AuthState from '../context/auth/AuthState'
import AppState from '../context/app/appState'
import '../styles/global.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  )
}

export default MyApp
