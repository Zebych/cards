import {Dispatch} from "redux";

enum ActionsType {
    LOGIN = 'LOGIN'
}

const initState = {}

export const loginReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ActionsType.LOGIN: {
            return {...state};
        }
        default:
            return state;
    }
}
//Actions
export const loginC = (): any => ({type: 'LOGIN'} as const); // fix any

//Thunks
const loginTC = () => (dispatch: Dispatch<any>) => {
}
//Types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof loginC>