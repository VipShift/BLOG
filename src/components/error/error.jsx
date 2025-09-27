import styled from "styled-components";
import { H2 } from "../h2/h2";
//
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const Error = ({ error }) => {
    if (!error) return null;

    return (
        <Div>
            {/* <H2>Fehler</H2> */}

            <div>
                {typeof error === "string"
                    ? error
                    : error?.message ?? String(error)}
            </div>
        </Div>
    );
};
