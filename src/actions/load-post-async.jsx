// src/actions/load-post-async.jsx
import { setPostData } from './set-post-data'

export const loadPostAsync = (requestServer, postId) => async (dispatch) => {
  requestServer('fetchPost', postId).then((postData) => {
    dispatch(setPostData(postData.res))
  })
}
