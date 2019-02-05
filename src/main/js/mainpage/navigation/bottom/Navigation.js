import React from 'react';
import {Projects} from "./Projects";
import {Work} from "./Work";

const divStyle = {
    textAlign: 'center',
    float: 'right',
    margin: 'auto',
    marginTop: 10
};

export const Navigation = () => {
    return (
        <div style={divStyle}>
            <Projects/>
            <Work/>
        </div>
    );
};
