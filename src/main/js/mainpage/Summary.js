import React from 'react';

const summaryStyle = {
    width: '100%',
    height: '60%',
    float: 'left',
    textAlign: 'center',
    display: 'table'
};

const summaryTextStyle = {
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: 25
};

export const Summary = () => {
    return (
        <div style={summaryStyle}>
            <p style={summaryTextStyle}>Hello, I'm a Software Engineer with a passion for creating maintainable
                business applications and great user experiences.</p>
        </div>
    );
};
