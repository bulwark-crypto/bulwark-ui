import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

const Tooltip = (props) => {
  const [ mods, {children, content, ...rest} ] = pickRest(props, ['bottom', 'left', 'primary', 'right', 'top', 'urgent'])
  return (
    <div block='tooltip' {...rest}>
      <span block='tooltip' elem='content' mods={mods}>{content}</span>
      {children}
    </div>
  )
}

Tooltip.propTypes = {
  bottom: PropTypes.bool,
  children: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
  left: PropTypes.bool,
  primary: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  urgent: PropTypes.bool
}

export default Tooltip
