import { forwardRef } from "react";
import styled from "styled-components";

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
  return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
  width: ${({ width = "100%" }) => width};
  height: 40px;
  margin: 0 0 10px;
  padding: 10px;
  text-align: center;

  font-size: 20px;
  background-color: #242424;
  border: 1px solid #5f5f5f;
  box-shadow: 0px 2px 12px rgba(160, 160, 160, 0.2);
  border-radius: 10px;
`;
