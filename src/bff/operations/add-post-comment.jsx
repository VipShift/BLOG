// import { getComments, getPost, addComment, getUsers } from "../api";
import { getPostCommentsWithAuthor } from "../utils";
import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { addComment, getPost } from "../api";
//

export const addPostComment = async (hash, userId, postId, content) => {
    const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

    const access = await sessions.access(hash, accessRoles);
    if (!access) {
        return {
            error: " Доступ запрещен",
            res: null,
        };
    }

    await addComment(userId, postId, content);
    const post = await getPost(postId);

    const comentWithAuthor = await getPostCommentsWithAuthor(postId);

    return {
        error: null,
        res: {
            ...post,
            comments: comentWithAuthor,
        },
    };
};
