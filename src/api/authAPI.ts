import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})
const instanceRemote = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    // withCredentials: true,
    // headers: {}
})

//api
export const authAPI = {
    logUp(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>('/auth/login', {email, password, rememberMe});
    },
    me(){
        return instance.post<ResponseType>( '/auth/me',{})
    }
}

export const passwordAPI = {
    forgot(email: string) {
        return instance.post<ForgotPayloadType, PasswordApiResponseType>('auth/forgot', {
            email: email,
            from: 'RIA',
            message:
                `<table style="background-color: #a6d7f5; 
                            padding: 50px 35px; 
                            margin-left: 100px;">
                        <tr>
                            <td>
                                 <h1 style="color: #02324f; margin-bottom: 20px; text-align: center;">Do you want to change your password?</h1>
                            </td>
                        </tr>
                    <tr>
                    <td>
                        <h3 style="text-align: center;">
                            <a href='http://localhost:3000/#/friday/set-new-password/$token$'
                               style="color: #153109">
                                <i>Yes, I want to change my password!</i>
                            </a>
                        </h3>
                    </td>
                    </tr>
                </table>`,
        })
    },
    setNew(password: string, token: string) {
        return instance.post<SetNewPasswordPayloadType, PasswordApiResponseType>('auth/set-new-password', {
            password: password,
            resetPasswordToken: token
        })
    }
}

export const RegisterAPI = {
    register(email: string, password: string) {
        return instance.post<RegisterResponse,any>(`auth/register`, {email, password})
    }
}

//Types
type RegisterResponse = {
    addedUser: {}
    error?: string
}

export type PasswordApiResponseType = {
    data: {
        info: string
        error: string
    }
}
export type SetNewPasswordPayloadType = {
    password: string
    resetPasswordToken: string
}
export type ForgotPayloadType = {
    email: string
    from: string
    message: string
}

export type ResponseType ={
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