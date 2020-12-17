import React, { useReducer } from 'react'
import { SET_PREVIEW, GET_POSTS_SUCCESS, GET_POSTS_ERROR, SET_NEW_POST_DATA } from '../../types/index'
import appContext from './appContext'
import appReducer from './appReducer'
import { results } from '../../posts'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authToken'

const AppState = ({ children }) => {
  const initialState = {
    posts: null,
    preview: null,
    newPost: {
      file: null,
      title: null,
      description: null,
      location: null,
      price: null,
    },
  }
  const [state, dispatch] = useReducer(appReducer, initialState)

  const createPreview = data => {
    dispatch({
      type: SET_PREVIEW,
      payload: data,
    })
  }

  const createPost = data => {
    console.log(data)
  }

  const getPosts = async () => {
    try {
      /* const q = await axiosClient('/posts') */
      const q = results.posts
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: q,
      })
    } catch (error) {
      dispatch({
        type: GET_POSTS_ERROR,
        payload: error.response,
      })
    }
  }

  const showAlert = msg => {
    dispatch({
      type: SHOW_ALERT,
    })
  }

  const cleanAlert = () => {
    dispatch({
      type: CLEAN_ALERT,
    })
  }

  return (
    <appContext.Provider
      value={{
        posts: state.posts,
        preview: state.preview,
        newPost: state.newPost,
        createPreview,
        getPosts,
        showAlert,
        cleanAlert,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
