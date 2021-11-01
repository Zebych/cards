import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCards, InitStateCardsType} from "./cards-reducer";
import {AppRootStateType} from "../../store/store";
import CardsInTable from './CardsTable/CardsInTable';
import {InitStateProfileType} from "../../store/profile-reducer";
import Paginator from "../SuperComponents/Paginator/Paginator";

const Cards = () => {
    const cards = useSelector<AppRootStateType, InitStateCardsType>(state => state.cards)
    const profile = useSelector<AppRootStateType, InitStateProfileType>(state => state.profile)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCards())
    }, [])
    const {
        cardPacks,

        //paginator
        cardPacksTotalCount,
        pageCount,
    } = cards

    return (
        <>
        <table>
            <thead>
            <th>name</th>
            <th>cards</th>
            <th>list updated</th>
            <th>created by</th>
            <th>actions</th>
            </thead>
            <CardsInTable cardPacks={cardPacks} profileId={profile._id}/>
        </table>
        {/*<Paginator totalItemsCount={cardPacksTotalCount} pageSize={pageCount} />*/}
        </>
    );
};

export default Cards;