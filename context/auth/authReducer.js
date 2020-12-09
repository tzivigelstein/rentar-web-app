import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR } from '../../types/index'

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNUP_ERROR:
      return {
        ...state,
        msg: action.payload.msg,
        type: action.payload.type,
      }
    default:
      break
  }
}
