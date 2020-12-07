import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../../types/index'

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      }
    default:
      break
  }
}
