import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../../components";
import { Comment } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../../selectors";
import { useServerRequest } from "../../../../hooks";
import { addCommentAsync } from "../../../../actions";

//

const CommentsContainer = ({ className, comments, postId }) => {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const [newComment, setNewComment] = useState("");
    const requestServer = useServerRequest();

    const onNewCommentAdd = (userId, postId, content) => {
        dispatch(addCommentAsync(requestServer, userId, postId, content));
        setNewComment("");
    };

    //
    return (
        <div className={className}>
            <div className="new-comment">
                <textarea
                    name="comment"
                    value={newComment}
                    placeholder="Написать комментарий..."
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <Icon
                    id="fa-paper-plane-o"
                    size="22px"
                    onClick={() => onNewCommentAdd(userId, postId, newComment)}
                />
            </div>

            <div className="comments">
                {comments.map(({ id, author, content, publishedAt }) => (
                    <Comment
                        key={id}
                        id={id}
                        postId={postId}
                        author={author}
                        content={content}
                        publishedAt={publishedAt}
                    />
                ))}
            </div>
        </div>
    );
};

export const Comments = styled(CommentsContainer)`
    //   display: flex;
    margin: 10px auto;

    & .new-comment {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
    & .new-comment textarea {
        width: 100%;
        height: 80px;
        padding: 10px 10px;
        margin: 10px 0;
        font-size: 14px;
        border-radius: 10px;
        background-color: #393939;
        box-shadow: 0px 2px 10px rgba(63, 61, 61, 0.2);
        border: none;
        resize: none;
    }
`;
