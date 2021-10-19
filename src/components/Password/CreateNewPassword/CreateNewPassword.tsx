import React, {ChangeEvent, useState} from "react";
import styles from "../Password.module.scss";
import SuperInputText from "../../SuperComponents/SuperInputText/SuperInputText";
import SuperButton from "../../SuperComponents/SuperButton/SuperButton";
import {IconShowPassword} from "./IconShowPassword";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {InitialPasswordReducerType, setNewPasswordRequest} from "../../../store/password-reducer";
import {Redirect, useParams} from "react-router-dom";

export const CreateNewPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [newPassword, setNewPassword] = useState('')

    const {error, success} = useSelector<AppRootStateType, InitialPasswordReducerType>(state => state.password)

    const dispatch = useDispatch()

    const { token } = useParams<{token: string}>();

    const sendNewPassword = () => {
        if (!newPassword) return
        dispatch(setNewPasswordRequest(newPassword, token))
    }

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.currentTarget.value)
    }

    if (success) return <Redirect to={'/login'}/>

    const tipClass = `${styles.tip} ${error && styles.error}`

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>It-incubator</h3>
            <p className={styles.subheading}>Create new password</p>
            <p className={styles.inputWrapper}>
                <SuperInputText className={styles.input}
                                onChange={onPasswordChange}
                                onEnter={sendNewPassword}
                                placeholder="Password"
                                type={`${showPassword ? "text" : "password"}`}
                />
                <span onClick={() => setShowPassword(!showPassword)}
                    className={`${styles.iconEye} ${showPassword && styles.iconEyeShown}`} >
                    <IconShowPassword />
                </span>
            </p>
            <p className={styles.instruction}>
                Create new password and we will send you further instructions to email
            </p>
            {error || success ? <p className={tipClass}>{error || success}</p> : null}
            <SuperButton onClick={sendNewPassword}
                className={styles.send}
            > Create new password </SuperButton>
        </div>
    )
}