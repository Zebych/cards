import React from 'react';
import './App.css';
import Routes from "./routes/Routes";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default App;
