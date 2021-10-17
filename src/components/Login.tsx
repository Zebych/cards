import React, {ChangeEvent, useEffect, useState} from 'react';
import SuperButton from "./SuperComponents/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {logUpTC} from "../store/login-Reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../store/store";
import {setProfileDataTC} from "../store/profile-Reducer";

export const Login = () => {
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [checkBox, setCheckBox] = useState(true)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    useEffect(() => {
        debugger
        if (!isLoggedIn) {
            return
        }
        dispatch(setProfileDataTC())
    }, [isLoggedIn])
    const onChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
        return setMail(e.currentTarget.value)
    }
    const onChangePassword =
        (e: ChangeEvent<HTMLInputElement>) => {
            return setPassword(e.currentTarget.value)
        }
    const changeCheckedBox = (e: ChangeEvent<HTMLInputElement>) => {
        return setCheckBox(e.currentTarget.checked)
    }

    const logUp = () => {
        dispatch(logUpTC(email, password, checkBox))
        setMail('')
        setPassword('')
        setCheckBox(true)
    }

    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <div>
            <div>
                <input onChange={onChangeMail} value={email}/>
            </div>
            <div>
                <input type="text" onChange={onChangePassword} value={password}/>
            </div>
            <div>
                <input type="checkbox" checked={checkBox} onChange={changeCheckedBox}/>
            </div>

            <SuperButton onClick={logUp}/>
        </div>
    )
}



