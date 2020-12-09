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
    padding: 1rem 4rem;
    min-width: 420px;
    position: absolute;
    right: 0;
    top: 1rem;
    border-radius: 8px;
    border-left: 8px solid ${THEME.secondary};
    overflow: hidden;
    animation: slide 1s ease forwards;

    @keyframes slide {
      0% {
        transform: translateX(-10vw);
      }
      40% {
        transform: translateX(-60vw);
      }
      80% {
        transform: translateX(4vw);
      }
      100% {
        transform: translateX(-2vw);
      }
    }

    @media (max-width: 480px) {
      min-width: 120px;
    }
  `

  const ExclamationIcon = styled.img`
    width: 2rem;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  `

  const Close = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    right: 0;
    padding: 1rem;
    background-color: ${THEME.third};

    &:hover {
      background-color: ${THEME.fourth};
      cursor: pointer;
    }
  `

  const TimesIcon = styled.img`
    width: 1rem;
  `

  const Message = styled.span`
    color: ${THEME.text};
    font-size: 1rem;
  `

  return (
    <AlertContainer>
      <ExclamationIcon src={type === 'ok' ? '/check.svg' : '/exclamation.svg'} alt="" />
      <Message>{msg}</Message>
      <Close>
        <TimesIcon src="/times.svg" alt="" />
      </Close>
    </AlertContainer>
  )
}

export default Alert
