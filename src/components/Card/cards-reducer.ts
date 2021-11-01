import {Dispatch} from "redux";
import {cardsAPI, CardsPacksType, ResponseCardsType} from "../../api/cardsAPI";


export const cardsInitState: ResponseCardsType = {
    cardPacks: [] as CardsPacksType[],
    cardPacksTotalCount: 14,// количество колод
    maxCardsCount: 40,
    minCardsCount: 0,
    page: 1, // выбранная страница
    pageCount: 10,// количество элементов на странице
}

export const cardsReducer = (state: InitStateCardsType = cardsInitState, action: ActionType) => {
    switch (action.type) {
        case 'cards/SET-ALL-CARDS':
            return {...state, ...action.data}
        case 'cards/SET_PAGE' :
            return {...state, page: action.newPage}
        case 'cards/SET_PAGE_FOR_SEARCH_CARD_MODE' :
            return {...state, pageForSearchCardMode: action.newPage}
        default:
            return state
    }
}
//Actions
export const setAllCards = (data: ResponseCardsType) => ({type: 'cards/SET-ALL-CARDS', data} as const)
export const SetPage = (newPage: number) => ({type: 'cards/SET_PAGE' as const, newPage})
export const SetPageForSearchCardMode = (newPage: number) => ({
    type: 'cards/SET_PAGE_FOR_SEARCH_CARD_MODE' as const, newPage
})

//Thunk
export const fetchCards = () => (dispatch: Dispatch) => {
    cardsAPI.getCards().then((res) => {
            dispatch(setAllCards(res.data))
        }
    )
        .catch((err) => {
                console.log(', more details in the console')
            }
        )
}

//Types
type ActionType =
    | ReturnType<typeof setAllCards>
    | ReturnType<typeof SetPage>
    | ReturnType<typeof SetPageForSearchCardMode>
export type InitStateCardsType = typeof cardsInitState