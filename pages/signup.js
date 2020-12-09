import React, { useContext, useState } from 'react'
import Link from 'next/link'
import authContext from '../context/auth/authContext'
import Head from 'next/head'
import { Title, Sub, Form, InputContainer, Input, Button, Account, SwitchLink } from '../components/Form/FormStyles'
import Alert from '../components/Alert'

const Signup = () => {
  const AuthContext = useContext(authContext)
  const { msg, signUp } = AuthContext

  const [data, setData] = useState({
    name: null,
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
    signUp(data)
  }

  return (
    <div>
      {msg ? <Alert /> : null}
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </Head>
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
                id="name"
                name="name"
                value={data.name}
                type="text"
                placeholder="Nombre"
              />
            </InputContainer>
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
            <Button type="submit" value="Regístrate" />
          </Form>
        </div>
        <Account>
          ¿Ya tienes una cuenta?{' '}
          <Link href="/landing">
            <SwitchLink>Inicia sesión</SwitchLink>
          </Link>
        </Account>
      </div>
    </div>
  )
}

export default Signup
