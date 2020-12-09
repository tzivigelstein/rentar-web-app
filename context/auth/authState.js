import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authToken'
import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, SHOW_ALERT, CLEAN_ALERT } from '../../types/index'
import Alert from '../../components/Alert'

const AuthState = ({ children }) => {
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
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.response.data,
      })
    }
  }

  const logIn = async data => {
    console.log(data)
    //const q = await axiosClient.post('/api/users', data)
    //console.log(q.data)
    try {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: q.data,
      })
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response,
      })
      console.log(error.response)
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
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        msg: state.msg,
        type: state.type,
        signUp,
        logIn,
        showAlert,
        cleanAlert,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthState
