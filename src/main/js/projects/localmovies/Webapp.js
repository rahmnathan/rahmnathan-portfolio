import React from 'react';

const webappStyle = {
    textAlign: 'center',
    float: 'left',
    width: '50%'
};

export const Webapp = () => {
    return (
        <div style={webappStyle}>
            <p>Web Application</p>
            <video width="100%" controls>
                <source src="localmovie-webapp.mp4" type="video/mp4"/>
            </video>
        </div>
    );
};