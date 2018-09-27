import React from 'react'

import Panel from '../../../web/Panel'
import Source from '../../../web/Source'

const PanelDemo = () => (
  <div>
    <h3>Panels</h3>
    <Panel title='Expansion Panel One'>
      Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
      Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
      Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
      Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
      Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
      Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
      Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
    </Panel>
    <br />
    <h4>Code Example</h4>
    <Source
      code={`import Panel from 'bulwark-ui/web/Panel'

<Panel title='Expansion Panel One'>
  Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
  Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
  Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
  Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
  Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
  Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
  Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.<br />
</Panel>`} />
    <Panel title='Expansion Panel Two' subtitle='Some Text: Reveal me'>Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.</Panel>
    <h4>Code Example</h4>
    <Source
      code={`import Panel from 'bulwark-ui/web/Panel'

<Panel title='Expansion Panel Two' subtitle='Some Text: Reveal me'>Mi piace nuotare. Nessuno dovrebbe mettere il formaggio sul pesce perché è disgustoso.</Panel>`} />
  </div>
)

export default PanelDemo
