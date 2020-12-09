import React from 'react'
import Layout from '../components/Layout'
import { Form, InputContainer, Input } from '../components/Form/FormStyles'
import styled from '@emotion/styled'

const FileInput = styled.label`
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  margin: 2px auto;
  width: 100%;
  border-radius: 8px;
  border: 3px dashed #aaa;
  outline: none;
  height: 100px;
  &:focus {
    border-width: 1.7px;
    border-color: #76b041ff;
  }
`

const InputText = styled.p`
  text-align: center;
  background: #76b041ff;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 8px;
`

const HiddenInput = styled.input`
  display: none;
`

const New = () => {
  return (
    <Layout>
      <Form>
        <InputContainer>
          <FileInput htmlFor="file">
            <InputText>Sube tus imágenes</InputText>
          </FileInput>
          <HiddenInput type="file" id="file" />
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
