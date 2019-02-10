import React from 'react';
import { Link } from "@reach/router";

const divStyle = {
    textAlign: 'center',
    float: 'right'
};

const summaryStyle = {
    margin: 8,
    fontSize: 19,
    color: 'black',
    textDecoration: 'none'
};

const hoveredSummaryStyle = {
    margin: 8,
    fontSize: 19,
    color: 'gray'
};
export class Summary extends React.Component {

    constructor(props){
        super(props);
        this.state = { hovered: false };
        this.addHover = this.addHover.bind(this);
        this.removeHover = this.removeHover.bind(this);
    }

    addHover(){
        this.setState({ hovered: true });
    }

    removeHover(){
        this.setState( { hovered: false });
    }

    render() {
        if(this.state.hovered !== null && this.state.hovered === true){
            return (
                <div onMouseEnter={this.addHover} onMouseLeave={this.removeHover} style={divStyle}>
                    <Link to='/' style={hoveredSummaryStyle}>Summary</Link>
                </div>
            );
        }

        return (
            <div onMouseEnter={this.addHover} onMouseLeave={this.removeHover} style={divStyle}>
                <Link to='/' style={summaryStyle}>Summary</Link>
            </div>
        );
    }
};
