import {Dispatch} from "redux";
import {authAPI, ResponseType} from "../api/authAPI";


export const initState: InitStateProfileType = {
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

    error: '',

}

export const profileReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case 'login/SET_PROFILE_DATA': {
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
const setProfileDataAC = (profileData: ResponseType) =>
    ({type: 'login/SET_PROFILE_DATA', profileData} as const)

//Thunk
export const getProfileDataTC = () => (dispatch: Dispatch) => {
    authAPI.me().then((res) => {
        dispatch(setProfileDataAC(res.data))
    })
}

//Types
type ActionType = ReturnType<typeof setProfileDataAC>
export type InitStateProfileType = {
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
