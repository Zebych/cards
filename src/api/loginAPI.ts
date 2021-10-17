import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})
export type LogUpType = {
    email: string
    password: string
    rememberMe:  boolean
}
//api
export const loginAPI = {
    logUp(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseLogUpType>('/auth/login', {email, password, rememberMe});
    },
    me(){
        return instance.post<ResponseLogUpType>( '/auth/me',{})
    }
}

//Types
export type ResponseLogUpType ={
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