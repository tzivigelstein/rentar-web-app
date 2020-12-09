import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import authContext from '../context/auth/authContext'

const NavBar = styled.nav`
  background: #fff;
  padding: 1rem;
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
  const AuthContext = useContext(authContext)
  const { user } = AuthContext

  return (
    <NavBar>
      <Link href="/">
        <Title>rentar</Title>
      </Link>
      {user ? (
        <Link href="/profile">
          <Icon src="/user.svg" alt="" />
        </Link>
      ) : (
        <Link href="/signup">
          <JoinButton>Regístrate</JoinButton>
        </Link>
      )}
    </NavBar>
  )
}

export default Header
