// src/pages/main/main.jsx
import styled from "styled-components";
import { useState, useEffect } from "react";
import { PostCard } from "./components/post-card/post-carg";
import { useServerRequest } from "../../hooks";
//
const MainContainer = ({ className }) => {
    const [posts, setPosts] = useState([]);
    const requestServer = useServerRequest();

    useEffect(() => {
        requestServer("fetchPosts").then((resp) => {
            setPosts(resp.res);
        });
    }, [requestServer]);

    return (
        <div className={className}>
            <div className="post-list">
                {posts.map(
                    ({ id, imageUrl, title, publishedAt, commentsCount }) => (
                        <PostCard
                            key={id}
                            id={id}
                            imageUrl={imageUrl}
                            title={title}
                            publishedAt={publishedAt}
                            commentsCount={commentsCount}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export const Main = styled(MainContainer)`
    & .post-list {
        display: flex;
        flex-wrap: wrap;
    }
`;
