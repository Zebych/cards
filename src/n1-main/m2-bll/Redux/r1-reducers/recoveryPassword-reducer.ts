import {Dispatch} from "redux";

enum ActionsType {
    RECOVERY_PASSWORD = 'RECOVERY_PASSWORD'
}

const initState = {}

export const recoveryPasswordReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ActionsType.RECOVERY_PASSWORD: {
            return {...state};
        }
        default:
            return state;
    }
}
//Actions
export const recoveryPasswordC = (): any => ({type: 'RECOVERY_PASSWORD'} as const); // fix any

//Thunks
const recoveryPasswordTC = () => (dispatch: Dispatch<any>) => {
}
//Types
type InitStateType = typeof initState
type ActionType = ReturnType<typeof recoveryPasswordC>