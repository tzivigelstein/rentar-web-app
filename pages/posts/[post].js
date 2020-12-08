import React, { useState, useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import appContext from '../../context/app/appContext'
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

const Table = styled.table`
  width: 100%;
  text-align: left;
`

const Post = () => {
  const AppContext = useContext(appContext)
  const { posts, getPosts } = AppContext

  const [p, setP] = useState(null)

  const router = useRouter()
  const {
    query: { post },
  } = router

  useEffect(() => {
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
  }, [])

  return (
    <Layout>
      <div>
        <Image src="/house.jpg" alt="" />
        <InfoContainer>
          <Title>{p ? p.title : null}</Title>
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
    </Layout>
  )
}

export default Post
