import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../../components";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 6px;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 80px;
  border: 1px solid #ffffff;
  background-color: #242424;
`;

const StyledButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <RightAligned>
        <StyledLink to="/login">Войти</StyledLink>
      </RightAligned>
      <RightAligned>
        <StyledButton onClick={() => navigate(-1)}>
          <Icon id="fa-arrow-circle-left" margin_r="10px 0 0 0" />
        </StyledButton>
        <Link to="/post">
          <Icon id="fa fa-file-text" margin_r="10px 0 0 10px" />
        </Link>
        <Link to="/users">
          <Icon id="fa fa-users" margin_r="10px 0 0 10px" />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
