import React, {ChangeEvent, useCallback, useState} from 'react';
import SuperButton from "./SuperComponents/SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {logUpTC} from "../store/login-Reducer";

export const Login = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [checkBox, setCheckBox] = useState(true)
    const dispatch = useDispatch()

    const onChangeMail = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            return setMail(e.currentTarget.value)
        }, [mail]
    )
    const onChangePassword = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            return setPassword(e.currentTarget.value)
        }, [password]
    )
    const changeCheckedBox = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        return setCheckBox(e.currentTarget.checked)
    }, [checkBox])

    const logUp = () => {
        dispatch(logUpTC(mail, password, checkBox))
        setMail('')
        setPassword('')
        setCheckBox(true)
    }

    return (
        <div>
            <div>
                <input onChange={onChangeMail} value={mail}/>
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



