import { styled } from 'styled-components'
//

const TableRowContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>
}
export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: ${({ border }) => (border ? '1px solid #5f5f5f' : 'none')};

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
`
