import React, { useState, useContext } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import authContext from '../context/auth/authContext'
import { Title, Sub, Form, InputContainer, Input, Button, Account, SwitchLink } from '../components/Form/FormStyles'
import Alert from '../components/Alert'

const Landing = () => {
  const AuthContext = useContext(authContext)
  const { msg, logIn } = AuthContext

  const [data, setData] = useState({
    email: null,
    password: null,
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    logIn(data)
  }

  return (
    <div>
      {msg ? <Alert /> : null}
      <div>
        <Link href="/">
          <Title>rentar</Title>
        </Link>
        <Sub>Encontrá tu próximo hogar.</Sub>
        <div>
          <Form onSubmit={e => handleSubmit(e)}>
            <InputContainer>
              <Input
                onChange={e => handleChange(e)}
                value={data.email}
                name="email"
                id="email"
                type="email"
                placeholder="Email"
              />
            </InputContainer>
            <InputContainer>
              <Input
                onChange={e => handleChange(e)}
                value={data.password}
                name="password"
                id="password"
                type="password"
                placeholder="Contraseña"
              />
            </InputContainer>
            <Button type="submit" value="Iniciar sesión" />
          </Form>
        </div>
        <Account>
          <span>¿No tienes una cuenta? </span>
          <Link href="/signup">
            <SwitchLink>Regístrate</SwitchLink>
          </Link>
        </Account>
      </div>
    </div>
  )
}

export default Landing
