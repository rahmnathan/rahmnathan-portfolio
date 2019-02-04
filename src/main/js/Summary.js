import React from 'react';

const summaryStyle = {
    width: '100%',
    height: '80%',
    float: 'left',
    textAlign: 'center',
    verticalAlign: 'center',
    display: 'table-cell'
};

export const Summary = () => {
    return (
        <div style={summaryStyle}>
            <p style={{ height: '100%' }}>Test Text</p>
        </div>
    );
};
