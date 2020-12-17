import React from 'react'
import appContext from '../context/app/appContext'
import { Form, InputContainer, Input } from '../components/Form/FormStyles'

const PostForm = () => {
  const AppContext = useContext(appContext)
  const { newPost } = AppContext
  return (
    <Form>
      <InputContainer>
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
      </InputContainer>
    </Form>
  )
}

export default PostForm
