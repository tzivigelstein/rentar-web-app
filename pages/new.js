import React from 'react'
import Layout from '../components/Layout'
import { Form, InputContainer, Input } from '../components/Form/FormStyles'

const New = () => {
  return (
    <Layout>
      <Form>
        <InputContainer>
          <Input type="file" />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Título" />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Descripcion" />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Ubicación" />
        </InputContainer>
        <InputContainer>
          <Input type="number" placeholder="Precio" />
        </InputContainer>
      </Form>
    </Layout>
  )
}

export default New
