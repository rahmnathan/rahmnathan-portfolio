import React from 'react';
import {LocalMovies} from "./localmovies/LocalMovies";
import {TopBar} from "../mainpage/navigation/top/TopBar";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                <ReactCSSTransitionGroup
                    transitionName="fadein"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionLeave={true}>
                    <LocalMovies/>
                </ReactCSSTransitionGroup>
            </div>
        </div>
    );
};
