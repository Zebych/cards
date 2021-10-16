import {applyMiddleware, combineReducers, createStore} from "redux";
import {LoginReducer} from "./login-Reducer";
import {RegisterReducer} from "./register-Reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    login: LoginReducer,
    // register: RegisterReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof RootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
