// src/bff/api/get-post.jsx
import { transformPost } from "../transformers/transform-post";

export const getPost = async (postId) =>
    fetch(`http://localhost:3004/posts/${postId}`)
        .then((res) => {
            if (!res.ok) {
                const error =
                    res.status === 404
                        ? "Dieser Beitrag existiert nicht"
                        : "Fehler bei der Anfrage";
                return Promise.reject(new Error(error));
            }
            return res.json();
        })
        .then((loadedPost) => loadedPost && transformPost(loadedPost));
