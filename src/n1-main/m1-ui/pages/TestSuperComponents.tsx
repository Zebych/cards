import React, {useState} from 'react'
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import Button from "../common/c2-SuperButton/button/Button";

const TestSuperComponents = () => {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'
    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }
    return (
        <div>
            <Button/>
            <SuperInputText/>
            <SuperButton  red // пропсу с булевым значением не обязательно указывать true
                          onClick={showAlert}/>
            <SuperCheckbox/>
        </div>
    )
}

export default TestSuperComponents