import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})
type LogUpType = {
    mail: string,
    password: string,
    checkBox: boolean
}
//api
export const api = {
    logUp(mail: string, password: string, checkBox: boolean) {
        return instance.post<LogUpType>('/auth/login',/* {success: onChangeCheckbox}*/);
    },
}