//src/pages/post/post.jsx
import { useEffect, useLayoutEffect } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Comments, PostContent, PostForm } from './components'
import { useServerRequest } from '../../hooks'
import { loadPostAsync } from '../../actions/load-post-async'
import { selectPost } from '../../selectors'
import styled from 'styled-components'

const PostContainer = ({ className }) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const isEditing = useMatch('/post/:id/edit')
  const requestServer = useServerRequest()
  const post = useSelector(selectPost)

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, id))
  }, [requestServer, dispatch, id])

  return (
    <>
      <div className={className}>
        {isEditing ? (
          <PostForm post={post} />
        ) : (
          <>
            <PostContent post={post} />
            <Comments
              comments={post.comments}
              postId={post.id ?? ''}
            />
          </>
        )}
      </div>
    </>
  )
}

export const Post = styled(PostContainer)`
  background-color: #1d1d1d;
  margin: 40px 0;
  padding: 40px 50px;
`
