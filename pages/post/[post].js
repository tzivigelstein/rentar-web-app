import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import appContext from '../../context/app/appContext'
import authContext from '../../context/auth/authContext'
import styled from '@emotion/styled'

const  Container = styled.div`
margin-top: 71px;
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

const Description = styled.p`
  font-weight: 300;
`

const Phone = styled.div`
  background-color: #17bebbff;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 2rem;
  margin: 0;
  width: 100%;
  text-align: center;
  border-radius: 8px;
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

const Signup = styled.p`
  font-weight: bold;
  color: #fff;
  margin: 0 auto 1.2rem 0;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  text-transform: uppercase;
  background: rgb(232, 202, 7);
  background: linear-gradient(315deg, rgba(232, 202, 7, 1) 0%, rgba(82, 199, 64, 1) 35%, rgba(15, 165, 214, 1) 100%);
`

const Table = styled.table`
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
        <Container>
          <Image src="/house.jpg" alt="" />
          <InfoContainer>
            <Title>{p ? p.title : null}</Title>
            {auth ? (
              <Phone>Contactar</Phone>
            ) : (
              <HelperContainer>
                <div>
                  <Helper>Regístrate para comunicarte con el vendedor</Helper>
                  <LockIcon src="/lock.svg" alt="" />
                </div>
                <Link href="/signup">
                  <Signup>Regístrate</Signup>
                </Link>
              </HelperContainer>
            )}
            <Description>{p ? p.description : null}</Description>
            <Table>
              <tr>
                <th>Ambientes</th>
                <th>Baños</th>
              </tr>
              <tr>
                <td>{p ? p.environments : null}</td>
                <td>{p ? p.bathroom : null}</td>
              </tr>
            </Table>
          </InfoContainer>
        </Container>
      ) : (
        <p>Hubo un error</p>
      )}
    </Layout>
  )
}

export default Post
