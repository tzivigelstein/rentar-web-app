import React, { useContext } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { TitlesH2 } from './index'
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

const Settings = () => {
  const AuthContext = useContext(authContext)
  const { user } = AuthContext
  return (
    <div>
      <Link href="/">
        <TitlesH2>Settings</TitlesH2>
      </Link>
      <OptionsContainer>
        <Option>
          <OptionTitle>Nombre de usuario</OptionTitle>
          <OptionHelper>{user.username ? user.username : 'Agregar nombre de usuario'}</OptionHelper>
        </Option>
        <Option>
          <OptionTitle>Teléfono</OptionTitle>
          <OptionHelper>{user.phone ? user.phone : 'Agregar número de teléfono'}</OptionHelper>
        </Option>
        <Option>
          <OptionTitle>Nombre</OptionTitle>
          <OptionHelper>{user.name ? user.name : 'Cambiar nombre de usuario'}</OptionHelper>
        </Option>
        <Option>
          <OptionTitle>Contraseña</OptionTitle>
          <OptionHelper>Cambiar contraseña</OptionHelper>
        </Option>
      </OptionsContainer>
    </div>
  )
}

export default Settings
