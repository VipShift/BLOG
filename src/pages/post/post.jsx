//src/pages/post/post.jsx
import { useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Comments, PostContent } from './components'
import { useServerRequest } from '../../hooks'
import { loadPostAsync } from '../../actions/load-post-async'
import { selectPost } from '../../selectors'
import styled from 'styled-components'

const PostContainer = ({ className }) => {
  const dispatch = useDispatch()
  const params = useParams()
  const requestServer = useServerRequest()
  const post = useSelector(selectPost)

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.id))
  }, [requestServer, dispatch, params.id])
  return (
    <>
      <div className={className}>
        <PostContent post={post} />
        <Comments
          comments={post.comments}
          postId={post.id ?? ''}
        />
      </div>
    </>
  )
}

export const Post = styled(PostContainer)`
  background-color: #1d1d1d;
  margin: 40px 0;
  padding: 40px 50px;
`
