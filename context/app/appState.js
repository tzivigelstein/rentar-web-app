import React, { useReducer } from 'react'
import appContext from './appContext'
import appReducer from './appReducer'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authToken'
//Import Types

const AppState = ({ children }) => {
  const initialState = {
    
  }
  const [state, dispatch] = useReducer(appReducer, initialState)

  //Dispatch functions

  return (
    <appContext.Provider
      value={{
        
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
