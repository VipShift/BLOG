// src/bff/api/get-post.jsx
import { transformPost } from '../transformers/transform-post'

export const getPost = async (postId) =>
  fetch(`http://localhost:3004/posts/?id=${postId}`)
    .then((loadedPost) => loadedPost.json())
    .then(([loadedPost]) => loadedPost && transformPost(loadedPost))
