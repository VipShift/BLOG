import { ControlPanel, Logo } from "./components";
import styled from "styled-components";

const Description = styled.div`
  margin: 10px;
  font-style: italic;
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description>
      Веб-технологии <br />
      Написание кода
      <br /> Разбор Ошибок
    </Description>
    <ControlPanel className="control-panel" />
  </header>
);

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 1000px;
  height: 100px;
  padding: 5px 40px;
  background-color: #242424;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
`;
