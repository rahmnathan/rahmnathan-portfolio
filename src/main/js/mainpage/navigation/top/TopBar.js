import React from 'react';
import { Name } from './Name';
import {Navigation} from "./Navigation";

const topBarStyle = {
    float: 'left',
    height: '15%',
    width: '100%'
};

export const TopBar = () => {
    return (
        <div style={topBarStyle}>
            <Name/>
            <Navigation/>
        </div>
    );
};
