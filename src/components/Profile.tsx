import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {Redirect} from "react-router-dom";
import React from "react";
import {ResponseType} from "../api/authAPI";

export const Profile = () => {
    const profileData = useSelector<AppRootStateType, ResponseType>(state => state.profile)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    //проверка логинизации
    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    return <div>
        <div>
            <img src={profileData.avatar} alt="ava"/>
        </div>
        <div>
            {profileData.name}
        </div>
        <div>
            Public card packs: {profileData.publicCardPacksCount}
        </div>
    </div>
}