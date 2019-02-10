import React from 'react';

const divStyle = {
    display: 'inline-block',
    verticalAlign: 'bottom',
    textAlign: 'center',
    height: 60,
    bottom: 0
};

const paragraphStyle = {
    textAlign: 'center',
    height: 60,
    fontSize: 20
};

export const And = () => {
    return (
        <div style={divStyle}>
            <p style={paragraphStyle}>and</p>
        </div>
    );
};

