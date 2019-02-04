import React from 'react';

const divStyle = {
    textAlign: 'center',
    float: 'left',
    display: 'inline-block'
};

const nameStyle = {
    margin: 5,
    fontSize: 19
};

const titleStyle = {
    margin: 5,
    color: 'gray',
    fontSize: 16
};

export const Name = () => {
    return (
        <div style={divStyle}>
            <p style={nameStyle}>Nathan Rahm</p>
            <p style={titleStyle}>Software Engineer</p>
        </div>
    );
};
