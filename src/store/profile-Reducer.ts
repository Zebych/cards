import {ResponseType} from "../api/authAPI";


export const initState = {
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

export const profileReducer = (state: InitStateProfileType = initState, action: ActionType) => {
    switch (action.type) {
        case 'login/SET_PROFILE_DATA': {
            return {
                ...state,
                ...action.profileData
            }
        }
        default:
            return state
    }
}
//Actions
export const setProfileDataAC = (profileData: ResponseType) =>
    ({type: 'login/SET_PROFILE_DATA', profileData} as const)

//Types
type ActionType = ReturnType<typeof setProfileDataAC>
export type InitStateProfileType = typeof initState