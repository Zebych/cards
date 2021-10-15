import {Dispatch} from "redux";

enum ActionsType {
    PROFILE = 'PROFILE'
}

const initState = {}

export const profileReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ActionsType.PROFILE: {
            return {...state};
        }
        default:
            return state;
    }
}
//Actions
export const profileC = (): any => ({type: 'PROFILE'} as const); // fix any

//Thunks
const profileTC = () => (dispatch: Dispatch<any>) => {
}
//Types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof profileC>