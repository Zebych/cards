import React from 'react';
import './App.css';
import { Redirect, Route, Switch} from "react-router-dom";
import {Login} from "./components/Login";
import {Profile} from "./components/Profile";
import {Register} from "./components/Register";
import {RecoveryPass} from "./components/RecoveryPass";
import {NewPass} from "./components/NewPass";
import {TestPage} from "./components/TestComponents/TestPage";
import {ErrorPage} from "./components/ErrorPage";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={'/'} exact render={() => <Profile/>}/>
                <Route path={'/login'} exact render={() => <Login/>}/>
                <Route path={'/register'} exact render={() => <Register/>}/>
                <Route path={'/recoveryPass'} exact render={() => <RecoveryPass/>}/>
                <Route path={'/newPass'} exact render={() => <NewPass/>}/>
                <Route path={'/testPage'} exact render={() => <TestPage/>}/>
                <Route path={'/404'} render={() => <ErrorPage/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default App;
