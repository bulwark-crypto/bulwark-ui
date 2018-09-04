import React from 'react'

import {Tabs, Tab} from '../../web/Tab'

const TabDemo = () => (
  <div>
    <h3>Tab</h3>
    <Tabs>
      <Tab active title='Item One'>
        Alpha
      </Tab>
      <Tab title='Item Two'>
        Bravo
      </Tab>
      <Tab disabled title='Disabled'>
        Charlie
      </Tab>
    </Tabs>
    <br />
    <Tabs>
      <Tab active icon='home'>
        Alpha
      </Tab>
      <Tab icon='check'>
        Bravo
      </Tab>
      <Tab disabled icon='envelope'>
        Charlie
      </Tab>
    </Tabs>
  </div>
)

export default TabDemo
