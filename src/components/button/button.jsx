import styled from "styled-components";

const ButtonContainer = ({ children, className, width, height, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  width: ${({ width = "100%" }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: ${({ height }) => height};
  color: #fff;
  background-color: #242424;
  border: 1px solid #5f5f5f;
  box-shadow: 0px 2px 12px rgba(91, 90, 90, 0.2);
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #323232;
  }
`;
