import React, { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import authContext from '../context/auth/authContext'

const NavBar = styled.nav`
  background: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  margin: 0;
  padding: 0;
  line-height: 1;
  color: #000;
  font-weight: 400;
  text-align: left;
  font-size: 2rem;
  display: inline-block;
`

const Icon = styled.img`
  width: 1.8rem;
  padding: 0;
  margin: 4px auto;
  float: right;
`

const NewIcon = styled.img`
  width: 1.7rem;
  margin: 0 0.8rem;
  background: rgb(232, 202, 7);
  background: linear-gradient(315deg, rgba(232, 202, 7, 1) 0%, rgba(82, 199, 64, 1) 35%, rgba(15, 165, 214, 1) 100%);
  border-radius: 25%;
  padding: 0.15rem 0.2rem;
`

const RBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Box = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;
`

const BackText = styled.span`
  font-size: 1.2rem;
  margin-left: 0.6rem;
  padding: 0.5rem 0;
`

const ChevronIcon = styled.img`
  width: 0.8rem;
  padding: 0;
  margin: 4px auto;
`

const SettingsIcon = styled.img`
  width: 1.7rem;
`

const JoinButton = styled.button`
  border-radius: 8px;
  border: 1px solid;
  background: rgb(232, 202, 7);
  background: linear-gradient(315deg, rgba(232, 202, 7, 1) 0%, rgba(82, 199, 64, 1) 35%, rgba(15, 165, 214, 1) 100%);
  padding: 0.5rem 2rem;
  float: right;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`

const Header = () => {
  const [profile, setProfile] = useState('')

  const AuthContext = useContext(authContext)
  const { user } = AuthContext
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProfile(window.location.pathname)
    }
  }, [])

  return (
    <NavBar>
      {profile == '/profile' ? (
        <Link href="/">
          <Box>
            <ChevronIcon src="/chevronl.svg" alt="" />
            <BackText>Inicio</BackText>
          </Box>
        </Link>
      ) : (
        <Link href="/">
          <Title>rentar</Title>
        </Link>
      )}
      <RBox>
        {profile == '/profile' && user ? (
          <Link href="/settings">
            <SettingsIcon src="/settings.svg" alt="" />
          </Link>
        ) : null}
        {!(profile == '/profile') && user ? (
          <>
            <Link href="/new">
              <NewIcon src="/pluswhite.svg" alt="" />
            </Link>
            <Link href="/profile">
              <Icon src="/user.svg" alt="" />
            </Link>
          </>
        ) : null}
        {!user ? (
          <Link href="/signup">
            <JoinButton>Regístrate</JoinButton>
          </Link>
        ) : null}
      </RBox>
    </NavBar>
  )
}

export default Header
