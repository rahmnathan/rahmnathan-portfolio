import React from 'react';
import { Name } from './Name';

const topBarStyle = {
    float: 'left',
    height: '20%'
};

export const TopBar = () => {
    return (
        <div style={topBarStyle}>
            <Name/>
        </div>
    );
};
