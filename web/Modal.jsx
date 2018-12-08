import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components'
import { animationModalContainer } from '../lib/Animations'

const ModalWrapper = styled.div`
  background: transparent;
  bottom: 0;
  left: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: scale(0, 0);
  z-index: 10;

  ${props => props.open ? css`
    opacity: 1;
    transform: scale(1, 1);

    ${ModalContainer} {
      opacity: 1;
      transition: ${animationModalContainer};
    }

    @media screen {
      @media only screen and (max-width: 768px) {
        height: 100%;
        width: 100%;

        ${ModalContainer} {
          bottom: 0;
          height: 100%;
          left: 0;
          right: 0;
          top: 0;
          transform: none;
          transition: none;
          width: 100%;
        }
      }
    }
  ` : ''}

  ${props => props.overlay ? css`
    background-color: rgba(0, 0, 0, 0.5);
    transition: none;
  ` : ''}
`

const ModalContainer = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  left: 50%;
  margin: 0;
  opacity: 0;
  padding: ${props => props.theme.modalPadding};
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

// Modal
export const Modal = (props) => {
  const {children, onCancel, ...rest} = props
  return (
    <ModalWrapper onClick={onCancel} {...rest}>
      <ModalContainer>
        {children}
      </ModalContainer>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  overlay: PropTypes.bool
}

// Actions
export const ModalActions = styled.div`
  margin: 0;
  padding-top: 42px;
  text-align: right;

  .button, button { margin: 0; }

  .button:first-child, button:first-child { margin-right: 20px; }
`

ModalActions.propTypes = {
  children: PropTypes.any.isRequired
}

// Content
export const ModalContent = styled.div`
  margin: 0;
  padding: 0;

  * {
    margin: 0;
    padding: 0;
  }
`

ModalContent.propTypes = {
  children: PropTypes.any.isRequired
}

// Title
export const ModalTitle = styled.div`
  font-family: ${props => props.theme.fontSecondary};
  font-size: 20px;
  font-weight: bold;
  height: 28px;
  letter-spacing: -1px;
  line-height: 30px;
  margin-bottom: 17px;

  * {
    margin: 0;
    padding: 0;
  }
`

ModalTitle.propTypes = {
  children: PropTypes.any.isRequired
}

export default {Modal, ModalActions, ModalContent, ModalTitle}
