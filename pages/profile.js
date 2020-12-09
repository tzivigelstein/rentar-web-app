import React, { useState, useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import authContext from '../context/auth/authContext'
import styled from '@emotion/styled'

const UserInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`

const ProfilePicture = styled.img`
  width: 6rem;
  margin: 1rem;
`

const InfoContainer = styled.div`
  width: 100%;
`

const Name = styled.p`
  font-size: 2rem;
  padding: 0;
  margin: 2rem 0 0 0;
`
const UserName = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0.6rem 0;
`

const Selector = styled.div`
  display: flex;
  text-align: center;
  border-bottom: 1px solid #ccc;
`

const Profile = () => {
  const AuthContext = useContext(authContext)
  const { user, auth, authUser } = AuthContext

  const [activeLikes, setActiveLikes] = useState(false)
  const [activePosts, setActivePosts] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
  }, [])

  let active1 = ''
  let active2 = ''
  if (activePosts) {
    active1 = 'border-bottom: 2px solid #aaa;'
  } else if (activeLikes) {
    active2 = 'border-bottom: 2px solid #aaa;'
  }

  const Span1 = styled.span`
    ${active1}
    padding: 0.5rem 0;
    width: 50%;
  `

  const Span2 = styled.span`
    ${active2}
    padding: 0.5rem 0;
    width: 50%;
  `

  const Icon = styled.img`
    width: 1.2rem;
    margin-top: 0.3rem;
  `

  /* const spl = user.name.split(' ')
  const username = (spl[0] + spl[1]).toLowerCase() */

  return (
    <>
      {auth ? (
        <Layout>
          <div>
            <UserInfo>
              <ProfilePicture src="/user.svg" alt="" />
              <InfoContainer>
                <Name>{user.name}</Name>
                <UserName>{user.username ? `@${user.username}` : null}</UserName>
              </InfoContainer>
            </UserInfo>
            <div>
              <Selector>
                <Span1
                  onClick={() => {
                    setActivePosts(true)
                    setActiveLikes(false)
                  }}
                >
                  <Icon src="/archive.svg" alt="" />
                </Span1>
                <Span2>
                  <Icon
                    onClick={() => {
                      setActivePosts(false)
                      setActiveLikes(true)
                    }}
                    src="/heartr.svg"
                    alt=""
                  />
                </Span2>
              </Selector>
              <ul>
                <div></div>
              </ul>
            </div>
          </div>
        </Layout>
      ) : null}
    </>
  )
}

export default Profile
