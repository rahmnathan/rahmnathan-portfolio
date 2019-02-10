import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from "./mainpage/MainPage";
import { Router } from "@reach/router";
import { Projects } from "./projects/Projects";
import {Work} from "./work/Work";

class App extends React.Component {

    render(){
        return(
            <Router style={{ height: '100%' }}>
                <MainPage path='/' />
                <Projects path='/projects'/>
                {/*<Work path='/work'/>*/}
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);
