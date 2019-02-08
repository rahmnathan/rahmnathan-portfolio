import React from 'react';
import {Idemia} from "./Idemia";

export class Work extends React.Component {

    render(){
        return(
            <div style={{ textAlign: 'center' }}>
                <p>My projects.</p>
                <Idemia/>
            </div>
        );
    }
}