
import React from 'react';
import { render } from 'react-dom';

require(`../sass/bulwark-${ STYLE }.scss`);

const App = () => (
    <h1>Bulwark UI - TODO Demo</h1>
);

render(<App />, document.getElementById('react-root'));