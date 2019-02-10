import React from 'react';
import {Projects} from "./Projects";
import {Summary} from "./Summary";

const divStyle = {
    textAlign: 'center',
    float: 'right',
    margin: 'auto',
    marginTop: 10
};

export const Navigation = () => {
    return (
        <div style={divStyle}>
            {/*<Work/>*/}
            <Projects/>
            <Summary/>
        </div>
    );
};
