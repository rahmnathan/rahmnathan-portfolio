import React from 'react';
import { TopBar } from './navigation/top/TopBar';
import { Summary } from './Summary';
import {BottomBar} from "./navigation/bottom/BottomBar";

const mainPageStyle = {
    width: '50%',
    marginTop: 30,
    marginBottom: 0,
    display: 'inline-block',
    textAlign: 'center',
    height: '100%',
    minWidth: 1000
};

export const MainPage = () => {
    return (
        <div style={{ textAlign: 'center', height: '95%' }}>
            <div style={mainPageStyle}>
                <TopBar/>
                <Summary/>
                <BottomBar/>
            </div>
        </div>
    );
};
