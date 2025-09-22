import { generateDate } from "../utils";

export const addPost = ({ imageUrl, title, content }) =>
    fetch("http://localhost:3004/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            image_url: imageUrl,
            published_at: generateDate(),
            title,
            content,
        }),
    })
        .then((createPost) => createPost.json())
        .then((data) => {
            return data;
        });
