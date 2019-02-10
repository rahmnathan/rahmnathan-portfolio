import React from 'react';
import {LocalMovies} from "./localmovies/LocalMovies";
import {TopBar} from "../mainpage/navigation/top/TopBar";

const projectsStyle = {
    margin: 30,
    marginBottom: 0,
    display: 'inline-block',
    textAlign: 'center',
    height: '100%',
    maxWidth: 1300
};

export const Projects = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <div style={projectsStyle}>
                <TopBar/>
                <LocalMovies/>
            </div>
        </div>
    );
};
