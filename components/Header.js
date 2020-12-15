import React, { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import authContext from '../context/auth/authContext'
import appContext from '../context/app/appContext'

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 54px;
  background: #fff;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  margin: 0;
  padding: 0;
  color: #000;
  font-weight: 400;
  text-align: left;
  font-size: 1.5rem;
  display: inline-block;
`

const Box = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;
`

const ChevronIcon = styled.img`
  width: 0.8rem;
  padding: 0;
  margin: 4px auto;
`

const RBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Icon = styled.img`
  width: 1.8rem;
  padding: 0;
  margin: 4px auto;
  float: right;
`

const BellIcon = styled.img`
  width: 1.5rem;
  padding: 0;
  margin: 4px auto;
`

const BackText = styled.span`
  font-size: 1.2rem;
  margin-left: 0.6rem;
  padding: 0.5rem 0;
`

const SettingsIcon = styled.img`
  width: 1.7rem;
`

const NewIcon = styled.img`
  width: 1.7rem;
  margin: 0 1.5rem;
  background: rgb(232, 202, 7);
  background: linear-gradient(315deg, rgba(232, 202, 7, 1) 0%, rgba(82, 199, 64, 1) 35%, rgba(15, 165, 214, 1) 100%);
  border-radius: 25%;
  padding: 0.25rem 0.3rem;
`

const Desktop = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 480px) {
    display: none;
  }
`

const JoinButton = styled.button`
  border-radius: 8px;
  border: 1px solid;
  background: rgb(232, 202, 7);
  background: linear-gradient(315deg, rgba(232, 202, 7, 1) 0%, rgba(82, 199, 64, 1) 35%, rgba(15, 165, 214, 1) 100%);
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
  margin-left: 1.5rem;
  @media (max-width: 480px) {
    margin-left: 0;
  }
`

const LogButton = styled.button`
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    315deg,
    rgba(232, 202, 7, 1) 0%,
    rgba(82, 199, 64, 1) 35%,
    rgba(15, 165, 214, 1) 100%
  );
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #222;
  outline: none;
  background: transparent;
  cursor: pointer;
`

const Header = () => {
  const [profile, setProfile] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  const AuthContext = useContext(authContext)
  const { auth } = AuthContext

  const AppContext = useContext(appContext)
  const { baner } = AppContext

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProfile(window.location.pathname)
    }
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
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
        {profile == '/profile' && auth ? (
          <Link href="/settings">
            <SettingsIcon src="/settings.svg" alt="" />
          </Link>
        ) : null}
        {!(profile == '/profile') && auth ? (
          <>
            <Link href="/notifications">
              <BellIcon src="/bell.svg" alt="" />
            </Link>
            <Link href="/new">
              <NewIcon src="/pluswhite.svg" alt="" />
            </Link>
            <Link href="/profile">
              <Icon src="/user.svg" alt="" />
            </Link>
          </>
        ) : null}
        {!auth ? (
          <Desktop>
            <Link href="/login">
              <LogButton>Inciar sesión</LogButton>
            </Link>
            <Link href="/signup">
              <JoinButton>Regístrate</JoinButton>
            </Link>
          </Desktop>
        ) : null}
        {!auth && !baner && isMobile ? (
          <Link href="/signup">
            <JoinButton>Regístrate</JoinButton>
          </Link>
        ) : null}
      </RBox>
    </NavBar>
  )
}

export default Header
