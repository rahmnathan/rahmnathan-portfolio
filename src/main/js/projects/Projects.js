import React from 'react';
import {LocalMovies} from "./LocalMovies";

export class Projects extends React.Component {

    render(){
        return(
            <div style={{ textAlign: 'center' }}>
                <p>My projects.</p>
                <LocalMovies/>
            </div>
        );
    }
}