import React, {ChangeEvent} from 'react';
import SuperButton from "../SuperComponents/SuperButton/SuperButton";
import SuperInputText from "../SuperComponents/SuperInputText/SuperInputText";
import styles from "./login.module.scss"
import SuperCheckbox from "../SuperComponents/SuperCheckbox/SuperCheckbox";
import {NavLink} from 'react-router-dom';

export const Login: React.FC<LoginPropsType> = (
    {
        checkBox,
        logUp,
        changeCheckedBox,
        onChangePassword,
        onChangeMail,
        email,
        password, error,
    }) => {
//сбор данных с инпутов
    const onChangeMailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return onChangeMail(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return onChangePassword(e.currentTarget.value)
    }
    const changeCheckedBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return changeCheckedBox(e.currentTarget.checked)
    }
//стили для ошибки логинизации
    const tipError = `${styles.tip} ${error && styles.error}`

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>It-incubator</h3>
            <p className={styles.subheading}>cards</p>

            <p className={styles.inputWrapper}>
                <SuperInputText onChange={onChangeMailHandler} value={email} placeholder="Email:"/>
            </p>
            <p className={styles.inputWrapper}>
                <SuperInputText type={"password"} placeholder="Password:" onChange={onChangePasswordHandler}
                                value={password}/>
            </p>
            {error && <p className={tipError}>{error}</p>}
            <p className={styles.remember}>remember me
                <SuperCheckbox checked={checkBox} onChange={changeCheckedBoxHandler}/>
            </p>
            <SuperButton onClick={logUp} className={styles.send}>Login</SuperButton>
            <p className={styles.naw}>
                <NavLink to={'/register'}> Registration</NavLink>
                <NavLink to={'/recoveryPass'}> Recovery Password</NavLink>
            </p>
        </div>
    )
}
//Types
type LoginPropsType = {
    logUp: () => void
    changeCheckedBox: (checked: boolean) => void
    onChangePassword: (pass: string) => void
    onChangeMail: (mail: string) => void
    email: string
    password: string
    checkBox: boolean
    error?: string
}

