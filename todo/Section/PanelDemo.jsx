import React from 'react'

import Panel from '../../web/Panel'

const PanelDemo = () => (
  <div>
    <h3>Panels</h3>
    <Panel title='Expansion Panel One'>Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.</Panel>
    <br />
    <Panel title='Expansion Panel Two' subtitle='Some Text: Reveal me'>Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.</Panel>
  </div>
)

export default PanelDemo
