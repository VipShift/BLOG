//src/pages/post/post.jsx
import { useEffect, useLayoutEffect } from "react";
import { useMatch, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Comments, PostContent, PostForm } from "./components";
import { useServerRequest } from "../../hooks";
import { loadPostAsync, resetPostData } from "../../actions";
import { selectPost } from "../../selectors";
import styled from "styled-components";

const PostContainer = ({ className }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const requestServer = useServerRequest();
    const post = useSelector(selectPost);
    const isCreating = useMatch("/post/create");
    const isEditing = useMatch(`/post/${id}/edit`);

    useLayoutEffect(() => {
        if (isCreating) {
            dispatch(resetPostData());
        }
        if (!isCreating && !isEditing) {
            dispatch(loadPostAsync(requestServer, id));
        }
    }, [dispatch, id, isCreating, isEditing, requestServer]);

    useEffect(() => {
        if (isCreating) {
            return;
        }

        dispatch(loadPostAsync(requestServer, id));
    }, [requestServer, dispatch, id, isCreating]);

    return (
        <>
            <div className={className}>
                {isCreating || isEditing ? (
                    <PostForm post={post} />
                ) : (
                    <>
                        <PostContent post={post} />
                        <Comments comments={post.comments} postId={post.id} />
                    </>
                )}
            </div>
        </>
    );
};

export const Post = styled(PostContainer)`
    background-color: #1d1d1d;
    margin: 40px 0;
    padding: 40px 50px;
`;
