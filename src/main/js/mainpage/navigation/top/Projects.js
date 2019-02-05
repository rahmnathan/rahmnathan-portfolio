import React from 'react';
import { Link } from "@reach/router";

const divStyle = {
    textAlign: 'center',
    float: 'right'
};

const projectsStyle = {
    margin: 5,
    fontSize: 19,
    color: 'black',
    textDecoration: 'none'
};

export class Projects extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <Link to='/projects' style={projectsStyle}>Projects</Link>
            </div>
        );
    }
}
