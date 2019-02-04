import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from "./MainPage";
import { Router, navigate } from "@reach/router";

class App extends React.Component {

    render(){
        return(
            <div style={{ textAlign: 'center' }}>
                <MainPage />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);
