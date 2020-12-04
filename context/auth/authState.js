import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authTokenf'
//Import Types

const AuthState = ({ children }) => {
  const initialState = {
    token: typeof window != undefined ? localStorage.getItem('token') : '',
    auth: null,
    user: null,
    msg: null,
  }
  const [state, dispatch] = useReducer(authReducer, initialState)

  //Dispatch functions

  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        msg: state.msg,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthState
