// src/bff/api/fetch-posts.jsx
import { getComments, getPosts } from "../api";
import { getCommentsCount } from "../utils";

export const fetchPosts = async (searchPhrase, page, perPage) => {
    const [postsData, comments] = await Promise.all([
        getPosts(searchPhrase, page, perPage),
        getComments(),
    ]);

    return {
        error: null,
        res: postsData.posts.map((post) => ({
            ...post,
            commentsCount: getCommentsCount(comments, post.id),
        })),
        total: postsData.total,
    };
};
