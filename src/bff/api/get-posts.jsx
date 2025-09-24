// src/bff/api/get-posts.jsx
import { transformPost } from "../transformers/transform-post";

export const getPosts = (page, perPage) =>
    fetch(
        `http://localhost:3004/posts?_page=${page}&_per_page=${perPage}`
    ).then(async (res) => {
        const loadedData = await res.json();
        const loadedPosts = loadedData.data;
        const total = loadedData.items;

        return {
            posts: loadedPosts.map(transformPost),
            total: Number(total),
        };
    });
