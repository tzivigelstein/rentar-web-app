import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const Form = styled.form`
  min-width: 300px;
  min-height: 400px;
`

const InputContainer = styled.div`
  padding: 0.5rem 0;
  margin: 0.5rem 0;
`
const Label = styled.label`
  font-size: 1rem;
  margin: 0 50px;
`

const Input = styled.input`
  color: #888;
  display: block;
  font-size: 1.2rem;
  padding: 0.8rem 10px;
  margin: 2px auto;
  width: 75%;
  border-radius: 12px;
  border: 1px solid #444;
  outline: none;
  &:focus {
    border-width: 1.2px;
    border-color: #76b041ff;
  }
`

const Button = styled.input`
  display: block;
  background-color: #17bebbff;
  color: white;
  text-transform: uppercase;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  width: 82%;
  margin: 2rem auto 1rem auto;
  border: none;
  font-size: 1rem;
  font-weight: bold;
`

const Account = styled.p`
  text-align: center;
  margin-top: 4rem;
`

const Signup = () => {
  return (
    <div>
      <div>
        <p>Registrarse</p>
        <div>
          <Form>
            <InputContainer>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" type="text" placeholder="Nombre" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="Contraseña" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="r-password">Repite la contraseña</Label>
              <Input id="r-password" type="password" placeholder="Repite la contreseña" />
            </InputContainer>
            <Button type="submit" value="Registrarse" />
          </Form>
        </div>
        <Account>
          ¿Ya tienes una cuenta? <Link href="/landing">Inicia sesión!</Link>
        </Account>
      </div>
    </div>
  )
}

export default Signup
