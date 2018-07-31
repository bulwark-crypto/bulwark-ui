
import React from 'react';
import { render } from 'react-dom';

import Button from './Section/Button';

require(`../sass/bulwark-${ STYLE }.scss`);

const App = () => (
    <div>
        <h1>Bulwark UI - TODO Demo</h1>
        <Button />
    </div>
);

render(<App />, document.getElementById('react-root'));