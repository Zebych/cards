import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "./r1-reducers/login-reducer";
import {newPasswordReducer} from "./r1-reducers/newPassword-reducer";
import {recoveryPasswordReducer} from "./r1-reducers/recoveryPassword-reducer";
import {profileReducer} from "./r1-reducers/profile-reducer";
import {registrationReducer} from "./r1-reducers/registration-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    login: loginReducer,
    newPassword: newPasswordReducer,
    profile: profileReducer,
    recoveryPassword: recoveryPasswordReducer,
    registration: registrationReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store;
export default store;



