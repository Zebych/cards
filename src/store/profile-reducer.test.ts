import {InitStateProfileType, profileReducer, setProfileDataAC} from "./profile-reducer";

const startState: InitStateProfileType = {
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

test('set profile data', () => {
    const newProfile={
        _id: '1',
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
    const endState = profileReducer(startState, setProfileDataAC(newProfile))

    expect(endState._id).toBe('1')
})
