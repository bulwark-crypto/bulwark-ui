import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {lighten} from 'polished'

const Code = styled.pre`
  background-color: ${props => lighten(0.3, props.theme.gray)};
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontSecondary};
  padding: 20px;
`

Code.propTypes = {
  children: PropTypes.node.isRequired
}

export default Code
