import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components'

import {swiftEaseIn, swiftEaseOut} from '../lib/Animations'

import Icon from '../web/Icon'
import { white, panelPadding, fontPrimary, secondary } from '../lib/Theme'

const PanelWrapper = styled.div`
  background-color: ${white};
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
  padding: ${panelPadding} ${panelPadding} 0 ${panelPadding};
  transition: ${swiftEaseOut};

  ${props => props.open ? css`
    padding-bottom: ${panelPadding};
    transition: ${swiftEaseIn};

    ${PanelArrow} i {
      transform: rotate(-180deg);
    }

    ${PanelContent} {
      max-height: 100vh;
      transition: ${swiftEaseIn};
    }
  ` : ''}
`

const PanelHeader = styled.div`
  padding-bottom: ${panelPadding};
  position: relative;
`

const PanelHeaderTitle = styled.div`
  font-family: ${fontPrimary};
  font-size: 20px;
  font-weight: bold;
  height: 26px;
  line-height: 26px;
`

const PanelHeaderSubtitle = styled.div`
  color: ${secondary};
  font-family: ${fontPrimary};
  font-size: 14px;
  height: 19px;
  left: 50%;
  line-height: 19px;
  position: absolute;
  top: 5px;
`

const PanelArrow = styled.div`
  cursor: pointer;
  position: absolute;
  right: 32px;
  top: 6px;
  i { transition: ${swiftEaseIn}; }
`

const PanelContent = styled.div`
  color: ${secondary};
  display: block;
  font-family: ${fontPrimary};
  font-size: 14px;
  margin: 0;
  max-height: 0;
  overflow: hidden;
  padding: 0;
  transition: ${swiftEaseOut};
  width: 100%;
`

export default class Panel extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  state = {
    open: false
  }

  handleClick = () => this.setState({open: !this.state.open})

  render () {
    const open = this.state.open
    const {children, subtitle, title, ...rest} = this.props
    return (
      <PanelWrapper open={open} {...rest} onClick={this.handleClick}>
        <PanelHeader>
          <PanelHeaderTitle>{title}</PanelHeaderTitle>
          <PanelHeaderSubtitle>{subtitle}</PanelHeaderSubtitle>
          <PanelArrow>
            <Icon k='angle-down' />
          </PanelArrow>
        </PanelHeader>
        <PanelContent>{children}</PanelContent>
      </PanelWrapper>
    )
  }
}
