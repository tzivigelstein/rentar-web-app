import React, { useReducer } from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authToken'
//Import Types

const AppState = ({ children }) => {
  const initialState = {
    msg: null,
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

  return (
    <appContext.Provider
      value={{
        showAlert,
        cleanAlert,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
