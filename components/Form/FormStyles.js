import styled from '@emotion/styled'

export const Title = styled.p`
  font-family: 'Pacifico', cursive;
  text-align: center;
  font-size: 4rem;
  padding: 1rem 0 1rem 0;
  margin: 0;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`

export const Sub = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: 1.4rem;
  margin: 0;
  padding: 0 0 1.6rem 0;
  color: #8e8e8e;
`

export const Form = styled.form`
  min-width: 300px;
  min-height: 320px;
  max-width: 600px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 1280px) {
    max-width: 40%;
  }
  margin: 0 auto;
`

export const InputContainer = styled.div`
  padding: 0.5rem 0;
  margin: 0;
`

export const Input = styled.input`
  color: #9e9e9e;
  display: block;
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  margin: 2px auto;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #a8b4ae;
  outline: none;
  &:focus {
    border-width: 1.7px;
    border-color: #76b041ff;
  }
`

export const Button = styled.input`
  display: block;
  background-color: #17bebbff;
  color: white;
  border-radius: 8px;
  padding: 0.8rem 1rem;
  width: 100%;
  margin: 2rem 0;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`

export const Account = styled.p`
  text-align: center;
  margin-top: 1rem;
`

export const SwitchLink = styled.a`
  color: #17bebbff;
  cursor: pointer;
  text-decoration: underline;
  &:visited {
    color: #76b041ff;
  }
`
