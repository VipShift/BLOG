import styled from "styled-components";
import { Icon, Input } from "../../../../components";
import { SpecialPanel } from "../special-panel.jsx/special-panel";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { sanitizeContent } from "./utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";

const PostFormContainer = ({ post, className }) => {
    const { id, title, content, imageUrl, publishedAt } = post;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const requestServer = useServerRequest();

    const [imageValue, setImageValue] = useState(imageUrl);
    const [titleValue, setTitleValue] = useState(title);
    const contentRef = useRef(null);

    useEffect(() => {
        setImageValue(imageUrl || "");
        setTitleValue(title || "");
        if (contentRef.current) {
            contentRef.current.innerHTML = content || "";
        }
    }, [id, imageUrl, title, content]);

    const onSave = () => {
        const newContant = sanitizeContent(contentRef.current.innerHTML);

        dispatch(
            savePostAsync(requestServer, {
                id,
                imageUrl: imageValue,
                title: titleValue,
                content: newContant,
            })
        ).then(({ id }) => navigate(`/post/${id}`));
    };

    //

    return (
        <div className={className}>
            <SpecialPanel
                id={id}
                publishedAt={publishedAt}
                editButton={
                    <Icon
                        id="fa-floppy-o"
                        size="22px"
                        margin_r="10px"
                        onClick={onSave}
                    />
                }
            />

            <div className="editor">
                <Input
                    value={imageValue}
                    onChange={(e) => setImageValue(e.target.value)}
                    placeholder="Bildlink... (280px/150px)"
                />
                <Input
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                    placeholder="Überschrift..."
                />
            </div>

            <h3>Inhalt des Beitrags</h3>
            <div
                ref={contentRef}
                className="post-text"
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={(e) => setContentText(e.currentTarget.innerHTML)}
            >
                {content}
            </div>
        </div>
    );
};

export const PostForm = styled(PostFormContainer)`
    & .editor {
        padding: 0 0 10px;
    }
    & img {
        float: left;
        margin-right: 20px;
        margin-bottom: 10px;
    }
    & .special-panel {
        display: flex;
        justify-content: space-between;
        margin: -20px 0 20px;
        font-size: 12px;
    }
    & h2 {
        font-size: 18px;
    }
    & .published-at {
        display: flex;
        position: relative;
        color: #afafaf;
    }

    & .buttons {
        display: flex;
        position: relative;
        top: -6px;
    }
    & .post-text {
        text-align: left;
        color: #f8f8f8;
        white-space: pre-wrap;
        border-radius: 7px;
        min-height: 200px;
        background-color: #494949ab;
        padding: 10px;
        overflow-wrap: anywhere;
        word-break: normal;
        hyphens: auto;
    }
`;
