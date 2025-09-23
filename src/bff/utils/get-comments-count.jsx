export const getCommentsCount = (comments = [], postId) => {
    const postComents = comments.filter(
        ({ postId: commentPostId }) => commentPostId === postId
    );
    return postComents.length;
};
