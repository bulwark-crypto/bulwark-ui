import React from 'react'

import Source from '../../../web/Source'

const FontDemo = () => (
  <div className='text--center'>
    <h3 className='text--left'>Typography</h3>
    <div className='hero'>Hero</div>
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
    <h4>H4</h4>
    <h5>H5</h5>
    <div>Body</div>
    <p>Paragraph</p>
    <div className='text--left'>
      <h4>Code Example</h4>
      <Source
        code={`<div className='hero'>Hero</div>
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<div>Body</div>
<p>Paragraph</p>`}
        type='html' />
    </div>
  </div>
)

export default FontDemo
