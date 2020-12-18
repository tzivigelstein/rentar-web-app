import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Input } from '../components/Form/FormStyles'
import authContext from '../context/auth/authContext'

const OptionsContainer = styled.div``

const Option = styled.div`
  border-bottom: 2px solid #ddd;
  background: white;
  padding: 0.7rem;
`

const OptionTitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`

const OptionHelper = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
  padding: 0;
  color: #777;
`

const LogoutForm = styled.div`
  width: 90%;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #aaa;
  margin-top: 1rem;
  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    &:last-of-type {
      font-size: 1rem;
      color: #888;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
    span {
      padding: 1rem 2rem;
      background: #f9f9f9;
      border-radius: 8px;
      border: 1px solid #aaa;
      &:first-of-type {
        border: 1px solid red;
        color: red;
      }
    }
  }
`

const Form = styled.form`
  height: 220px;
`

const Settings = () => {
  const AuthContext = useContext(authContext)
  const { user, auth, authUser, logOut, updateUser } = AuthContext

  const [form, setForm] = useState(false)
  const [type, setType] = useState('')

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
    if (!auth && !token) {
      router.push('/login')
    }
  }, [])

  return (
    <>
      {auth ? (
        <>
          <Link href="/profile">
            <p>Back</p>
          </Link>
          {form ? (
            <>
              {type !== 'logout' ? (
                <LogoutForm>
                  <Form>
                    <p>Nuevo {type}</p>
                    <p>Puedes cambiarlo en 1 mes</p>
                    <Input placeholder={type} />
                  </Form>
                </LogoutForm>
              ) : null}
              {type === 'logout' ? (
                <LogoutForm>
                  <p>¿Cerrar sesión?</p>
                  <p>Puedes ingresar más tarde</p>
                  <div>
                    <span
                      onClick={e => {
                        e.preventDefault()
                        logOut()
                      }}
                    >
                      Si, salir
                    </span>
                    <span onClick={() => setForm(!form)}>No</span>
                  </div>
                </LogoutForm>
              ) : null}
            </>
          ) : (
            <div>
              <OptionsContainer>
                <Option
                  onClick={() => {
                    setType('Nombre de usuario')
                    setForm(!form)
                  }}
                >
                  <OptionTitle>Nombre de usuario</OptionTitle>
                  <OptionHelper>{user ? user.username : 'Agregar nombre de usuario'}</OptionHelper>
                </Option>
                <Option
                  onClick={() => {
                    setType('Telefono')
                    setForm(!form)
                  }}
                >
                  <OptionTitle>Teléfono</OptionTitle>
                  <OptionHelper>{user ? user.phone : 'Agregar número de teléfono'}</OptionHelper>
                </Option>
                <Option
                  onClick={() => {
                    setType('Nombre')
                    setForm(!form)
                  }}
                >
                  <OptionTitle>Nombre</OptionTitle>
                  <OptionHelper>{user ? user.name : 'Cambiar nombre de usuario'}</OptionHelper>
                </Option>
                <Option
                  onClick={() => {
                    setType('Contraseña')
                    setForm(!form)
                  }}
                >
                  <OptionTitle>Contraseña</OptionTitle>
                  <OptionHelper>Cambiar contraseña</OptionHelper>
                </Option>
                <Option
                  onClick={() => {
                    setType('logout')
                    setForm(!form)
                  }}
                >
                  <OptionTitle>Cerrar sesión</OptionTitle>
                  <OptionHelper>Cerrar sesión por seguridad, puedes ingresar más tarde</OptionHelper>
                </Option>
              </OptionsContainer>
            </div>
          )}
        </>
      ) : null}
    </>
  )
}

export default Settings
