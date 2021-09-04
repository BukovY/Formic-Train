import React from "react";
import {setValidation} from "../redux/actions/changeVal";
import {useDispatch} from "react-redux";

const SelectorVal = () => {
    const dispatch = useDispatch()
    const setVal = (arg) => {
        dispatch(setValidation(arg))
    }
    return(
        <>
        <p>Выбор длинны валидации для логина</p>
        <select onChange={(ev)=> setVal(ev.target.value)}>
            <option value="def">До 10 символов</option>
            <option value="word5">До 5 символов</option>
            <option value="word2">До 2 символов</option>
        </select>
            </>
    )
}
export default SelectorVal