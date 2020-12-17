import React, { useCallback, useContext, useState } from 'react'
import appContext from '../context/app/appContext'
import styled from '@emotion/styled'
import { Form, Input, InputContainer } from '../components/Form/FormStyles'

const FileInput = styled.label`
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto auto;
  height: 200px;
  border-radius: 8px;
  border: 3px dashed #aaa;
  outline: none;
  &:focus {
    border-color: #76b041ff;
  }
  &:hover {
    cursor: pointer;
  }
`


const InputText = styled.p`
  text-align: center;
  background: #76b041ff;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  margin: 0 auto;
`

export const HiddenInput = styled.input`
  display: none;
`

const ImageQuantity = styled.div`
  text-align: center;
  padding: 1.5rem 0 1rem 0;
`

const Post = () => {
  const AppContext = useContext(appContext)
  const { createPreview } = AppContext

  const maxFiles = 6

  const handleChange = useCallback(async e => {
    const acceptedFiles = e.target.files
    const preview = []

    for (let i = 0; i < acceptedFiles.length; i++) {
      preview.push(URL.createObjectURL(acceptedFiles[i]))
    }

    createPreview(preview)
    /* let count = 0
    if (count < 6) {
      const formData = new FormData()
      for (let i = 0; i < acceptedFiles.length; i++) {
        formData.append('files', acceptedFiles)
      }
      
      createPost(formData)
    } else {
      console.log('El límite es de 6 archivos')
    } */
  }, [])

  return (
    <>
      <ImageQuantity>{/*  {f.length}/{maxFiles} */}</ImageQuantity>
      <InputContainer>
        <FileInput htmlFor="file-input">
          <div>
            <InputText>Selecciona tus fotos</InputText>
          </div>
        </FileInput>
        <HiddenInput accept="image/*" multiple id="file-input" type="file" onChange={handleChange} />
      </InputContainer>
    </>
  )
}

export default Post
