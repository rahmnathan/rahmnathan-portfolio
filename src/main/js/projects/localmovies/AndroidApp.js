import React from 'react';

const webappStyle = {
    textAlign: 'center',
    float: 'right',
    width: '40%'
};

export const AndroidApp = () => {
    return (
        <div style={webappStyle}>
            <p>Android</p>
            <video width="41%" controls>
                <source src="localmovie-android.mp4" type="video/mp4"/>
            </video>
        </div>
    );
};
