import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {Redirect} from "react-router-dom";
import React from "react";
import {ResponseLogUpType} from "../api/loginAPI";

export const Profile = () => {
    const profileData=useSelector<AppRootStateType,ResponseLogUpType>(state=>state.profile)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    return <div>
        Profile
          {profileData._id}{profileData.avatar}{profileData.name}
    </div>
}