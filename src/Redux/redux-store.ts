import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({

})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store;
export default store;



