import React from 'react';
import {LocalMovies} from "./localmovies/LocalMovies";
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
