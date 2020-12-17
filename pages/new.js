import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import Dropzone from '../components/Dropzone'
import authContext from '../context/auth/authContext'
import { useRouter } from 'next/router'
import Preview from '../components/Preview'
import { Container } from '../components/Global'

const New = () => {
  const AuthContext = useContext(authContext)
  const { auth } = AuthContext

  const router = useRouter()

  useEffect(() => {
    if (!auth) {
      router.push('/')
    }
  }, [])

  return (
    <>
      {auth ? (
        <Layout>
          <Container>
            <Preview />
            <Dropzone />
          </Container>
        </Layout>
      ) : null}
    </>
  )
}

export default New
