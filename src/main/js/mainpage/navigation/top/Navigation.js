import React from 'react';
import {Projects} from "./Projects";
import {Work} from "./Work";
import {AboutMe} from "./AboutMe";

const divStyle = {
    textAlign: 'center',
    float: 'right',
    margin: 'auto',
    marginTop: 10
};

export const Navigation = () => {
    return (
        <div style={divStyle}>
            <Work/>
            <Projects/>
            <AboutMe/>
        </div>
    );
};
