// src/bff/operations/fetch-post.jsx

import { getPost, getComments, getUsers, getUser } from '../api'
//
export async function fetchPost(postId) {
  const post = await getPost(postId)

  const comments = await getComments(postId)

  const users = await getUsers()

  const commentsWhitAuthor = comments.map((comment) => {
    const user = users.find(({ id }) => id === comment.authorId)
    return { ...comment, author: user?.login }
  })

  return {
    error: null,
    res: {
      ...post,
      comments: commentsWhitAuthor,
    },
  }
}
