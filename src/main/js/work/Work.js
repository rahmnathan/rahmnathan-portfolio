import React from 'react';
import {Idemia} from "./Idemia";
import {TopBar} from "../mainpage/navigation/top/TopBar";

const workStyle = {
    width: '50%',
    marginTop: 30,
    marginBottom: 0,
    display: 'inline-block',
    textAlign: 'center',
    height: '100%',
    minWidth: 1000
};

const titleStyle = {
    float: 'left',
    textSize: 25
};

export class Work extends React.Component {

    render(){
        return(
            <div style={{ textAlign: 'center' }}>
                <div style={workStyle}>
                    <TopBar/>
                    <p style={titleStyle}>My projects.</p>
                    <Idemia/>
                </div>
            </div>
        );
    }
}