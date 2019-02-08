import React from 'react';
import { Link } from "@reach/router";

const divStyle = {
    textAlign: 'center',
    float: 'right'
};

const projectsStyle = {
    margin: 5,
    fontSize: 22,
    color: 'black',
    textDecoration: 'none'
};

export class AboutMe extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <Link to='/' style={projectsStyle}>About Me</Link>
            </div>
        );
    }
}
