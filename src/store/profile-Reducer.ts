import {Dispatch} from "redux";
import {loginAPI, ResponseLogUpType} from "../api/loginAPI";


export const initState: InitStateType = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0, // количество колод

    created: '',
    updated: '',
    isAdmin: false,
    verified: false,// подтвердил ли почту
    rememberMe: false,

    error: 'error',

}

export const profileReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case 'login/SET_PROFILE_DATA': {
            debugger
            return {
                ...state,
                _id: action.profileData._id,
                email: action.profileData.email,
                name: action.profileData.name,
                avatar: action.profileData.avatar,
                publicCardPacksCount: action.profileData.publicCardPacksCount, // количество колод

                created: action.profileData.created,
                updated: action.profileData.updated,
                isAdmin: action.profileData.isAdmin,
                verified: action.profileData.verified,// подтвердил ли почту
                rememberMe: action.profileData.rememberMe,

                error: action.profileData.error,
            }
        }
        default:
            return state
    }
}
//Actions
const setProfileDataAC = (profileData: ResponseLogUpType) =>
    ({type: 'login/SET_PROFILE_DATA', profileData} as const)

//Thunk
export const setProfileDataTC = () => (dispatch: Dispatch) => {
    debugger
    loginAPI.me().then((res) => {
        debugger
        dispatch(setProfileDataAC(res.data))
    })

}

//Types
type ActionType = ReturnType<typeof setProfileDataAC>
export type InitStateType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}
