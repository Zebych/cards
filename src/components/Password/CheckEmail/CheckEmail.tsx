import React, {useEffect} from "react";
import styles from "./CheckEmail.module.css"
import {CheckEmailIcon} from "./CheckEmailIcon";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {sendEmailPasswordSuccess} from "../../../store/password-reducer";

export const CheckEmail = () => {
    const email = useSelector<AppRootStateType, string>(state => state.password.email)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sendEmailPasswordSuccess(''))
    })

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>It-incubator</h3>
            <CheckEmailIcon />
            <p className={styles.subheading}>Check Email</p>
            <p className={styles.instruction}>
                We’ve sent an Email with instructions to <b>{email}</b>
            </p>
        </div>
    )
}