import {Dispatch} from "redux";
import {RegisterAPI} from "../api/authAPI";

let initialState: InitialStateType = {
    register: false,
    error: null
}


export const RegisterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-REGISTER":
            return {...state, register: true}
        case "SET-ERROR-REGISTER":
            return  {...state, error: action.error}
        default:
            return state
    }
}
/////////////// AC

export const SetRegister = () => ({type: 'SET-REGISTER'}) as const
export const SetErrorRegister = (error: string) => ({type: 'SET-ERROR-REGISTER',error}) as const

////////////// THUNK

export const RegisterThunk = (email: string, password: string) => (dispatch: Dispatch) => {
    RegisterAPI.register(email, password).then(() => {
        dispatch(SetRegister())
    }).catch((error) => {
        dispatch(SetErrorRegister(error.response.data.error))
    })
}
///////////// TYPES

type ActionsType =  /*Тип Экшенов*/
    ReturnType<typeof SetRegister>
    | ReturnType<typeof SetErrorRegister>

type InitialStateType = {
    register: boolean
    error: string | null
} // Тип Стейта
