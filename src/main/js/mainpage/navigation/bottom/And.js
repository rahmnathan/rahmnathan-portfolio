import React from 'react';

const divStyle = {
    display: 'inline-block',
    verticalAlign: 'bottom',
    textAlign: 'center',
    height: 60,
    bottom: 0
};

const paragraphStyle = {
    textAlign: 'center',
    height: 60,
    fontSize: 20
};

export class And extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <p style={paragraphStyle}>and</p>
            </div>
        );
    }
}
