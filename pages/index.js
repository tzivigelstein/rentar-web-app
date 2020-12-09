import React, { useContext, useEffect } from 'react'
import authContext from '../context/auth/authContext'

const Index = () => {
  const AuthContext = useContext(authContext)
  const { user, authUser } = AuthContext

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {user ? <h1>Bienvenido {user.name}!</h1> : <h1>Hola!</h1>}
    </div>
  )
}

export default Index
