import {CardsPacksType} from "../../../api/cardsAPI";

const InitTableState = {
    cardPacks: [] as CardsPacksType[],
    searchCardsArr: null as Array<CardsPacksType[]> | null,
    cardPacksTotalCount: 0,
    maxCardsCount: 40,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    currentPage: 1,
    sortStatus: '0updated' as SortPackType,
    searchText: '',
    checkBoxValue: false,
    searchedBy: '' as SearchTextType,
    searchMode: false as boolean,
    pageForSearchMode: 0 as number,
    searchEmpty: '' as string,
    loadingStatus: 'success' as loadingStatusType,
    errorText: '' as string
}
export const tableReducer = (state: InitTableStateType, action: ActionType) => {
    switch (action.type) {
        case 'table/SET_CURRENT_PAGE' :
            return {...state, currentPage: action.newPage}
        case 'table/SET_PAGE_FOR_SEARCH_MODE' :
            return {...state, pageForSearchMode: action.newPage}
        default:
            return state
    }
};
//Actions
export const SetCurrentPage = (newPage: number) => ({
    type: 'table/SET_CURRENT_PAGE' as const,
    newPage
})
export const SetPageForSearchMode = (newPage: number) => ({
    type: 'table/SET_PAGE_FOR_SEARCH_MODE' as const,
    newPage
})
//Thunk

//Types
export type InitTableStateType = typeof InitTableState
export type SortPackType = '0cardsCount' | '1cardsCount' | '0name' | '1name' | '0updated' | '1updated'
export type SearchTextType = 'By name' | 'By creator' | ''
export type loadingStatusType = 'success' | 'error' | 'loading' | 'redirect'
type ActionType =
    | ReturnType<typeof SetCurrentPage>
    | ReturnType<typeof SetPageForSearchMode>