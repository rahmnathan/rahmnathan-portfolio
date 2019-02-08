import React from 'react';

const divStyle = {
    textAlign: 'center',
    float: 'left',
    margin: 'auto'
};

const nameStyle = {
    margin: 5,
    fontSize: 22
};

const titleStyle = {
    margin: 5,
    color: 'gray',
    fontSize: 18
};

export const Name = () => {
    return (
        <div style={divStyle}>
            <p style={nameStyle}>Nathan Rahm</p>
            <p style={titleStyle}>Software Engineer</p>
        </div>
    );
};
