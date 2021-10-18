import React, {ChangeEvent} from 'react';
import SuperButton from "../SuperComponents/SuperButton/SuperButton";
import s from "./login.module.css"
import SuperInputText from "../SuperComponents/SuperInputText/SuperInputText";
import SuperCheckbox from "../SuperComponents/SuperCheckbox/SuperCheckbox";

type LoginPropsType = {
    logUp: () => void
    toRegister: () => void
    changeCheckedBox: (checked: boolean) => void
    onChangePassword: (pass: string) => void
    onChangeMail: (mail: string) => void
    email: string
    password: string
    checkBox: boolean
}
export const Login: React.FC<LoginPropsType> = ({
                                                    checkBox,
                                                    logUp,
                                                    changeCheckedBox,
                                                    onChangePassword,
                                                    onChangeMail,
                                                    email,
                                                    password, toRegister
                                                }) => {

    const onChangeMailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return onChangeMail(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return onChangePassword(e.currentTarget.value)
    }
    const changeCheckedBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        return changeCheckedBox(e.currentTarget.checked)
    }

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                email:
                <SuperInputText onChange={onChangeMailHandler} value={email}/>
                password:
                <SuperInputText type={"password"} onChange={onChangePasswordHandler} value={password}/>

                <div>
                    <span>remember me</span>
                    <SuperCheckbox checked={checkBox} onChange={changeCheckedBoxHandler}/>
                </div>

            </div>
            <span onClick={toRegister}>registration</span>
            <div className={s.button}>
                <SuperButton onClick={logUp} buttonName={'Log up'}/>
            </div>

        </div>
    )
}



