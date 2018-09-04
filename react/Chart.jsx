import Chart from 'chart.js'
import PropTypes from 'prop-types'
import React from 'react'
import ReactChartKick, {LineChart} from 'react-chartkick'
import {pickRest} from '../lib/utils'

ReactChartKick.addAdapter(Chart)

export const ChartLine = (props) => {
  const [mods, {data, links, subtitle, title, ...rest}] = pickRest(props, [])

  return (
    <div block='chart' mods={mods} {...rest}>
      <div block='chart' elem='head'>
        <div block='chart__head' elem='title'>{title}</div>
        {!!subtitle && <div block='chart__head' elem='subtitle'>{subtitle}</div>}
        <div block='chart__head' elem='flex' />
        {Array.isArray(links) &&
          <div block='chart__head' elem='links'>
            {links.map(l => (
              <a className={l.active ? 'active' : ''} key={l.text} onClick={l.onClick}>{l.text}</a>
            ))}
          </div>
        }
      </div>
      <div block='chart' elem='body'>
        <LineChart data={data} {...rest} />
      </div>
    </div>
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
