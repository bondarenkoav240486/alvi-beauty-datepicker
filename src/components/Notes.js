
import React, {useEffect} from 'react';
import NotesList from './NotesList';
import NoteForm from './NoteForm';
import SelectTimes from './SelectTimes.js';
import {useDispatch,useSelector} from "react-redux";
import { nanoid } from 'nanoid'
import {
        setDateNoteAction, 
        setDateNotesAction, 
        setAllNotesAction, 
        setNotesOfThisDateAction, 
        setallNotesDateIdAction, 
        pushNewNotesDateAction, 
        initSelectedDateAction,
    } from "../toolkitRedux/toolkitSlice";


const Notes = () => {
    const dispatch = useDispatch();
    const dateNote = useSelector(state => state.toolkit.dateNote);
    const allNotes = useSelector(state => state.toolkit.allNotes);
    const setAllNotes = (par) => ( 
        dispatch(setAllNotesAction(par))
    );
        const setDateNotes = (par) => ( 
        dispatch(setDateNotesAction(par))
    );
    const setDateNote = (par) => ( 
        dispatch(setDateNoteAction(par))
    );
    const modal = useSelector(state => state.toolkit.modal);
    const setNotesOfThisDate =  (par) => ( 
        dispatch(setNotesOfThisDateAction(par))
    );
     const initSelectedDate = (par) => ( 
        dispatch(initSelectedDateAction(par))
    );
    const year = useSelector(state => state.toolkit.year);
    const month = useSelector(state => state.toolkit.month);

    let bufferInitAllNotes;
   
    if (
        JSON.parse( 
            localStorage.getItem(
                // 'key2'
                'key_alvi_beauty_datepicker'
            ) 
        )===null
    ) 
    {
        localStorage.setItem(
            'key_alvi_beauty_datepicker',
            JSON.stringify(allNotes)
        );
    }
    else{
        bufferInitAllNotes
        = 
        JSON.parse( 
            localStorage.getItem(
                // 'key2'
                'key_alvi_beauty_datepicker'
                ) 
            );
    }

    // console.log( 
    //     localStorage.getItem(
    //             // 'key2'
    //         'key_alvi_beauty_datepicker'
    //     )
    // )
    //............................................................. 
    const getTodayMonth = (numberOfMonth) => {
        let  monthes = 
            [
                'січня','лютого','березня','квітня', 
                'травня','червня','липня','серпня',
                'вересня','жовтня','листопада','грудня'
            ];

        return monthes[numberOfMonth]
    }
    
    useEffect(() => {
        setAllNotes(bufferInitAllNotes);
        initSelectedDate(todayDate);
        setDateNote(
            { ...dateNote, 
                title:  
                    new Date().getDate()+ ' ' 
                    + getTodayMonth(month)
                    + ' ' 
                    + year
            }
        )
    }, []);
    useEffect(() => {
        localStorage.setItem(
            // 'key2',
            'key_alvi_beauty_datepicker',
            JSON.stringify(allNotes)
        );
    }, [allNotes]);
    
    let todayDate = 
                    new Date().getDate()
                    + '.' 
                    + new Date().getMonth()
                    + '.' 
                    + new Date().getFullYear();

    useEffect(() => {
        if(
            allNotes.find(
                elem => elem.date === todayDate
            ) === undefined 
        )
        {
            // setDateNotes(allNotes[0].notes);
            let obj = 
                {
                    id: Date.now(),
                    date: todayDate,
                    notes:[]
                };
            dispatch( pushNewNotesDateAction(obj) );
            setDateNotes(obj.notes);

        } else {        
            setDateNotes(
                allNotes.find(
                        elem => elem.date === todayDate
                ).notes
            );
        }
    }, [allNotes[0].notes]);

    const removeAllNotes = () => {
        localStorage.clear();
        setAllNotes(
            [
                {
                    id: nanoid(8),
                    date:'',
                    notes:[],
                    selectedDate:new Date().getDate() 
                    + '.' 
                    + new Date().getMonth()
                    + '.' 
                    + new Date().getFullYear(),
                    darkThemeOnOff: false,
                },
            ]
        )                 
    }


    return (
        <div className = "dateNotes">

            <SelectTimes/>
           
            <NoteForm/>

            <NotesList/>

             <div className="buttons">    
                <button 
                    id = 'removeAllNotes'
                    onClick={removeAllNotes}
                >
                    Bидалити всі записи
                </button>
            </div>
        </div>
    );
};

export default Notes ;