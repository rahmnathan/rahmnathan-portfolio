import React from 'react';

const divStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: 20,
    textAlign: 'center',
    height: 60,
    bottom: 0
};

const imgStyle = {
    textAlign: 'center',
    height: 60
};

export class LinkedIn extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <a href="https://www.linkedin.com/in/nathan-rahm-a3486168/">
                    <img style={imgStyle} src="linkedin-logo.png" alt="Sorry!"/>
                </a>
            </div>
        );
    }
}
