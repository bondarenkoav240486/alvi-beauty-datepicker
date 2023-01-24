
import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from 'nanoid'

import {setallNotesFindIdNotesAction, 
        setDateNoteAction, 
        setDateNotesAction, 
        } from "../toolkitRedux/toolkitSlice";

const NoteForm = () => {
    const dispatch = useDispatch();
    const allNotes = useSelector(state => state.toolkit.allNotes);
    const dateNotes = useSelector(state => state.toolkit.dateNotes);
     const setDateNotes = (par) => ( 
        dispatch(setDateNotesAction(par))
    );
    const dateNote = useSelector(state => state.toolkit.dateNote);
    const setDateNote = (par) => ( 
        dispatch(setDateNoteAction(par))
    );

    const saveChanges = () => {
        let date = allNotes[0].selectedDate ;
        dispatch( setallNotesFindIdNotesAction(date) )
        localStorage.setItem(
            // 'key2',
            'key_alvi_beauty_datepicker',
            JSON.stringify(allNotes)
        );
    }

    const addNewPost = (e) => {
        e.preventDefault()
        if (dateNotes.length >= 4) {
            return
        }
        // if (dateNote.title === '') {
        //     return
        // }
        // if (dateNote.body === '') {
        //     return
        // }
        const newPost = {
            ...dateNote, id: nanoid(8)
        }
        setDateNotes([...dateNotes, newPost])

        saveChanges();
    }


    return (
        <div className="noteForm">
            <div className = "infoSelectedDAteAndTime">
                {dateNote.title + ' ' + dateNote.body}
            </div>
            <button 
                className="buttonConfirm" 
                onClick={addNewPost}
            >
                <div className='checkMark'></div>
                <div className='text'>Підтвердити</div>
            </button>
        </div>
    )
};

export default NoteForm;