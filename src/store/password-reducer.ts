import {Dispatch} from "redux";
import { passwordAPI } from "../api/authAPI";

// initial
export type InitialPasswordReducerType = {
    sendEmailError: string
    sendEmailSuccess: string
    error: string
    success: string
    email: string
    isPasswordChanged: boolean
}
export const initialPasswordReducer = {
    sendEmailError: '',
    sendEmailSuccess: '',
    error: '',
    success: '',
    email: '',
    isPasswordChanged: false,
} as InitialPasswordReducerType

export const passwordReducer = (state: InitialPasswordReducerType = initialPasswordReducer, action: PasswordReducerActionsType): InitialPasswordReducerType => {
    switch (action.type) {
        case 'password/SET-PASSWORD-ERROR':
            return {...state, sendEmailError: action.error}
        case "password/SET-PASSWORD-SUCCESS":
            return {...state, sendEmailSuccess: action.response}
        case "password/SET-PASSWORD-EMAIL":
            return {...state, email: action.email}
        case "password/SET-PASSWORD-CHANGED":
            return {...state, isPasswordChanged: true}
        case "password/SET-NEW-PASSWORD-ERROR":
            return {...state, error: action.error}
        case "password/SET-NEW-PASSWORD-SUCCESS":
            return {...state, success: action.response}
        default:
            return state
    }
}

// types
export type PasswordReducerActionsType = ReturnType<typeof sendEmailPasswordError>
    | ReturnType<typeof sendEmailPasswordSuccess> | ReturnType<typeof setPasswordEmail>
    | ReturnType<typeof setNewPasswordError> | ReturnType<typeof setNewPasswordSuccess>
    | ReturnType<typeof setPasswordChanged>

// actions
export const sendEmailPasswordError = (error: string) => ({type: 'password/SET-PASSWORD-ERROR', error} as const)
export const sendEmailPasswordSuccess = (response: string) => ({type: 'password/SET-PASSWORD-SUCCESS', response} as const)
export const setNewPasswordError = (error: string) => ({type: 'password/SET-NEW-PASSWORD-ERROR', error} as const)
export const setNewPasswordSuccess = (response: string) => ({type: 'password/SET-NEW-PASSWORD-SUCCESS', response} as const)
export const setPasswordEmail = (email: string) => ({type: 'password/SET-PASSWORD-EMAIL', email} as const)
export const setPasswordChanged = () => ({type: 'password/SET-PASSWORD-CHANGED'} as const)

// thunks
export const changePasswordEmailRequest = (email: string) => async (dispatch: Dispatch) => {
    try {
        const response = await passwordAPI.forgot(email)
        dispatch(sendEmailPasswordError(''))
        dispatch(sendEmailPasswordSuccess(response.data.info))
    } catch (error: any) {
        dispatch(sendEmailPasswordError(error.response.data.error))
        dispatch(sendEmailPasswordSuccess(''))
    }
}
export const setNewPasswordRequest = (password: string, token: string) => async (dispatch: Dispatch) => {
    try {
        const response = await passwordAPI.setNew(password, token)
        dispatch(setNewPasswordError(''))
        dispatch(setNewPasswordSuccess(response.data.info))
    } catch (error: any) {
        dispatch(setNewPasswordError(error.response.data.error))
        dispatch(setNewPasswordSuccess(''))
    }
}