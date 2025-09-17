import { styled } from 'styled-components'
//

const TableRowContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>
}
export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;
  width: 600px;
  margin-bottom: 10px;
  border: ${({ border }) => (border ? '1px solid #5f5f5f' : 'none')};
  box-shadow: ${({ shadow }) =>
    shadow ? '0px 2px 12px rgba(255, 255, 255, 0.2)' : 'none'};
  border-radius: 15px;

  & > div {
    display: flex;
    padding: 0 10px;
  }
  & .login-column {
    width: 172px;
  }
  & .register-at-column {
    width: 213px;
  }
  & .role-column {
    width: auto;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  }
`
