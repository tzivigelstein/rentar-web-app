import React, { useEffect, useContext } from 'react'
import appContext from '../context/app/appContext'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import HorizontalCard from '../components/Card/HorizontalCard'
import ListCard from '../components/Card/ListCard'
import authContext from '../context/auth/authContext'
import AuthBaner from '../components/AuthBaner'
import { Container } from '../components/Global'

export const TitlesH2 = styled.p`
  margin: 0;
  padding: 1.4rem 0;
  line-height: 1;
  margin-left: 1rem;
  font-weight: bold;
  font-size: 1.8rem;
  color: #333;
`

export const HorizontalPosts = styled.ul`
  padding: 0;
  height: max-content;
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
          <TitlesH2>Recientes</TitlesH2>
          {posts ? (
            <HorizontalPosts>
              {posts.map(post => (
                <HorizontalCard key={post._id} post={post} />
              ))}
            </HorizontalPosts>
          ) : (
            <p>No hay publicaciones</p>
          )}
          <TitlesH2>Más vistas</TitlesH2>
          {posts ? (
            <ListPosts>
              {posts.map(post => (
                <ListCard key={post._id} post={post} />
              ))}
            </ListPosts>
          ) : (
            <p>No hay publicaciones</p>
          )}
        </>
      </Container>
    </Layout>
  )
}

export default Index
