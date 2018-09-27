import React from 'react'

import Button from '../../../web/Button'
import IconButton from '../../../web/IconButton'
import Source from '../../../web/Source'

const ButtonDemo = () => (
  <div>
    <h3>Buttons</h3>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button disabled>Disabled</Button>
    <h4>Code Example</h4>
    <Source
      code={`import Button from 'bulwark-ui/web/Button'

<Button>Default</Button>
<Button primary>Primary</Button>
<Button secondary>Secondary</Button>
<Button disabled>Disabled</Button>`} />

    <h3>Large Buttons</h3>
    <Button large>Default</Button>
    <Button large primary>Primary</Button>
    <Button large secondary>Secondary</Button>
    <Button disabled large>Disabled</Button>
    <h4>Code Example</h4>
    <Source
      code={`import Button from 'bulwark-ui/web/Button'

<Button large>Default</Button>
<Button large primary>Primary</Button>
<Button large secondary>Secondary</Button>
<Button disabled large>Disabled</Button>`} />

    <h3>Outlined Buttons</h3>
    <Button outline>Default</Button>
    <Button primary outline>Primary</Button>
    <Button secondary outline>Secondary</Button>
    <Button disabled outline>Disabled</Button>
    <h4>Code Example</h4>
    <Source
      code={`import Button from 'bulwark-ui/web/Button'

<Button outline>Default</Button>
<Button primary outline>Primary</Button>
<Button secondary outline>Secondary</Button>
<Button disabled outline>Disabled</Button>`} />

    <h3>Large Outline Buttons</h3>
    <Button large outline>Default</Button>
    <Button large primary outline>Primary</Button>
    <Button large secondary outline>Secondary</Button>
    <Button disabled large outline>Disabled</Button>
    <h4>Code Example</h4>
    <Source
      code={`import Button from 'bulwark-ui/web/Button'

<Button large outline>Default</Button>
<Button large primary outline>Primary</Button>
<Button large secondary outline>Secondary</Button>
<Button disabled large outline>Disabled</Button>`} />

    <h3>Text Buttons</h3>
    <Button text>Default</Button>
    <Button primary text>Primary</Button>
    <Button secondary text>Secondary</Button>
    <Button disabled text>Disabled</Button>
    <h4>Code Example</h4>
    <Source
      code={`import Button from 'bulwark-ui/web/Button'

<Button text>Default</Button>
<Button primary text>Primary</Button>
<Button secondary text>Secondary</Button>
<Button disabled text>Disabled</Button>`} />

    <h3>Icon Buttons</h3>
    <IconButton icon k='home' />
    <IconButton primary icon k='check' />
    <IconButton secondary icon k='user' />
    <IconButton disabled icon k='times' />
    <h4>Code Example</h4>
    <Source
      code={`import IconButton from 'bulwark-ui/web/IconButton'

<IconButton icon k='home' />
<IconButton primary icon k='check' />
<IconButton secondary icon k='user' />
<IconButton disabled icon k='times' />`} />
  </div>
)

export default ButtonDemo
