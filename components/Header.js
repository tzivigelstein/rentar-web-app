import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const NavBar = styled.nav`
  background-color: #76b041ff;
  padding: 1rem;
`
const Title = styled.h1`
  margin: 0;
  color: white;
  font-weight: 400;
  text-align: center;
`

const Header = () => {
  return (
    <NavBar>
      <Link href="/">
        <Title>rentar</Title>
      </Link>
    </NavBar>
  )
}

export default Header
