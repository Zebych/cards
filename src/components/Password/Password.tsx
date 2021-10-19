import React, {ChangeEvent, useEffect, useState} from "react";
import styles from "./Password.module.scss"
import SuperInputText from "../SuperComponents/SuperInputText/SuperInputText";
import SuperButton from "../SuperComponents/SuperButton/SuperButton";
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {InitialPasswordReducerType} from "../../store/password-reducer";

export const Password = () => {
    const [email, setEmail] = useState('')
    const {sendEmailError, sendEmailSuccess} = useSelector<AppRootStateType, InitialPasswordReducerType>(state => state.password)

    const dispatch = useDispatch()

    const inputEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)
    const sendRequest = () => dispatch(changePasswordEmailRequest(email))
    // piterom911@gmail.com

    useEffect(() => {
        if (sendEmailSuccess !== '') {
            dispatch(setPasswordEmail(email))
        }
    }, [sendEmailSuccess])

    if (sendEmailSuccess) return <Redirect to={'/check-email'}/>

    const tipClass = `${styles.tip} ${sendEmailError && styles.error}`

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>It-incubator</h3>
            <p className={styles.subheading}>Forgot your password?</p>
            <p className={styles.inputWrapper}>
                <SuperInputText onChange={inputEmail}
                                onEnter={sendRequest}
                                className={styles.input}
                                placeholder="Email"
                />
            </p>
            <p className={styles.instruction}>
                Enter your email address and we will send you further instructions
            </p>
            {sendEmailError || sendEmailSuccess ? <p className={tipClass}>{sendEmailError || sendEmailSuccess}</p> : null}
            <SuperButton onClick={sendRequest}
                         className={styles.send}
            > Send Instructions </SuperButton>
            <p className={styles.remember}>Did you remember your password?</p>
            <NavLink to={'/login'} className={styles.toLogin}>Try logging in</NavLink>
        </div>
    )
}

function changePasswordEmailRequest(email: string): any {
    throw new Error("Function not implemented.");
}
function setPasswordEmail(email: string): any {
    throw new Error("Function not implemented.");
}

