import {Dispatch} from "redux";

enum ActionsType {
    REGISTRATION = 'REGISTRATION'
}

const initState = {}

export const registrationReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ActionsType.REGISTRATION: {
            return {...state};
        }
        default:
            return state;
    }
}
//Actions
export const registrationC = (): any => ({type: 'REGISTRATION'} as const); // fix any

//Thunks
const registrationTC = () => (dispatch: Dispatch<any>) => {
}
//Types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof registrationC>