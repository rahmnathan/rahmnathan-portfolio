import React from 'react';
import {Webapp} from "./Webapp";
import {AndroidApp} from "./AndroidApp";
import {Technologies} from "./Technologies";

const titleStyle = {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 90
};

const descriptionStyle = {
    fontSize: 16,
    textAlign: 'center',
    display: 'inline-block',
    marginTop: 10,
    marginBottom: 10,
    margin: 2,
    color: 'gray'
};

export const LocalMovies = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p style={titleStyle}>LocalMovies</p>
            <div style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                <p style={descriptionStyle}>This project is a media server with both web and Android clients. </p>
                <a  style={descriptionStyle} href="https://github.com/rahmnathan/localmovie-web-service">View the source on Github.</a>
            </div>
            <Webapp/>
            <AndroidApp/>
            <Technologies/>
        </div>
    );
};
