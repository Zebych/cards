import axios from 'axios'


const instanceRemote = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

//api
export const cardsAPI = {
    getCards() {
        return instanceRemote.get<ResponseCardsType>('/cards/pack');
    },
}

/*
export const passwordAPI = {
    forgot(email: string) {
        return instanceRemote.post<ForgotPayloadType, PasswordApiResponseType>('auth/forgot', {
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
        return instanceRemote.post<SetNewPasswordPayloadType, PasswordApiResponseType>('auth/set-new-password', {
            password: password,
            resetPasswordToken: token
        })
    }
}

export const RegisterAPI = {
    register(email: string, password: string) {
        return instanceRemote.post<RegisterResponse,any>(`auth/register`, {email, password})
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

*/
export type ResponseCardsType ={
    cardPacks: CardsPacksType[]
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
 }
 export type CardsPacksType=[
     {
         _id: string
         user_id: string
         name: string
         path: string// папка
         cardsCount: number
         grade: number // средняя оценка карточек
         shots: number // количество попыток			приватные колоды будут
         rating: number // лайки			только если указать свой
         type: string // ещё будет "folder" (папка)			user_id
         created: string
         updated: string
         __v: number
     },
 ]