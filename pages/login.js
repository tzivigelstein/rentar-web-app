import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import authContext from '../context/auth/authContext'
import { Title, Sub, Account, SwitchLink } from '../components/Form/FormStyles'
import LoginForm from '../components/Form/LoginForm'
import Alert from '../components/Alert'

const Login = () => {
  const AuthContext = useContext(authContext)
  const { auth, msg, authUser } = AuthContext
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
    if (auth) {
      router.push('/')
    }
  }, [auth])

  return (
    <>
      {auth ? null : (
        <div>
          {msg ? <Alert /> : null}
          <div>
            <Link href="/">
              <Title>rentar</Title>
            </Link>
            <Sub>Encontrá tu próximo hogar.</Sub>
            <div>
              <LoginForm />
            </div>
            <Account>
              <span>¿No tienes una cuenta? </span>
              <Link href="/signup">
                <SwitchLink>Regístrate</SwitchLink>
              </Link>
            </Account>
          </div>
        </div>
      )}
    </>
  )
}

export default Login
