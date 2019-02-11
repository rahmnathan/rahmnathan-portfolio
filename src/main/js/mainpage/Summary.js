import React from 'react';

const summaryStyle = {
    width: '100%',
    height: '80%',
    float: 'left',
    textAlign: 'center',
    display: 'table'
};

const summaryTextWrapperStyle = {
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '100%',
    textAlign: 'center'
};

const summaryTextStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    fontSize: 25,
    margin: 5
};

export const Summary = () => {
    return (
        <div style={summaryStyle}>
            <div style={summaryTextWrapperStyle}>
                <p style={summaryTextStyle}>Hello, I'm a Software Engineer in Minneapolis, MN.</p>
                <p style={summaryTextStyle}>I design, build, deploy and monitor systems that provide high quality user experiences.</p>
            </div>
        </div>
    );
};
