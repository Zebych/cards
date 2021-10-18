import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logUpTC} from "../../store/login-Reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../store/store";
import {getProfileDataTC} from "../../store/profile-Reducer";
import {Login} from "./Login";

export const LoginContainer = () => {
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [checkBox, setCheckBox] = useState(true)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
        dispatch(getProfileDataTC())
    }, [isLoggedIn])


    const onChangeMail = (mail:string) => {
        return setMail(mail)
    }
    const onChangePassword = (pass: string) => {
        return setPassword(pass)
    }
    const changeCheckedBox = (checked: boolean) => {
        return setCheckBox(checked)
    }

    const logUp = () => {
        dispatch(logUpTC(email, password, checkBox))
        setMail('')
        setPassword('')
        setCheckBox(true)
    }
    const toRegister = () => {
        return <Redirect to={'/register'}/>
    }
    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <>
            <Login
                toRegister={toRegister}
                checkBox={checkBox}
                password={password}
                email={email}
                logUp={logUp}
                changeCheckedBox={changeCheckedBox}
                onChangePassword={onChangePassword}
                onChangeMail={onChangeMail}
            />
        </>
    )
}



