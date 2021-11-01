import React, { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {InitStateAuthType, logUpTC} from "../../store/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../store/store";
import {Login} from "./Login";

export const LoginContainer = () => {
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [checkBox, setCheckBox] = useState(true)
    const auth = useSelector<AppRootStateType, InitStateAuthType>(state => state.auth)
    const dispatch = useDispatch()
    const isLoggedIn = auth.isLoggedIn
    const error = auth.errorLogin

//set импутов
    const onChangeMail = (mail: string) => {
        return setMail(mail)
    }
    const onChangePassword = (pass: string) => {
        return setPassword(pass)
    }
    const changeCheckedBox = (checked: boolean) => {
        return setCheckBox(checked)
    }
//button
    const logUp = () => {
        dispatch(logUpTC(email, password, checkBox))
        setMail('')
        setPassword('')
        setCheckBox(true)
    }
//Перейти на страницу профиля если прошла логинизация
    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <>
            <Login
                error={error}
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



