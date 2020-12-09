import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import authContext from '../context/auth/authContext'

const Profile = () => {
  const AuthContext = useContext(authContext)
  const { user, auth, authUser } = AuthContext
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
  }, [])
  return (
    <>
      {auth ? (
        <Layout>
          <h3>Perfil de {user.name}</h3>
        </Layout>
      ) : null}
    </>
  )
}

export default Profile
