import React, { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import authContext from '../context/auth/authContext'
import { Icon, ImageIcon, SignupButton, LoginButton } from './Global'

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 54px;
  background: #fff;
  padding: 0 1rem;
  line-height: 1.5;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1367px) {
    max-width: 50%;
    margin: 0 auto;
  }
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

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: max-content;
`

const Desktop = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    display: none;
  }
`

const Header = () => {
  const AuthContext = useContext(authContext)
  const { auth, user } = AuthContext

  return (
    <>
      {auth ? (
        <NavBarContainer>
          <NavBar>
            <Link href="/">
              <Title>rentar</Title>
            </Link>
            <IconsContainer>
              <Link href="/notifications">
                <Icon src="/search.svg" alt="" />
              </Link>
              <Link href="/new">
                <Icon src="/plus.svg" alt="" />
              </Link>
              {user ? (
                <Link href="/profile">
                  <ImageIcon src={user.path ? `${user.path}` : '/user.svg'} alt="" />
                </Link>
              ) : null}
            </IconsContainer>
          </NavBar>
        </NavBarContainer>
      ) : (
        <NavBarContainer>
          <NavBar>
            <Link href="/">
              <Title>rentar</Title>
            </Link>
            <Desktop>
              <Link href="/login">
                <LoginButton>Inciar sesión</LoginButton>
              </Link>
              <Link href="/signup">
                <SignupButton>Regístrate</SignupButton>
              </Link>
            </Desktop>
          </NavBar>
        </NavBarContainer>
      )}
    </>
  )
}

export default Header
