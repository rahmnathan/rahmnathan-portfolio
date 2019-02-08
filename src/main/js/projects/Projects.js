import React from 'react';
import {LocalMovies} from "./LocalMovies";
import {TopBar} from "../mainpage/navigation/top/TopBar";

const projectsStyle = {
    width: '50%',
    marginTop: 30,
    marginBottom: 0,
    display: 'inline-block',
    textAlign: 'center',
    height: '100%',
    minWidth: 1000
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
                    <TopBar/>
                    <p style={titleStyle}>Projects</p>
                    <LocalMovies/>
                </div>
            </div>
        );
    }
}