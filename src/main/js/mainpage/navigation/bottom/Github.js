import React from 'react';

const divStyle = {
    display: 'inline-block',
    textAlign: 'center',
    marginRight: 10,
    height: 60
};

const imgStyle = {
    textAlign: 'center',
    height: 60,
    marginBottom: -60
};

export const Github = () => {
    return (
        <div style={divStyle}>
            <a href="https://github.com/rahmnathan">
                <img style={imgStyle} src="GitHub_Logo.png" alt="Sorry!"/>
            </a>
        </div>
    );
};
