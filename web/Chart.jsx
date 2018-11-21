import Chart from 'chart.js'
import PropTypes from 'prop-types'
import React from 'react'
import ReactChartKick, {LineChart} from 'react-chartkick'
import styled from 'styled-components'

ReactChartKick.addAdapter(Chart)

const ChartWrapper = styled.div`
  background-color: ${props => props.theme.black};
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.white};
`

const ChartHead = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 24px;
  
  * { display: inline-block; }
`

const ChartHeadTitle = styled.div`
  font-family: ${props => props.theme.fontSecondary};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 35px;
  margin-right: 10px;
`

const ChartHeadSubtitle = styled.div`
  font-size: 14px;
  line-height: 19px;
  padding-top: 11px;
`

const ChartHeadFlex = styled.div`
  flex: 1;
`

const ChartHeadLinks = styled.div`
  a {
    color: ${props => props.theme.secondary};
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    margin-right: 56px;

    &:last-child { margin-right: 0; }

    &.active { color: ${props => props.theme.white}; }
  }
`

const ChartBody = styled.div`
  padding: 0 24px 24px 24px;
  text-align: center;
`

export const ChartLine = (props) => {
  const {data, links, subtitle, title, ...rest} = props

  return (
    <ChartWrapper {...rest}>
      <ChartHead>
        <ChartHeadTitle>{title}</ChartHeadTitle>
        {!!subtitle && <ChartHeadSubtitle>{subtitle}</ChartHeadSubtitle>}
        <ChartHeadFlex />
        {Array.isArray(links) &&
          <ChartHeadLinks>
            {links.map(l => (
              <a className={l.active ? 'active' : ''} key={l.text} onClick={l.onClick}>{l.text}</a>
            ))}
          </ChartHeadLinks>
        }
      </ChartHead>
      <ChartBody>
        <LineChart data={data} {...rest} />
      </ChartBody>
    </ChartWrapper>
  )
}

ChartLine.propTypes = {
  data: PropTypes.object.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  })),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default {ChartLine}
