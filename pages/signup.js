import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import authContext from '../context/auth/authContext'
import { Title, Sub, Account, SwitchLink } from '../components/Form/FormStyles'
import SignupForm from '../components/Form/SignupForm'
import Alert from '../components/Alert'

const Signup = () => {
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
              <SignupForm />
            </div>
            <Account>
              <span>¿Ya tienes una cuenta? </span>
              <Link href="/login">
                <SwitchLink>Inicia sesión</SwitchLink>
              </Link>
            </Account>
          </div>
        </div>
      )}
    </>
  )
}

export default Signup
