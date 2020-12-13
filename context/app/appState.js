import React, { useReducer } from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authToken'
import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, SET_NEW_POST_DATA } from '../../types/index'
import { results } from '../../posts'

const AppState = ({ children }) => {
  const initialState = {
    baner: null,
    posts: null,
    newPost: {
      file: null,
      title: null,
      description: null,
      location: null,
      price: null,
    },
  }
  const [state, dispatch] = useReducer(appReducer, initialState)

  //Dispatch functions

const showAuthBaner = (data) => {
console.log(data)
}

  const uploadFiles = data => {
    console.log(data)
  }

  const createNewPost = data => {
    try {
      dispatch({
        type: SET_NEW_POST_DATA,
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
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
        baner:state.baner,
        posts: state.posts,
        newPost: state.newPost,
        showAuthBaner,
        uploadFiles,
        createNewPost,
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
