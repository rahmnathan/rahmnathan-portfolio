import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from "./mainpage/MainPage";
import { Router } from "@reach/router";
import { Projects } from "./projects/Projects";

class App extends React.Component {

    render(){
        return(
            <Router>
                <MainPage path='/' />
                <Projects path='/projects'/>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);
