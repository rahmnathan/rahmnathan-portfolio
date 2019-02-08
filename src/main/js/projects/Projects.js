import React from 'react';
import {LocalMovies} from "./LocalMovies";

const projectsStyle = {
    width: '50%',
    margin: 30,
    display: 'inline-block',
    textAlign: 'center',
    height: '100%'
};

const titleStyle = {
    float: 'left',
    textSize: 25
};

export class Projects extends React.Component {

    render(){
        return(
            <div style={{ textAlign: 'center' }}>
                <div style={projectsStyle}>
                    <p style={titleStyle}>Projects</p>
                    <LocalMovies/>
                </div>
            </div>
        );
    }
}