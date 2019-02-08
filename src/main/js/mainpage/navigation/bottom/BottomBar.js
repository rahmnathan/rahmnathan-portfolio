import React from 'react';
import {Github} from "./Github";
import {LinkedIn} from "./LinkedIn";
import {VisitMe} from "./VisitMe";
import {And} from "./And";

const bottomBarStyle = {
    width: '100%',
    bottom: 0,
    textAlign: 'center',
    height: 150,
    position: 'fixed',
    marginLeft: '-50%',
    left: '50%',
    display: 'table'
};

export const BottomBar = () => {
    return (
        <div style={bottomBarStyle}>
            <VisitMe/>
            <Github/>
            <And/>
            <LinkedIn/>
        </div>
    );
};
