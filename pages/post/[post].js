import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import appContext from '../../context/app/appContext'
import authContext from '../../context/auth/authContext'
import styled from '@emotion/styled'
import { Container, SignupButton, BlueButton } from '../../components/Global'

const PostContainer = styled(Container)`
  @media (min-width: 768px) {
    width: 85%;
    height: 100%;
    margin: 54px auto 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #f8f8f8;
    box-shadow: 0px 0px 30px -28px #000;
  }
`

const Image = styled.img`
  width: 100%;
`

const InfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Title = styled.h2`
  font-weight: 500;
`

const BlockSignupButton = styled(SignupButton)`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 2rem;
  font-size: 1.2rem;
`

const Description = styled.p`
  font-weight: 300;
`

const HelperContainer = styled.div`
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  margin: 1rem 0 1rem 0;
  div {
    display: flex;
    margin: 0 0 1rem 0;
    justify-content: space-around;
    align-items: center;
  }
`

const Helper = styled.span`
  color: #a2a5a9;
  margin: 1rem 0 0 0;
`

const LockIcon = styled.img`
  width: 1rem;
  margin: 1rem 0 0 0;
`

const PostInfo = styled.table`
  width: 100%;
  text-align: left;
`

const Post = () => {
  const AppContext = useContext(appContext)
  const { posts, getPosts } = AppContext

  const AuthContext = useContext(authContext)
  const { auth, authUser } = AuthContext

  const [p, setP] = useState(null)

  const router = useRouter()
  const {
    query: { post },
  } = router

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
    if (posts) {
      const findOne = () => {
        const indexed = posts.reduce(
          (acc, el) => ({
            ...acc,
            [el._id]: el,
          }),
          {}
        )
        return indexed
      }
      const r = findOne()
      setP(r[post])
    }
    getPosts()
  }, [])

  return (
    <Layout>
      {posts ? (
        <PostContainer>
          <Image src={`/${Math.round(Math.random() * 5)}.jpg`} alt="" />
          <InfoContainer>
            <Title>{p ? p.title : null}</Title>
            {auth ? (
              <BlueButton>Contactar</BlueButton>
            ) : (
              <HelperContainer>
                <div>
                  <Helper>Regístrate para comunicarte con el vendedor</Helper>
                  <LockIcon src="/lock.svg" alt="" />
                </div>
                <Link href="/signup">
                  <BlockSignupButton>Regístrate</BlockSignupButton>
                </Link>
              </HelperContainer>
            )}
            <Description>{p ? p.description : null}</Description>
            <PostInfo>
              <tr>
                <th>Ambientes</th>
                <th>Baños</th>
              </tr>
              <tr>
                <td>{p ? p.environments : null}</td>
                <td>{p ? p.bathroom : null}</td>
              </tr>
            </PostInfo>
          </InfoContainer>
        </PostContainer>
      ) : (
        <p>Hubo un error</p>
      )}
    </Layout>
  )
}

export default Post
