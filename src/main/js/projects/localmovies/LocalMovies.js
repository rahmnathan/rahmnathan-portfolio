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
                <p style={descriptionStyle}>This project is a media server with both web and Android clients.</p>
                <p><a  style={descriptionStyle} href="https://grafana.nathanrahm.com/d/LCBPqQLVk/localmovies-service">View live monitoring with Grafana.</a></p>
                <p><a  style={descriptionStyle} href="https://github.com/rahmnathan/localmovie-media-manager">View the source on Github. </a></p>
            </div>
            <Webapp/>
            <AndroidApp/>
            <Technologies/>
        </div>
    );
};
