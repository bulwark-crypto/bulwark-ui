import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {animationProgressbar} from '../lib/Animations'
import { primary } from '../lib/Theme'

const ProgressBarWrapper = styled.div`
  animation: all 1s ${animationProgressbar} .1s;
  background-color: ${primary};
  box-shadow: 0 0 10px ${primary};
  display: block;
  height: 4px;
  left: 0;
  position: fixed;
  top: 0;
  width: 0;
  z-index: 100;
`

const ProgressBar = ({v, ...rest}) => (
  <ProgressBarWrapper {...rest} style={{...rest.style, width: `${v}%`}} />
)

ProgressBar.propTypes = {
  v: PropTypes.number.isRequired
}

export default ProgressBar
