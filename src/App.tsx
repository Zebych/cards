import React from 'react';
import './App.css';
import { Redirect, Route, Switch} from "react-router-dom";
import {Profile} from "./components/Profile";
import {Register} from "./components/Register/Register";
import {RecoveryPass} from "./components/RecoveryPass";
import {NewPass} from "./components/NewPass";
import {TestPage} from "./components/TestComponents/TestPage";
import {ErrorPage} from "./components/ErrorPage";
import Header from "./components/Header/Header";
import {LoginContainer} from "./components/Login/LoginContainer";
import {CheckEmail} from "./components/Password/CheckEmail/CheckEmail";
import {CreateNewPassword} from "./components/Password/CreateNewPassword/CreateNewPassword";
import Cards from './components/Card/Card';
function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={'/'} exact render={() => <Profile/>}/>
                <Route path={'/login'} exact render={() => <LoginContainer/>}/>
                <Route path={'/register'} exact render={() => <Register/>}/>
                <Route path={'/recoveryPass'} exact render={() => <RecoveryPass/>}/>
                <Route path={'/newPass'} exact render={() => <NewPass/>}/>
                <Route path={'/testPage'} exact render={() => <TestPage/>}/>
                <Route path={'/check-email'} render={() => <CheckEmail/>}/>
                <Route path={'/set-new-password/:token?'} render={() => <CreateNewPassword />}/>
                <Route path={'/404'} render={() => <ErrorPage/>}/>
                <Route path={'/cards'} render={() => <Cards/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default App;
