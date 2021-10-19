import s from './Register.module.css'
import SuperButton from "../SuperComponents/SuperButton/SuperButton";
import {ChangeEvent, useState} from "react";
import SuperInputText from "../SuperComponents/SuperInputText/SuperInputText";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {Redirect, useHistory} from "react-router-dom";
import {RegisterThunk} from "../../store/register-Reducer";


export const emailRegExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i
export const emailValidator = (email: string): boolean => emailRegExp.test(email) // true - valid
export const passwordValidatorLength = (password: string): boolean => password.length > 7  // true - valid
export const passwordValidator = (password: string, confirmPass: string): boolean => password === confirmPass // true - valid


export const Register = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('') /*Стейт инпута Имейл*/
    const [pass, setPass] = useState('') /*Стейт инпута Пароль*/
    const [confirmPass, setConfirmPass] = useState('') /*Стейт инпута повторите пароль*/
    const [errorPass, setErrorPass] = useState('') /*Стейт ошибки, если пароли не совпадают*/
    const [emailError, setEmailError] = useState('') /*Стейт ошибки если емаил неправильный*/
    const [errorPassLength, setErrorPassLength] = useState('') /*Стейт ошибки если длина пароля меньше 7*/


    const isEmailValid = emailValidator(email) // Валидация имейла
    const isPassValid = passwordValidator(pass, confirmPass) // Валидация пароля
    const isPassLengthValid = passwordValidatorLength(pass) // Валидация пароля

    const register = useSelector((state: AppRootStateType) => state.register.register)
    const errorFromServer = useSelector((state: AppRootStateType) => state.register.error)

    const inputEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailError('')
        setEmail(event.currentTarget.value)
    }
    const inputPassHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setErrorPass('')
        setErrorPassLength('')
        setPass(event.currentTarget.value)
    }
    const inputConfirmPassHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setErrorPass('')
        setErrorPassLength('')
        setConfirmPass(event.currentTarget.value)
    }

    const registerHandler = () => {
        if (!isEmailValid) {
            setEmailError(' ')
        } else if (!isPassValid) {
            setErrorPass(' ')
        } else if (!isPassLengthValid) {
            setErrorPassLength(' ')
        } else {
            dispatch(RegisterThunk(email, pass))
        }
    }
    const cancelHandler = () => history.push('/login') // Редирект на логин

    if (register) {
        return <Redirect to={'/profile'}/> /*Если регистрация прошла успешно, редирект на Профайл*/
    }


    return <div className={s.container}>
        <h1>It-incubator</h1>
        <h3>
            Sign-Up
        </h3>
        <div className={s.wrapper}>

            <SuperInputText placeholder={'email'} value={email} onChange={inputEmailHandler}/>
            {emailError && <div className={s.errorMessage}>Email not valid</div>}
            {errorFromServer !== null ? <div className={s.errorMessage}>{errorFromServer}</div> : null}

            <SuperInputText placeholder={'password'} value={pass} type={'password'} onChange={inputPassHandler}/>
            {errorPassLength && <div className={s.errorMessage}>Пароль должен быть больше 7</div>}
            {errorPass && <div className={s.errorMessage}>Пароли не совпадают</div>}

            <SuperInputText placeholder={'confirm password'} value={confirmPass} type={"password"}
                            onChange={inputConfirmPassHandler}/>
            {errorPassLength && <div className={s.errorMessage}>Пароль должен быть больше 7</div>}
            {errorPass && <div className={s.errorMessage}>Пароли не совпадают</div>}

        </div>
        <div className={s.buttons}>

            <SuperButton onClick={() => cancelHandler()}>Cancel</SuperButton>
            <SuperButton onClick={() => registerHandler()}>Register</SuperButton>
        </div>
    </div>
}