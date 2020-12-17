import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import authContext from '../context/auth/authContext'
import styled from '@emotion/styled'
import { HiddenInput } from '../components/Dropzone'
import { Container } from '../components/Global'
import Link from 'next/link'
import axios from 'axios'
import appContext from '../context/app/appContext'

const UserSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const UserName = styled.h2`
  margin: 0;
  font-size: 1.3rem;
  text-align: left;
  line-height: 1;
  color: #333;
  padding: 0.8rem;
`

const SettingsIcon = styled.img`
  width: 1.7rem;
  margin-right: 1rem;
`

const UserInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
`

const ProfilePicture = styled.label`
  position: relative;
  margin: 1rem;
  img {
    width: 6rem;
    height: 5.9rem;
    border: 2px solid #ddd;
    border-radius: 50%;
    background-size: cover;
    padding: 0.2rem;
  }
`

const PreviewText = styled.p`
  position: absolute;
  color: #fff;
  text-transform: uppercase;
  top: 2.5rem;
  left: 0.9rem;
  padding: 0;
  margin: 0;
`

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Name = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0 auto;
`

const SaveChanges = styled.button`
  text-transform: uppercase;
  font-size: 1rem;
  outline: none;
  border: none;
  background-color: #17bebbff;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  width: 90%;
  height: 2.5rem;
  margin: 0 auto;
`

const Selector = styled.div`
  display: flex;
  text-align: center;
  border-bottom: 1px solid #ccc;
`

const Profile = () => {
  const AuthContext = useContext(authContext)
  const { user, auth, authUser, updateUser } = AuthContext

  const [activeLikes, setActiveLikes] = useState(false)
  const [activePosts, setActivePosts] = useState(true)
  const [activeButton, setActiveButton] = useState(false)
  const [newImage, setNewImage] = useState(null)
  const [preview, setPreview] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
    if (!auth && !token) {
      router.push('/login')
    }
  }, [])

  const ref = React.useRef()

  const setPreviewImage = e => {
    setNewImage(e[0])
    try {
      const image = URL.createObjectURL(e[0])
      setPreview(image)
    } catch (error) {
      console.log(error)
    }
  }

  const clear = () => {
    setNewImage(null)
    setPreview(null)
    setActiveButton(false)
    ref.current.value = ''
  }

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

  return (
    <>
      {auth ? (
        <Layout>
          <Container>
            <UserSettings>
              <UserName>{user.username ? `@${user.username}` : 'Configura tu nombre de usuario'}</UserName>
              <Link href="/settings">
                <SettingsIcon src="/settings.svg" />
              </Link>
            </UserSettings>
            <UserInfo>
              <ProfilePicture htmlFor="profile">
                {activeButton ? (
                  <>
                    <img src={preview ? `${preview}` : '/user.svg'} alt="" />
                    {preview ? <PreviewText>preview</PreviewText> : null}
                  </>
                ) : (
                  <Icon src={user.path ? `${user.path}` : '/user.svg'} alt="" />
                )}
              </ProfilePicture>
              <HiddenInput
                onChange={e => {
                  setActiveButton(true)
                  setPreviewImage(e.target.files)
                }}
                accept="image/*"
                type="file"
                name="files"
                id="profile"
                ref={ref}
              />
              <InfoContainer>
                {activeButton ? (
                  <>
                    <SaveChanges
                      onClick={() => {
                        updateUser(newImage, user.id)
                        clear()
                      }}
                      type="submit"
                    >
                      Cambiar
                    </SaveChanges>
                    <SaveChanges
                      onClick={() => {
                        clear()
                      }}
                      type="submit"
                    >
                      Cancelar
                    </SaveChanges>
                  </>
                ) : (
                  <Name>{user ? user.name : null}</Name>
                )}
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
          </Container>
        </Layout>
      ) : null}
    </>
  )
}

export default Profile
