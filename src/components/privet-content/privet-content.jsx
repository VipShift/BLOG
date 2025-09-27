// import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { checkAccess } from "../../utils";
import { Error } from "../error/error";
import { ERROR } from "../../constants";
//
// const Div = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     @media (max-width: 600px) {
//         font-size: 14px;
//     }
// `;

export const PrivetContent = ({ children, access, serverError = null }) => {
    const userRole = useSelector(selectUserRole);

    const accessError = checkAccess(access, userRole)
        ? null
        : ERROR.ACCESS_DENIED;

    const error = serverError || accessError;

    return error ? <Error error={error} /> : children;
};
