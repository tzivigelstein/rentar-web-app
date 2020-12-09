import React, { useReducer } from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authToken'
import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../../types/index'
import { results } from '../../posts'

const AppState = ({ children }) => {
  const initialState = {
    posts: null,
  }
  const [state, dispatch] = useReducer(appReducer, initialState)

  //Dispatch functions
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

  return (
    <appContext.Provider
      value={{
        posts: state.posts,
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
