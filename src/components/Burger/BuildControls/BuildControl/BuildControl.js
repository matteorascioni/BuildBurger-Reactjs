import React from 'react';

import './BuildControl.css'

const buildControl = (props) => (
    <div className="BuildControl">
        <div class="Label">{props.label}</div>
        <button 
            className="Less" 
            onClick={props.removed} 
            disable={props.disabled}
        >
            Less
        </button>
        <button 
            className="More" 
            onClick={props.added}
        >
            More
        </button>
    </div>
);

export default buildControl;