import React from 'react';

const divStyle = {
    display: 'inline-block',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    height: 60
};

const imgStyle = {
    textAlign: 'center',
    height: 60,
    marginBottom: -50
};

export const LinkedIn = () => {
    return (
        <div style={divStyle}>
            <a href="https://www.linkedin.com/in/nathan-rahm-a3486168/">
                <img style={imgStyle} src="linkedin-logo.png" alt="Sorry!"/>
            </a>
        </div>
    );
};
