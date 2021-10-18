import React, {ChangeEvent} from 'react';
import SuperButton from "../SuperComponents/SuperButton/SuperButton";

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
        <div>
            <div>
                <input onChange={onChangeMailHandler} value={email}/>
            </div>
            <div>
                <input type="text" onChange={onChangePasswordHandler} value={password}/>
            </div>
            <div>
                <span onClick={toRegister}>register</span>
                <input type="checkbox" checked={checkBox} onChange={changeCheckedBoxHandler}/>
            </div>

            <SuperButton onClick={logUp}/>
        </div>
    )
}



