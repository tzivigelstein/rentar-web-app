import React, { useContext } from 'react'
import authContext from '../context/auth/authContext'
import styled from '@emotion/styled'

const Alert = () => {
  const AuthContext = useContext(authContext)
  const { msg, type } = AuthContext

  let THEME = {
    main: '',
    secondary: '',
    third: '',
    text: '',
  }

  if (type === 'ok') {
    THEME.main = '#c2d9c1'
    THEME.secondary = '#64a061'
    THEME.third = '#b2cfb0'
    THEME.fourth = '#a2c59f'
    THEME.text = '#598e56'
  } else {
    THEME.main = '#ffdb9b'
    THEME.secondary = '#ffa502'
    THEME.third = '#ffd080'
    THEME.fourth = '#ffc766'
    THEME.text = '#ce8500'
  }

  const AlertContainer = styled.div`
    background-color: ${THEME.main};
    padding: 0.4rem 1.8rem;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    border-bottom: 4px solid ${THEME.secondary};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const ExclamationIcon = styled.img`
    width: 1.6rem;
  `

  const Message = styled.p`
    text-align: left;
    display: block;
    margin: 0;
    padding: 0;
    color: ${THEME.text};
    font-size: 1rem;
  `

  return (
    <AlertContainer>
      <Message>{msg}</Message>
      <ExclamationIcon src={type === 'ok' ? '/check.svg' : '/exclamation.svg'} alt="" />
    </AlertContainer>
  )
}

export default Alert
