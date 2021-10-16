import {Dispatch} from "redux";
import {api} from "../api/api";

const LOG_UP = 'LOG_UP'
export const initState = {
    mail: '',
    password: '',
    checkBox: true
}

export const LoginReducer = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case LOG_UP: {
            return {
                ...state,
                mail: action.mail,
                password: action.password,
                checkBox: action.checkBox,
            }
        }
        default:
            return state
    }
}
//Actions
const logUpAC = (mail: string, password: string, checkBox: boolean,) =>
    ({type: 'LOG_UP', mail, password, checkBox} as const)

//Thunk
export const logUpTC = (mail: string, password: string, checkBox: boolean,) => (dispatch: Dispatch) => {
    api.logUp(mail, password, checkBox).then()
    dispatch(logUpAC(mail, password, checkBox))
}

//Types
type ActionType = ReturnType<typeof logUpAC>
type InitStateType = typeof initState