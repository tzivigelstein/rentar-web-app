import React, { useContext, useEffect } from 'react'
import appContext from '../context/app/appContext'
import styled from '@emotion/styled'
import { HorizontalPostContainer } from './Card/HorizontalCard'
import { HorizontalPosts } from '../pages/index'

const ListPreview = styled(HorizontalPosts)`
  width: 95%;
  margin: 0 auto;
`

const Image = styled.img`
  margin-right: 1rem;
  width: 40%;
  border-radius: 12px;
  border: 3px dotted #ccc;
  padding: 0.5rem;
`

const Preview = () => {
  const { preview } = useContext(appContext)

  return (
    <>
      {preview ? (
        <ListPreview>{preview ? preview.map(p => <Image key={p} src={p} />) : null}</ListPreview>
      ) : (
        'No hay preview'
      )}
    </>
  )
}

export default Preview
