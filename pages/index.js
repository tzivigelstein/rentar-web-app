import React, { useEffect, useContext } from 'react'
import appContext from '../context/app/appContext'
import styled from '@emotion/styled'
import Layout from '../components/Layout'

const HorizontalPosts = styled.ul`
  padding: 0;
  max-height: 120px;
  overflow-x: auto;
  display: flex;
  &::-webkit-scrollbar {
    width: 0px;
  }
`

const HorizontalPostContainer = styled.div`
  width: 100%;
  height: 12rem;
  background: coral;
  margin-right: 0.8rem;
`

const ListPosts = styled.ul`
  padding: 0;
`

const ListPostContainer = styled.div`
  width: 100%;
  height: 12rem;
  background: green;
`

const PostInfo = styled.div`
  background: lightblue;
`

const Index = () => {
  const AppContext = useContext(appContext)
  const { posts, getPosts } = AppContext

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <Layout>
      <h1>Home</h1>
      {posts ? (
        <HorizontalPosts>
          {posts.map(post => (
            <HorizontalPostContainer>
              //IMAGE
              <PostInfo>
                <h3>{post.title}</h3>
                <p>{post.bathroom}</p>
              </PostInfo>
            </HorizontalPostContainer>
          ))}
        </HorizontalPosts>
      ) : (
        <p>No hay publicaciones</p>
      )}
      {posts ? (
        <ListPosts>
          {posts.map(post => (
            <ListPostContainer>
              //IMAGE
              <PostInfo>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </PostInfo>
            </ListPostContainer>
          ))}
        </ListPosts>
      ) : (
        <p>No hay publicaciones</p>
      )}
    </Layout>
  )
}

export default Index
