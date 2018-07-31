
import React from 'react';

const Button = () => (
    <div>
        <h3>Buttons</h3>
        <button className="b-default">Default</button>
        <button className="b-primary">Primary</button>
        <button className="b-secondary">Secondary</button>
        <button className="b-disabled">Disabled</button>

        <h3>Outlined Buttons</h3>
        <button className="b-default-outline">Default</button>
        <button className="b-primary-outline">Primary</button>
        <button className="b-secondary-outline">Secondary</button>
        <button className="b-disabled-outline">Disabled</button>

        <h3>Text Buttons</h3>
        <button className="b-default-text">Default</button>
        <button className="b-primary-text">Primary</button>
        <button className="b-secondary-text">Secondary</button>
        <button className="b-disabled-text">Disabled</button>
    </div>
);

export default Button;