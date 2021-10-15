import {Dispatch} from "redux";

enum ActionsType {
    NEW_PASSWORD = 'NEW_PASSWORD'
}

const initState = {}

export const newPasswordReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ActionsType.NEW_PASSWORD: {
            return {...state};
        }
        default:
            return state;
    }
}
//Actions
export const newPasswordC = (): any => ({type: 'NEW_PASSWORD'} as const); // fix any

//Thunks
const newPasswordTC = () => (dispatch: Dispatch<any>) => {
}
//Types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof newPasswordC>