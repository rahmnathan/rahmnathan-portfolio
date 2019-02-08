import React from 'react';
import { Link } from "@reach/router";

const divStyle = {
    textAlign: 'center',
    float: 'right'
};

const contactStyle = {
    margin: 5,
    fontSize: 22,
    color: 'black',
    textDecoration: 'none'
};

export class Work extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <Link to='/work' style={contactStyle}>Work</Link>
            </div>
        );
    }
}
