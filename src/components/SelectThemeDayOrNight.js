
import React, {useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";

import {
    setNotesOfThisDateAction, 
    setallNotesDateIdAction, 
    pushNewNotesDateAction, 
    setDateNoteAction,
    setDarkThemeOnOffAction,
    setAllNotesAction
} 
from "../toolkitRedux/toolkitSlice";


const SelectThemeDayOrNight = () => {

    const dispatch = useDispatch();
    const allNotes = useSelector(state => state.toolkit.allNotes);
    const setAllNotes = (par) => ( 
        dispatch(setAllNotesAction(par))
        );
    const darkThemeOnOff = useSelector(
        state => state.toolkit.allNotes[0].darkThemeOnOff
        );
    const setDarkThemeOnOff = (par) => ( 
        dispatch(setDarkThemeOnOffAction(par))
        );
    const buttonSelectThemeDayOrNight = 
    document.querySelector(
        '.buttonSelectThemeDayOrNight'
        );

    const info = 
    document.querySelector(
        '.info'
        );

    const letSelectThemeDayOrNight = () => {
        if (darkThemeOnOff) {
            setDarkThemeOnOff(false)
            document.body.classList.add('dark-theme');
            // document.body.classList.toggle('dark-theme');
        } else {
            setDarkThemeOnOff(true)
            document.body.classList.remove('dark-theme');
        } 
    }
    // початок роботи сторінки
    if (darkThemeOnOff) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }


    return (
        <div className="selectThemeDayOrNight">
        <button
        className="buttonSelectThemeDayOrNight"
        onClick={letSelectThemeDayOrNight}
        >

        </button>
        </div>
    );
};

export default SelectThemeDayOrNight;