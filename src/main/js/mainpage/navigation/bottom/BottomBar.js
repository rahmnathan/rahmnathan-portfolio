import React from 'react';
import {Github} from "./Github";
import {LinkedIn} from "./LinkedIn";
import {VisitMe} from "./VisitMe";
import {ProtonMail} from "./ProtonMail";

const bottomBarStyle = {
    width: '100%',
    bottom: 25,
    textAlign: 'center',
    height: 130,
    position: 'fixed',
    marginLeft: '-50%',
    left: '50%',
    display: 'table'
};

export const BottomBar = () => {
    return (
        <div style={bottomBarStyle}>
            <VisitMe/>
            <div style={{ width: '100%' }}>
                <Github/>
                <LinkedIn/>
                <ProtonMail/>
            </div>
        </div>
    );
};
