// src/actions/load-post-async.jsx
import { setPostData } from "./set-post-data";

export const loadPostAsync = (requestServer, postId) => async (dispatch) =>
    requestServer("fetchPost", postId).then((postData) => {
        if (postData.res) {
            dispatch(setPostData(postData.res));
        }
        return postData;
    });
