import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./auth-reducer";
import {RegisterReducer} from "./register-Reducer";
import thunk from "redux-thunk";
import {resPassReducer} from "./res-pass-reducer";
import {profileReducer} from "./profile-reducer";
import {passwordReducer} from "./password-reducer";
import {cardsReducer} from "../components/Card/cards-reducer";
import {tableReducer} from "../components/Card/CardsTable/table-reducer";

const RootReducer = combineReducers({
    register: RegisterReducer,
    profile: profileReducer,
    resPass: resPassReducer,
    auth: authReducer,
    password: passwordReducer,
    cards:cardsReducer,
    // table:tableReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof RootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
