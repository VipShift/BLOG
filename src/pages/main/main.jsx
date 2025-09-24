// src/pages/main/main.jsx
import styled from "styled-components";
import { useState, useEffect } from "react";
import { PostCard } from "./components/post-card/post-carg";
import { useServerRequest } from "../../hooks";
import { Pagination } from "./components";
import { PAGINATION_LIMIT } from "../../bff/constants";

const MainContainer = ({ className }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const requestServer = useServerRequest();

    useEffect(() => {
        requestServer("fetchPosts", page, PAGINATION_LIMIT).then((posts) => {
            setPosts(posts.res);
            setTotalPages(Math.ceil(posts.total / PAGINATION_LIMIT));
        });
    }, [requestServer, page]);

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
            {totalPages > 1 && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            )}
        </div>
    );
};

export const Main = styled(MainContainer)`
    & .post-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
`;
