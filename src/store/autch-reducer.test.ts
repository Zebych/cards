import {authReducer, InitStateAuthType, setErrorAC, setIsLoggedInAC} from "./auth-reducer";

const startState: InitStateAuthType = {
    isLoggedIn: false,
    errorLogin: '',
}

test('confirm login', () => {
    const endState = authReducer(startState, setIsLoggedInAC(true))

    expect(endState.isLoggedIn).toBe(true)
})
test('set Error', () => {
    const err = 'new error'
    const endState = authReducer(startState, setErrorAC(err))

    expect(endState.errorLogin).toBe('new error')
})