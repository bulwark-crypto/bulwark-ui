import React from 'react'

import {ChartLine} from '../../web/Chart'

const data = {}
const keys = [1.1, 1.2301, 1.32, 1.30, 1.4, 1.5, 1.6]
keys.forEach((k, i) => { data[i] = k })

const ButtonDemo = () => (
  <div>
    <h3>Chart</h3>
    <ChartLine
      data={data}
      colors={['#ffffff']}
      legend={false}
      library={{
        scales: {
          xAxes: [{gridLines: {display: false}, ticks: {display: false}}],
          yAxes: [{gridLines: {display: false}}]
        },
        tooltips: {
          backgroundColor: '#ffffff',
          bodyFontColor: '#252525',
          bodyFontFamily: "'Roboto', sans-serif",
          bodyFontSize: 14,
          bodySpacing: 2,
          caretPadding: 9,
          cornerRadius: 5,
          footerFontSize: 0,
          titleFontSize: 0,
          titleMarginBottom: 0,
          titleSpacing: 0,
          xPadding: 20,
          yPadding: 6
        }
      }}
      links={[
        {active: true, onClick: f => f, text: '1 Day'},
        {onClick: f => f, text: '1 Week'},
        {onClick: f => f, text: '1 Month'}
      ]}
      max={1.6}
      messages={{empty: 'No data'}}
      min={1.1}
      prefix='$'
      subtitle='Data courtesy of CoinMarketCap'
      thousands=','
      title='Bulwark Price' />
  </div>
)

export default ButtonDemo
