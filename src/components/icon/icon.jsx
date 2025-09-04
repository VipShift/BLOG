import styled from 'styled-components'

const IconContainer = ({ className, id }) => (
  <div className={className}>
    <i className={`fa ${id} `} aria-hidden="true"></i>
  </div>
)

export const Icon = styled(IconContainer)`
  font-size: ${({ size = '24px' }) => size};
  margin-right: ${({ margin_r = '0' }) => margin_r};

  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  }
`
