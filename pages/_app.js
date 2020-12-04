import AuthContext from '../context/auth/AuthContext'
import AppContext from '../context/app/appContext'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContext>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </AuthContext>
  )
}

export default MyApp
