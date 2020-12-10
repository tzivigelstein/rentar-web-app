import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { Form, InputContainer, Input } from '../components/Form/FormStyles'
import Dropzone from '../components/Dropzone'
import authContext from '../context/auth/authContext'
import { useRouter } from 'next/router'

const New = () => {
  const AuthContext = useContext(authContext)
  const { auth } = AuthContext

  return (
    <Layout>
      <Dropzone />
      <Form>
        {/* <InputContainer>
          <Input
            name="title"
            value={newPost.title}
            onChange={e => createNewPost({ ...newPost, [e.target.name]: e.target.value })}
            type="text"
            placeholder="Título"
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="description"
            value={newPost.description}
            onChange={e => createNewPost({ ...newPost, [e.target.name]: e.target.value })}
            type="text"
            placeholder="Descripcion"
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="location"
            value={newPost.location}
            onChange={e => createNewPost({ ...newPost, [e.target.name]: e.target.value })}
            type="text"
            placeholder="Ubicación"
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="price"
            value={newPost.price}
            onChange={e => createNewPost({ ...newPost, [e.target.name]: e.target.value })}
            type="number"
            placeholder="Precio"
          />
        </InputContainer> */}
      </Form>
    </Layout>
  )
}

export default New
