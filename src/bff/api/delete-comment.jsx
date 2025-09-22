export const deleteComment = async (commenid) =>
    fetch(`http://localhost:3004/comments/${commenid}`, {
        method: "DELETE",
    });
