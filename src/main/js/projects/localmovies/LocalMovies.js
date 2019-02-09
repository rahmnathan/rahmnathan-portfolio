import React from 'react';
import {Webapp} from "./Webapp";
import {AndroidApp} from "./AndroidApp";
import {Technologies} from "./Technologies";

const titleStyle = {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
    marginTop: 75
};

export const LocalMovies = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <p style={titleStyle}>LocalMovies</p>
            <Webapp/>
            <AndroidApp/>
            <Technologies/>
        </div>
    );
};
