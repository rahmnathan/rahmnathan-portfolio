import React from 'react';
import { TopBar } from './navigation/top/TopBar';
import { Summary } from './Summary';
import {BottomBar} from "./navigation/bottom/BottomBar";

const mainPageStyle = {
    width: '50%',
    margin: 30,
    display: 'inline-block',
    textAlign: 'center',
    height: '100%'
};

export const MainPage = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={mainPageStyle}>
                <TopBar/>
                <Summary/>
                <BottomBar/>
            </div>
        </div>
    );
};
