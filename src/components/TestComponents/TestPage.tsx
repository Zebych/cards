import SuperButton from "../SuperComponents/SuperButton/SuperButton";
import SuperInputText from "../SuperComponents/SuperInputText/SuperInputText";
import SuperCheckbox from "../SuperComponents/SuperCheckbox/SuperCheckbox";
import s from './TestPage.module.css'

export const TestPage = () => {
    return <div className={s.column}>

        <SuperButton>
            button
        </SuperButton>
        <SuperInputText />
        <SuperCheckbox/>

    </div>
}