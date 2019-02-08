import React from 'react';

const divStyle = {
    display: 'inline-block',
    verticalAlign: 'bottom',
    marginLeft: 20,
    textAlign: 'center',
    height: 60,
    bottom: 0,
    paddingRight: 10
};

const paragraphStyle = {
    textAlign: 'center',
    height: 60,
    fontSize: 20
};

export class VisitMe extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <p style={paragraphStyle}>Visit me at</p>
            </div>
        );
    }
}
