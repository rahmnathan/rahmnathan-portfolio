import React from 'react';

export class LocalMovies extends React.Component {

    render(){
        return(
            <div style={{ textAlign: 'center' }}>
                <video width="640" height="480" autoPlay>
                    <source src="localmovie-webapp.mp4" type="video/mp4"/>
                </video>
                <video width="640" height="480" autoPlay>
                    <source src="localmovie-android.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    }
}