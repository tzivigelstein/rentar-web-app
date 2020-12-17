import React, { useState, useContext, useCallback } from 'react'
import authContext from '../../context/auth/authContext'
import { Form, InputContainer, Input, Button } from './FormStyles'

const LoginForm = () => {
  const AuthContext = useContext(authContext)
  const { logIn } = AuthContext

  const [data, setData] = useState({
    email: '',
    password: '',
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
      logIn(data)
    },
    [logIn, data]
  )

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input onChange={handleChange} value={data.email} name="email" id="email" type="email" placeholder="Email" />
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
      <Button type="submit" value="Iniciar sesión" />
    </Form>
  )
}

export default React.memo(LoginForm)
