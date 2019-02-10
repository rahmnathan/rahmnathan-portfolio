import React from 'react';
import { Name } from './Name';
import {Navigation} from "./Navigation";

const topBarStyle = {
    float: 'left',
    height: 70,
    width: '100%',
    borderBottom: 'solid black 2px'
};

export const TopBar = () => {
    return (
        <div style={topBarStyle}>
            <Name/>
            <Navigation/>
        </div>
    );
};
