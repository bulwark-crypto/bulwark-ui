import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

// Modal
export const Modal = (props) => {
  const [mods, {children, onCancel, ...rest}] = pickRest(props, ['open', 'overlay'])
  return (
    <div block='modal' mods={mods} onClick={onCancel}>
      <div block='modal' elem='container' {...rest}>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  overlay: PropTypes.bool
}

// Actions
export const ModalActions = ({children, ...rest}) => (
  <div block='modal' elem='actions' {...rest}>
    {children}
  </div>
)

ModalActions.propTypes = {
  children: PropTypes.any.isRequired
}

// Content
export const ModalContent = ({children, ...rest}) => (
  <div block='modal' elem='content' {...rest}>
    {children}
  </div>
)

ModalContent.propTypes = {
  children: PropTypes.any.isRequired
}

// Title
export const ModalTitle = ({children, ...rest}) => (
  <div block='modal' elem='title' {...rest}>
    {children}
  </div>
)

ModalTitle.propTypes = {
  children: PropTypes.any.isRequired
}

export default {Modal, ModalActions, ModalContent, ModalTitle}
