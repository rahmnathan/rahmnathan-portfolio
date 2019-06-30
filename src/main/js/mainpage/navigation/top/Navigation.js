import React from 'react';
import {Projects} from "./Projects";
import {Home} from "./Home";

const divStyle = {
    textAlign: 'center',
    float: 'right',
    margin: 'auto',
    marginTop: 20
};

export const Navigation = () => {
    return (
        <div style={divStyle}>
            {/*<Work/>*/}
            <Projects/>
            <Home/>
        </div>
    );
};
