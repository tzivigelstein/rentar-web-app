import styled from '@emotion/styled'
import { COLORS } from '../colors'

const { black, blue, green, red, yellow } = COLORS

export const Container = styled.div`
  margin-top: 54px;
  @media (min-width: 1367px) {
    max-width: 50%;
    margin: 0 auto;
  }
`

export const Icon = styled.img`
  cursor: pointer;
  width: 22pt;
  height: 22pt;
  transition: all 0.3s ease;
  margin: 5.5pt;
  &:active {
    transform: scale(1.1);
  }
`

export const CardIcon = styled.img`
  cursor: pointer;
  width: 20pt;
  height: 20pt;
  transition: all 0.3s ease;
  margin: 5.5pt;
  &:active {
    transform: scale(1.1);
  }
`

export const ImageIcon = styled.img`
  cursor: pointer;
  width: 22pt;
  height: 22pt;
  margin: 5.5pt;
  border-radius: 50%;
  transition: all 0.3s ease;
  &:active {
    transform: scale(1.1);
  }
`

export const SignupButton = styled.button`
  margin: 0 0.75rem;
  border-radius: 8px;
  border: none;
  background: linear-gradient(315deg, ${yellow} 0%, ${green} 35%, ${blue} 100%);
  font-size: 1rem;
  font-weight: bold;
  color: white;
  outline: none;
  display: block;
  padding: 0.5rem 2rem;
  cursor: pointer;
`

export const LoginButton = styled.button`
  margin: 0 0.75rem;
  border: 2px solid;
  background: transparent;
  border-image-slice: 1;
  border-image-source: linear-gradient(315deg, ${yellow} 0%, ${green} 35%, ${blue} 100%);
  font-size: 1rem;
  font-weight: bold;
  color: #222;
  outline: none;
  display: block;
  padding: 0.5rem 2rem;
  cursor: pointer;
`

export const BlueButton = styled.button`
  border: none;
  background-color: ${blue};
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  width: 100%;
  text-align: center;
  border-radius: 8px;
`

export const RedButton = styled.button`
  background-color: ${red};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 2rem;
  margin: 0;
  width: 100%;
  text-align: center;
  border-radius: 8px;
`
