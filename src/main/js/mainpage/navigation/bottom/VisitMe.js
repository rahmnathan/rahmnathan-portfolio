import React from 'react';

const divStyle = {
    display: 'inline-block',
    verticalAlign: 'bottom',
    textAlign: 'center'
};

const paragraphStyle = {
    textAlign: 'center',
    fontSize: 20
};

export const VisitMe = () => {
    return (
        <div style={divStyle}>
            <p style={paragraphStyle}>Contact me</p>
        </div>
    );
};
