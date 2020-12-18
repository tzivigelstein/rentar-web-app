import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Container } from './Global'

const Header = styled.div`
  width: 100%;
  padding: 3.8rem 0 1rem 0;
`

const Title = styled.h3`
  color: #222;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  text-align: center;
`

const Helper = styled.p`
  color: #333;
  font-size: 1.4rem;
  margin: 1rem 0;
  padding: 0;
  text-align: center;
`

const SecondHelper = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 0;
  text-align: center;
`

const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Gif = styled.img`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 769px) {
    width: 60%;
    float: right;
  }
`

const NotFound = () => {
  return (
    <Container>
      <Header>
        <Title>Oops!</Title>
        <Helper>Parece que no hay publicaciones...</Helper>
      </Header>
      <GifContainer>
        <Gif src="/giphy.gif" alt="" />
        <SecondHelper>
          Quizas tengas que ir al <Link href="/">Inicio</Link>
        </SecondHelper>
      </GifContainer>
    </Container>
  )
}

export default NotFound
