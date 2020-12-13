import React, {useContext} from 'react'
import Link from 'next/link'
import styled from "@emotion/styled"
import authContext from '../context/auth/authContext'
import appContext from '../context/app/appContext'
import useOnScreen from '../Hooks/useOnScreen'

const MobileContainer = styled.div`
  background-color: #f1f1f1;
  @media (min-width: 481px) {
    display: none;
  }
`

const MobileBorder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 70px auto 0 auto;
  border-bottom: 1px solid #aaa;
  padding: 1rem 0;
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

const AuthBaner = () => {
    const AuthContext = useContext(authContext)
    const { auth } = AuthContext

    const AppContext = useContext(appContext)
    const {  } = AppContext

    const [ref, visible] =  useOnScreen({ rootMargin: '100px', threshold: 1 })
  return (
    <>
      {!auth ? (
        <MobileContainer ref={ref}>
          <MobileBorder>
            <Link href="/login">
              <LogButton>Inciar sesión</LogButton>
            </Link>
            <Link href="/signup">
              <JoinButton>Regístrate</JoinButton>
            </Link>
          </MobileBorder>
        </MobileContainer>
      ) : null}
    </>
  )
}

export default AuthBaner
