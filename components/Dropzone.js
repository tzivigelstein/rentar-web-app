import React, { useCallback, useContext } from 'react'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone'
import appContext from '../context/app/appContext'
import styled from '@emotion/styled'
import { Form, Input, InputContainer } from '../components/Form/FormStyles'

const ImageContainer = styled.div`
  border-bottom: 1px solid #444;
`

const ImageList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
  padding: 0;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  padding: 0;
`

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

const Helper = styled.p`
  color: #777;
  text-align: center;
`

const InputText = styled.p`
  text-align: center;
  background: #76b041ff;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  margin: 0 auto;
`

const ForwardButton = styled.p`
  text-align: center;
  background: #76b041ff;
  color: white;
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  max-width: 90%;
  margin: 0 auto;
`

const HiddenInput = styled.input`
  display: none;
`

const ImageQuantity = styled.div`
  text-align: center;
  padding: 1.5rem 0 1rem 0;
`

const Dropzone = () => {
  const AppContext = useContext(appContext)
  const { uploadFiles } = AppContext

  const formData = new FormData()

  const onDropRejected = () => {
    console.log('No se aceptó')
  }
  const onDropAccepted = useCallback(async acceptedFiles => {
    formData.append('file', acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: 'image/*',
    onDropAccepted,
    onDropRejected,
    maxFiles: 5,
    maxSize: 5000000,
  })

  const fileList = acceptedFiles.map(file => (
    <Image key={file.lastModified} src={URL.createObjectURL(acceptedFiles[0])} />
  ))

  return (
    <>
      <ImageQuantity>{acceptedFiles.length}/1</ImageQuantity>
      <InputContainer>
        {acceptedFiles.length > 0 ? (
          <ImageContainer>
            <ImageList>{fileList}</ImageList>
          </ImageContainer>
        ) : null}
      </InputContainer>
      {acceptedFiles.length === 1 ? (
        <ForwardButton onClick={() => uploadFiles(formData)}>Siguiente</ForwardButton>
      ) : (
        <InputContainer>
          <FileInput {...getRootProps()}>
            {isDragActive ? (
              <Helper>Drop it here</Helper>
            ) : (
              <div>
                <Helper>Arrastra tus fotos aquí o</Helper>
                <InputText>Selecciona tus fotos</InputText>
              </div>
            )}
          </FileInput>
          <HiddenInput multiple id="file-input" {...getInputProps()} />
        </InputContainer>
      )}
    </>
  )
}

export default Dropzone
