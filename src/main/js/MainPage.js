import React from 'react';
import { TopBar } from './TopBar';
import { Summary } from './Summary';

const mainPageStyle = {
    width: '50%',
    margin: 30,
    display: 'inline-block'
};

export const MainPage = () => {
    return (
        <div style={mainPageStyle}>
            <TopBar/>
            <Summary/>
        </div>
    );
};
