import PropTypes from 'prop-types'
import React from 'react'
import {kill} from '../lib/utils'
import Icon from './Icon'
import styled, {css} from 'styled-components'
import { primary } from '../lib/Theme'
import { white } from 'kleur'

const TabWrapper = styled.div`
  display: inline-block;

  ${props => props.active ? css`
    ${TabTitle} { font-weight: bold; }
  ` : ''}
`

const TabTitle = styled.div`
  cursor: pointer;
  font-size: 16px;
  line-height: 21px;
  padding: 15px 42px;

  :hover { font-weight: bold; }
`

const TabIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  height: 70px;
  padding: 23px 63px;

  &:hover { font-weight: bold; }
`

// Tab
export const Tab = (props) => {
  const {children, icon, index, onClick, title, ...rest} = props
  return (
    <TabWrapper {...rest}>
      {!!title && <TabTitle onClick={onClick}>{title}</TabTitle>}
      {!!icon && <TabIcon onClick={onClick}><Icon k={icon} /></TabIcon>}
    </TabWrapper>
  )
}

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}

const TabsWrapper = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;
`

const TabsBar = styled.div`
  background-color: ${primary};
  height: 1px;
  position: absolute;
  top: 50px;
  transition: left .2s ease;
  -webkit-transition: left .2s ease;
`

const TabsContent = styled.div`
  background-color: ${white};
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  margin-top: 5px;
  padding: 32px;
  text-align: left;
  width: 100%;
`

const TabsList = styled.div`
  background-color: ${white};
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  position: relative;
`

const TabsListItems = styled.span`
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
` // none of this was ever working, what?

const TabsClear = styled.div`
  clear: both;
`

// Tabs
export class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    index: 0,
    left: 0,
    width: 149
  }

  tabs = null

  componentDidMount () {
    this.reselectTab()
    window.addEventListener('resize', this.reselectTab)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.reselectTab)
  }

  handleSelect = (ev, index) => {
    kill(ev)
    const state = {index}

    if (ev && ev.target) {
      const rect = ev.target.parentNode.getBoundingClientRect()
      state.left = rect.left
      state.width = Math.abs(rect.right - rect.left)
    }

    this.setState(state)
  }

  reselectTab = () => {
    this.selectTab(this.state.index)
  }

  selectTab = (index = 0) => {
    if (this.tabs && this.tabs.children) {
      this.tabs.children[index].children[0].click()
    }
  }

  render () {
    const {children, ...rest} = this.props
    // Clone tabs and add props
    let content = null
    let hasIcon = false
    const tabs = (Array.isArray(children) ? children : [children]).map((t, i) => {
      if (!hasIcon && !!t.props.icon) hasIcon = true
      if (i === this.state.index) content = t.props.children
      return React.cloneElement(t, {
        active: i === this.state.index,
        key: i,
        onClick: t.props.disabled ? undefined : ev => this.handleSelect(ev, i)
      })
    })

    // Setup bar style
    const barStyle = {
      left: this.state.left,
      top: (hasIcon ? 70 : 52) - 1,
      width: this.state.width
    }

    return (
      <TabsWrapper {...rest}>
        <TabsList>
          <TabsListItems ref={i => { this.tabs = i }}>
            {tabs}
            <TabsClear />
          </TabsListItems>
        </TabsList>
        <TabsContent>{content}</TabsContent>
        <TabsBar style={barStyle} />
      </TabsWrapper>
    )
  }
}

export default {Tab, Tabs}
