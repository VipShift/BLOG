import styled from 'styled-components'
import { Icon } from '../../../../components'

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
  return (
    <div className={className}>
      <div className="published-at">
        <Icon
          id="fa-calendar-o"
          margin_r="10px"
          size="16px"
        />
        <div className="date">{publishedAt}</div>
      </div>

      <div className="buttons">
        {editButton}
        <Icon
          id="fa-trash-o"
          size="22px"
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

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
`
