import React from 'react';
import {Navigation} from "./Navigation";

const bottomBarStyle = {
    float: 'left',
    height: '20%',
    width: '100%',
    bottom: 0
};

export const BottomBar = () => {
    return (
        <div style={bottomBarStyle}>
            <Navigation/>
        </div>
    );
};
