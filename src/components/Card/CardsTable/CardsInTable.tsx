import React from 'react';
import {CardsPacksType} from "../../../api/cardsAPI";
import SuperButton from "../../SuperComponents/SuperButton/SuperButton";

type CardsInTablePropsType={
    cardPacks:CardsPacksType[],
    profileId:string,
}
const CardsInTable:React.FC<CardsInTablePropsType> = (
    {cardPacks,profileId}
) => {
    return (
        <tbody>
        {cardPacks && cardPacks.map((t:any)=>
            <tr key={t._id}>
                <td>{t.name}</td>
                <td>{t.cardsCount}</td>
                <td>{t.updated ? new Date(t.updated).toLocaleDateString():''}</td>
                <td>{t.user_name}</td>
                <td>
                    <SuperButton>learn</SuperButton>
                    {t.user_id === profileId && <SuperButton>del</SuperButton>}
                    {t.user_id === profileId && <SuperButton>update</SuperButton>}
                </td>
            </tr>
        )}
        </tbody>
    );
};

export default CardsInTable;