import React, { useEffect, useContext } from 'react'
import appContext from '../context/app/appContext'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import HorizontalCard from '../components/Card/HorizontalCard'
import ListCard from '../components/Card/ListCard'
import authContext from '../context/auth/authContext'
import AuthBaner from '../components/AuthBaner'
import { Container } from '../components/Global'
import NotFound from '../components/NotFound'

export const HorizontalPosts = styled.ul`
  padding: 1rem 0;
  overflow-x: auto;
  display: flex;
  margin: 0;
  &::-webkit-scrollbar {
    width: 0px;
  }
`

const ListPosts = styled.ul`
  margin: 0;
  padding: 0;
  background: #f0f2f5;
`

const Index = () => {
  const AppContext = useContext(appContext)
  const { posts, getPosts } = AppContext

  const AuthContext = useContext(authContext)
  const { auth, authUser } = AuthContext

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
    getPosts()
  }, [])

  return (
    <Layout>
      <Container>
        {!auth ? <AuthBaner /> : null}
        <>
          {posts ? (
            <HorizontalPosts>
              {posts.map(post => (
                <HorizontalCard key={post._id} post={post} />
              ))}
            </HorizontalPosts>
          ) : null}
          {posts ? (
            <ListPosts>
              {posts.map(post => (
                <ListCard key={post._id} post={post} />
              ))}
            </ListPosts>
          ) : (
            <NotFound />
          )}
        </>
      </Container>
    </Layout>
  )
}

export default Index
