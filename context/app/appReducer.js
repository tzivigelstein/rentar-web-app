import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, SET_NEW_POST_DATA } from '../../types/index'

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      }
    case SET_NEW_POST_DATA:
      return {
        ...state,
        newPost: action.payload,
      }
    default:
      break
  }
}
