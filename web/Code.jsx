import PropTypes from 'prop-types'
import styled from 'styled-components'
import {lighten} from 'polished'
import { black, gray, fontSecondary } from '../lib/Theme'

const Code = styled.pre`
  background-color: ${props => lighten(0.3, gray(props))};
  color: ${black};
  font-family: ${fontSecondary};
  padding: 20px;
`

Code.propTypes = {
  children: PropTypes.node.isRequired
}

export default Code
