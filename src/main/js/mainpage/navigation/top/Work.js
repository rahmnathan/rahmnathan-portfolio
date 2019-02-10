import React from 'react';
import { Link } from "@reach/router";

const divStyle = {
    textAlign: 'center',
    float: 'right'
};

const contactStyle = {
    margin: 8,
    fontSize: 19,
    color: 'black',
    textDecoration: 'none'
};

export const Work = () => {
    return (
        <div style={divStyle}>
            <Link to='/work' style={contactStyle}>Work</Link>
        </div>
    );
};
