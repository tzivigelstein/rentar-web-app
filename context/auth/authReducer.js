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

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        msg: action.payload.msg,
        type: action.payload.type,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        auth: true,
      }
    case AUTH_USER:
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        auth: true,
      }
    case LOG_OUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: '',
        auth: null,
        user: null,
      }
    case CLEAN_ALERT:
      return {
        ...state,
        msg: null,
        type: null,
      }
    default:
      break
  }
}
