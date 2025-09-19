//
import styled from "styled-components";
import { Icon, Input } from "../../../../components";
import { SpecialPanel } from "../special-panel.jsx/special-panel";
import { useRef } from "react";
import { sanitizeContent } from "./utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";

const PostFormContainer = ({
    post: { id, title, content, imageUrl, publishedAt },
    className,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const requestServer = useServerRequest();

    const onSave = () => {
        const newImage = imageRef.current.value;
        const newTitle = titleRef.current.value;
        const newContent = sanitizeContent(contentRef.current.innerHTML);

        dispatch(
            savePostAsync(requestServer, {
                id,
                imageUrl: newImage,
                title: newTitle,
                content: newContent,
            })
        ).then(() => navigate(`/post/${id}`));
    };

    return (
        <div className={className}>
            <SpecialPanel
                publishedAt={publishedAt}
                editButton={
                    <Icon
                        id=" fa-floppy-o"
                        size="22px"
                        margin_r="10px"
                        onClick={() => {
                            onSave();
                        }}
                    />
                }
            />

            <div className="editor">
                <Input
                    ref={imageRef}
                    defaultValue={imageUrl}
                    placeholder="Ссылка на картинку..."
                />
                <Input
                    ref={titleRef}
                    defaultValue={title}
                    placeholder="Заголовок..."
                />
            </div>

            <h3>Содержимое-поста</h3>
            <div
                ref={contentRef}
                className="post-text"
                placeholder="Текст..."
                contentEditable="true"
                suppressContentEditableWarning={true}
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
