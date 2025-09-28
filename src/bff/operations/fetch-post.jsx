// src/bff/operations/fetch-post.jsx

import { getPost } from "../api";
import { getPostCommentsWithAuthor } from "../utils";
//
export async function fetchPost(postId) {
    let post;
    let error;

    try {
        post = await getPost(postId);
    } catch (postError) {
        error = postError;
    }

    if (error) {
        return {
            error,
            res: null,
        };
    }

    const commentsWhitAuthor = await getPostCommentsWithAuthor(postId);

    return {
        error: null,
        res: {
            ...post,
            comments: commentsWhitAuthor,
        },
    };
}
