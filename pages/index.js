import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import appContext from '../context/app/appContext'
import styled from '@emotion/styled'
import Layout from '../components/Layout'

const TitlesH2 = styled.h2`
  margin-left: 0.8rem;
  font-weight: bold;
  font-size: 24pt;
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

const HorizontalPostContainer = styled.div`
  width: 100%;
  min-width: 200px;
  margin-right: 0.8rem;
  border-radius: 12px;
  background: #fff;
  &:first-of-type {
    margin-left: 0.8rem;
  }
  &:last-of-type {
    margin-right: 0.8rem;
  }
`

const HorizontalPostImage = styled.img`
  width: 100%;
  border-radius: 12px 12px 0 0;
`

const ListPosts = styled.ul`
  padding: 0;
  background: #f0f2f5;
`

const ListPostContainer = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;
  background: #fff;
`

const ListPostImage = styled.img`
  width: 100%;
`

const PostInfo = styled.div`
  margin: 1rem;
  h3 {
    margin: 0;
    padding: 0;
  }
`

const PostInfoData = styled.div`
  display: flex;
  justify-content: space-around;
`

const Icon = styled.img`
  width: 1.3rem;
  transition: all 0.3s ease;

  &:active {
    transform: scale(1.2);
  }
`

const PostInteraction = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`

const Likes = styled.p`
  margin-left: 1rem;
  padding-bottom: 1rem;
`

const Index = () => {
  const AppContext = useContext(appContext)
  const { posts, getPosts } = AppContext

  const [like, setLike] = useState(false)

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <Layout>
      <TitlesH2>Recientes</TitlesH2>
      {posts ? (
        <HorizontalPosts>
          {posts.map(post => (
            <Link key={post._id} href="/posts/[id]" as={`/posts/${post._id}`}>
              <HorizontalPostContainer>
                <HorizontalPostImage src="/house.jpg" />
                <PostInfo>
                  <h3>{post.title}</h3>
                  <PostInfoData>
                    <Icon src="/bath.svg" alt="" />
                    <p>{post.bathroom}</p>
                    <Icon src="/environments.svg" alt="" />
                    <p>{post.environments} amb.</p>
                  </PostInfoData>
                </PostInfo>
              </HorizontalPostContainer>
            </Link>
          ))}
        </HorizontalPosts>
      ) : (
        <p>No hay publicaciones</p>
      )}
      <TitlesH2>Más vistas</TitlesH2>
      {posts ? (
        <ListPosts>
          {posts.map(post => (
            <ListPostContainer key={post._id}>
              <ListPostImage src="/house.jpg" />
              <PostInfo>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </PostInfo>
              <PostInteraction>
                <ul>
                  <Icon onClick={() => setLike(!like)} src={like ? '/hearts.svg' : '/heartr.svg'} />
                  <Icon src="/share.svg" />
                  <Icon src="/plus.svg" />
                </ul>
                <Likes>{post.likes} likes</Likes>
              </PostInteraction>
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
