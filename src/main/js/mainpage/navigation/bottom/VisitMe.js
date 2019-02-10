import React from 'react';

const divStyle = {
    display: 'inline-block',
    verticalAlign: 'bottom',
    textAlign: 'center',
    marginBottom: 15
};

const paragraphStyle = {
    textAlign: 'center',
    fontSize: 20,
    margin: -5
};

export const VisitMe = () => {
    return (
        <div style={divStyle}>
            <p style={paragraphStyle}>Questions? Let's get in touch.</p>
        </div>
    );
};
