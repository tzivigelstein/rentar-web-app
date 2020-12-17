import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authToken'
import axios from 'axios'

import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  UPDATE_USER,
  AUTH_USER,
  LOG_OUT,
  CLEAN_ALERT,
} from '../../types/index'
import { useRouter } from 'next/router'

const AuthState = ({ children }) => {
  const router = useRouter()
  const initialState = {
    token: typeof window != 'undefined' ? localStorage.getItem('token') : '',
    auth: null,
    user: null,
    msg: null,
    type: null,
  }
  const [state, dispatch] = useReducer(authReducer, initialState)

  //Dispatch functions
  const signUp = async data => {
    try {
      const q = await axiosClient.post('/api/users', data)
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: q.data,
      })
      router.push('/')
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.response.data,
      })
    }
    setTimeout(() => {
      dispatch({
        type: CLEAN_ALERT,
      })
    }, 3000)
  }

  const logIn = async data => {
    try {
      const q = await axiosClient.post('/api/auth', data)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: q.data,
      })
      router.push('/')
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data,
      })
    }
    setTimeout(() => {
      dispatch({
        type: CLEAN_ALERT,
      })
    }, 3000)
  }

  const authUser = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      authToken(token)
    }

    try {
      const q = await axiosClient.get('/api/auth')
      if (q.data.user) {
        dispatch({
          type: AUTH_USER,
          payload: q.data.user,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async (newImage, id) => {
    try {
      const f = new FormData()
      f.append('image', newImage)
      const q = await axiosClient.post(`/api/users/${id}`, f)
      dispatch({
        type: UPDATE_USER,
        payload: q.data.user,
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const logOut = () => {
    router.push('/')
    dispatch({
      type: LOG_OUT,
    })
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        msg: state.msg,
        type: state.type,
        signUp,
        logIn,
        authUser,
        updateUser,
        logOut,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthState
