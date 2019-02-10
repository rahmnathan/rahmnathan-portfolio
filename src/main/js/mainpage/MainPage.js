import React from 'react';
import { TopBar } from './navigation/top/TopBar';
import { Summary } from './Summary';
import {BottomBar} from "./navigation/bottom/BottomBar";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const mainPageStyle = {
    margin: 30,
    marginBottom: 0,
    display: 'inline-block',
    textAlign: 'center',
    height: '100%',
    maxWidth: 1300
};

export const MainPage = () => {
    return (
        <div style={{textAlign: 'center', height: '95%'}}>
            <div style={mainPageStyle}>
                <TopBar/>
                <ReactCSSTransitionGroup
                    transitionName="fadein"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionLeave={true}>
                    <Summary/>
                    <BottomBar/>
                </ReactCSSTransitionGroup>
            </div>
        </div>
    );
};
