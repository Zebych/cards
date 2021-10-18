import {Dispatch} from "redux";
import {loginAPI} from "../api/loginAPI";


export const authInitState = {
    isLoggedIn: false
}

export const authReducer = (state: InitStateAuthType = authInitState, action: ActionType) => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN': {
            return {
                ...state,
                isLoggedIn: action.value
            }
        }
        default:
            return state
    }
}
//Actions
const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

//Thunk
export const logUpTC = ( email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    loginAPI.logUp(email, password, rememberMe).then((res) => {
            if (res.data._id) {
                dispatch(setIsLoggedInAC(true))
            }
        }
    )
        .catch((e) => {
            console.log(' more details in the console')
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            }
        )

}

//Types
type ActionType = ReturnType<typeof setIsLoggedInAC>
export type InitStateAuthType = typeof authInitState