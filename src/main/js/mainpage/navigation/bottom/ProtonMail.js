import React from 'react';

const divStyle = {
    display: 'inline-block',
    textAlign: 'center',
    height: 90
};

const imgStyle = {
    textAlign: 'center',
    height: 90,
    marginBottom: -65
};

export const ProtonMail = () => {
    return (
        <div style={divStyle}>
            <a href="mailto: rahm.nathan@protonmail.com">
                <img style={imgStyle} src="protonmail.png" alt="Sorry!"/>
            </a>
        </div>
    );
};
