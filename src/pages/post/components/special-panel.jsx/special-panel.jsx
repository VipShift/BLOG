import styled from "styled-components";
import { Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { closeModal, openModal, removePostAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
    //
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const requestServer = useServerRequest();

    const onPpostRemove = (id) => {
        dispatch(
            openModal({
                text: "Удалить статью?",
                onConfirm: () => {
                    dispatch(removePostAsync(requestServer, id)).then(() =>
                        navigate("/")
                    ),
                        dispatch(closeModal());
                },
                onCancel: () => dispatch(closeModal()),
            })
        );
    };

    return (
        <div className={className}>
            <div className="published-at">
                {publishedAt && (
                    <Icon
                        id="fa-calendar-o"
                        margin_r="10px"
                        size="16px"
                        inactiv={true}
                    />
                )}
                <div className="date">{publishedAt}</div>
            </div>

            <div className="buttons">
                {editButton}
                {publishedAt && (
                    <Icon
                        id="fa-trash-o"
                        size="22px"
                        onClick={() => onPpostRemove(id)}
                    />
                )}
            </div>
        </div>
    );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
    display: flex;
    justify-content: space-between;
    margin: -20px 0 20px;
    font-size: 12px;

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
`;
