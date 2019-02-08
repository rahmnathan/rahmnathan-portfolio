import React from 'react';

const divStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    marginRight: 20,
    height: 80,
    bottom: 0
};

const imgStyle = {
    textAlign: 'center',
    height: 80
};

export class Github extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <a href="https://github.com/rahmnathan">
                    <img style={imgStyle} src="GitHub_Logo.png" alt="Sorry!"/>
                </a>
            </div>
        );
    }
}
