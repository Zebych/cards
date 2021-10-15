import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Registration from "../pages/Registration";
import Error404 from "../pages/Error404";
import RecoveryPassword from "../pages/RecoveryPassword";
import NewPassword from "../pages/NewPassword";
import Profile from '../pages/Profile';
import TestSuperComponents from "../pages/TestSuperComponents";

export const PATH = {
    LOGIN: '/login',
    NEW_PASSWORD: '/new-password',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recovery-password',
    REGISTRATION: '/registration',
    TEST_SUPER_COMPONENTS: '/test-super-components',
}

function Routes() {
    return (
        <div>
            {/*//switch выбирает первый подходящий роут*/}
            <Switch>
               {/* //в начале попадаем на страницу '/' и переходим сразу на PRE_JUNIOR
                //exact нужен чтоб указать полное совпадение- что после '/' ничего не будет*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.TEST_SUPER_COMPONENTS}/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} render={() => <RecoveryPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.TEST_SUPER_COMPONENTS} render={() => <TestSuperComponents/>}/>
{/*
                //у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
*/}
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
