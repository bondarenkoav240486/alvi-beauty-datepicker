
import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {
        setNotesOfThisDateAction, 
        setallNotesDateIdAction, 
        pushNewNotesDateAction, 
        // setVisibleAction,
        setDateNoteAction 
        } from "../toolkitRedux/toolkitSlice";


const ComponentDate = (
        {children, 
        index, 
        classTodayDay, 
        classDayWithNotes}
    ) => {

    const dispatch = useDispatch();
    const allNotes = useSelector(state => state.toolkit.allNotes);
    const year = useSelector(state => state.toolkit.year);
    const month = useSelector(state => state.toolkit.month);
    const dateNote = useSelector(state => state.toolkit.dateNote);
    const setDateNote = (par) => ( 
        dispatch(setDateNoteAction(par))
    );

    const getTodayMonth = (numberOfMonth) => {
        let  monthes = 
            [
                'січня','лютого','березня','квітня', 
                'травня','червня','липня','серпня',
                'вересня','жовтня','листопада','грудня'
            ];

        return monthes[numberOfMonth]
    }

    function organize(event) {
        let tdArr = Array.from(document.querySelectorAll('.td'));
        tdArr.forEach( (elem,i,arr) => {
            elem.classList.remove('currentDay');
        } )
        if( event.target.textContent !== ''){
            event.target.classList.add('currentDay');
        } else {
            return 
        }

        let date = event.target.textContent + '.' + month + '.' + year;
        let selecteddate = 
            event.target.textContent
            + ' ' 
            + getTodayMonth(month)
            + ' ' 
            + year;

        let obj ={};

        // за необхідності створюємо записник за цю дату
        if( allNotes.find(elem=>elem.date==date)==undefined ){
            obj = 
                {
                    id: Date.now(),
                    date: date,
                    notes:[]
                };
            dispatch( pushNewNotesDateAction(obj) );
        }
        dispatch( setallNotesDateIdAction(date) );
        dispatch( setNotesOfThisDateAction(date) );

        setDateNote({ ...dateNote, title: selecteddate})
        // ...завершення функції organize
    }


    return (
        <div 
            className={
                'td'
                +' '+ classTodayDay.todayDay
                +' '+ classDayWithNotes.dayWithNotes
            }
            key={index}
            onClick = {
                (e)=>{
                    organize(e);
                }
            }
        >
            {children}
        </div> 
    );
};

export default ComponentDate;