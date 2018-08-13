import PropTypes from 'prop-types'
import React from 'react'

import Icon from './Icon'

export default class IconButton extends React.Component {
  render () {
    const {as, k, ...mods} = this.props

    return (
      <this.props.as block='b' mods={mods}>
        <Icon {...{k}} />
      </this.props.as>
    )
  }
}

IconButton.defaultProps = {
  as: 'button',
  mods: {}
}

IconButton.propTypes = {
  as: PropTypes.string.isRequired,
  k: PropTypes.string.isRequired,
  mods: PropTypes.object.isRequired
}
