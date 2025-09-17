import styled from 'styled-components'
import { Button } from '../button/button'
import { useSelector } from 'react-redux'
import {
  selectModalIsOpen,
  selectModalText,
  selectModalOnConfirm,
  selectModalOnCancel,
} from '../../selectors'

//

const ModalContainer = ({ className }) => {
  const isOpen = useSelector(selectModalIsOpen)
  const text = useSelector(selectModalText)
  const onConfirm = useSelector(selectModalOnConfirm)
  const onCancel = useSelector(selectModalOnCancel)

  if (!isOpen) {
    return null
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text}</h3>
        <div className="buttons">
          <Button onClick={onConfirm}>Да</Button>
          <Button onClick={onCancel}>Отменить</Button>
        </div>
      </div>
    </div>
  )
}
export const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.502);
  }

  & .box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: #000000;
    box-shadow: 0px 2px 10px rgba(63, 61, 61, 0.2);
  }

  & .buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    padding: 0 10px;
    justify-content: space-between;
    width: 100%;
  }
`
