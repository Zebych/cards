import {Dispatch} from "redux";
import {authAPI} from "../api/authAPI";
import {setProfileDataAC} from "./profile-reducer";

export const authInitState = {
    isLoggedIn: false,
    errorLogin: '',
}

export const authReducer = (state: InitStateAuthType = authInitState, action: ActionType) => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN': {
            return {
                ...state,
                isLoggedIn: action.value
            }
        }
        case 'login/ERROR': {
            return {
                ...state,
                errorLogin: action.error
            }
        }
        default:
            return state
    }
}
//Actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setErrorAC = (error: string) => ({type: 'login/ERROR', error} as const)

//Thunk
export const logUpTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.logUp(email, password, rememberMe).then((res) => {
                dispatch(setIsLoggedInAC(true))
                dispatch(setProfileDataAC(res.data))
        }
    )
        .catch((err) => {
                const error = err.response ? err.response.data.error : (err.message + ', more details in the console')
                dispatch(setErrorAC(error))
            }
        )
}

//Types
type ActionType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setErrorAC>
export type InitStateAuthType = typeof authInitState