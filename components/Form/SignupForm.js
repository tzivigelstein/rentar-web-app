import React, { useState, useContext, useCallback } from 'react'
import authContext from '../../context/auth/authContext'
import { Form, InputContainer, Input, Button } from './FormStyles'

const SignupForm = () => {
  const AuthContext = useContext(authContext)
  const { signUp } = AuthContext

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  const handleChange = useCallback(
    e => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      })
    },
    [data]
  )

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      signUp(data)
    },
    [signUp, data]
  )
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input onChange={handleChange} id="name" name="name" value={data.name} type="text" placeholder="Nombre" />
      </InputContainer>
      <InputContainer>
        <Input onChange={handleChange} value={data.email} name="email" id="email" type="email" placeholder="Email" />
      </InputContainer>
      <InputContainer>
        <Input onChange={handleChange} value={data.phone} name="phone" id="phone" type="phone" placeholder="Telefono" />
      </InputContainer>
      <InputContainer>
        <Input
          onChange={handleChange}
          value={data.password}
          name="password"
          id="password"
          type="password"
          placeholder="Contraseña"
        />
      </InputContainer>
      <Button type="submit" value="Regístrate" />
    </Form>
  )
}

export default React.memo(SignupForm)
