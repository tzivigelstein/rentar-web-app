import React, { useEffect, useContext } from 'react'
import appContext from '../context/app/appContext'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import HorizontalCard from '../components/Card/HorizontalCard'
import ListCard from '../components/Card/ListCard'
import authContext from '../context/auth/authContext'
import AuthBaner from '../components/AuthBaner'

export const TitlesH2 = styled.h2`
  margin-left: 0.8rem;
  font-weight: bold;
  font-size: 24pt;
  color: #333;
`

const HorizontalPosts = styled.ul`
  padding: 0;
  height: max-content;
  overflow-x: auto;
  display: flex;
  &::-webkit-scrollbar {
    width: 0px;
  }
`

const ListPosts = styled.ul`
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
      {!auth ? <AuthBaner /> : null}
      <div>
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
      </div>
    </Layout>
  )
}

export default Index
