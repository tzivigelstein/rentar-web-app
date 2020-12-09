import React, { useState, useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import appContext from '../../context/app/appContext'
import authContext from '../../context/auth/authContext'
import styled from '@emotion/styled'

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

const Table = styled.table`
  width: 100%;
  text-align: left;
`

const Post = () => {
  const AppContext = useContext(appContext)
  const { posts, getPosts } = AppContext

  const AuthContext = useContext(authContext)
  const { authUser } = AuthContext

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
    } else {
      getPosts()
    }
  }, [])

  return (
    <Layout>
      {posts ? (
        <div>
          <Image src="/house.jpg" alt="" />
          <InfoContainer>
            <Title>{p ? p.title : null}</Title>
            <Phone>Contactar</Phone>
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
        </div>
      ) : (
        <p>Hubo un error</p>
      )}
    </Layout>
  )
}

export default Post
