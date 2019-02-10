import React from 'react';
import { Link } from "@reach/router";

const divStyle = {
    textAlign: 'center',
    float: 'right'
};

const projectsStyle = {
    margin: 8,
    fontSize: 19,
    color: 'black',
    textDecoration: 'none'
};

export const Summary = () => {
    return (
        <div style={divStyle}>
            <Link to='/' style={projectsStyle}>Summary</Link>
        </div>
    );
};
