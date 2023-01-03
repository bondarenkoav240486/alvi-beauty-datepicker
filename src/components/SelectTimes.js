
import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {
        setDateNoteAction 
        } from "../toolkitRedux/toolkitSlice";

const SelectTimes = ({children, index, style}) => {
    const dispatch = useDispatch();
    const dateNote = useSelector(state => state.toolkit.dateNote);
    const setDateNote = (par) => ( 
        dispatch(setDateNoteAction(par))
    );

    function letCheckButtonCurrentTime(event) {
        let buttonArr = 
            Array.from(
                document
                .querySelectorAll('.selectTimes .row button')
            );
        buttonArr.forEach( (elem,i,arr) => {
            elem.classList.remove('check');
        } )
        if( event.target.textContent !== ''){
            event.target.classList.add('check');
        } else {
            return 
        }
    }


    return (
        <div className="selectTimes">
            <div className="row">
                <button
                    onClick={
                        (e)=>{
                           setDateNote(
                                { ...dateNote, body: e.target.innerHTML}
                            );
                            letCheckButtonCurrentTime(e)
                        }
                    }
                >
                    10:00
                </button>
                <button
                     onClick={
                        (e)=>{
                           setDateNote(
                                { ...dateNote, body: e.target.innerHTML}
                            );
                            letCheckButtonCurrentTime(e)
                        }
                    }            
                >
                    12:00
                </button>
            </div>
            <div className="row">
                <button
                     onClick={
                        (e)=>{
                           setDateNote(
                                { ...dateNote, body: e.target.innerHTML}
                            );
                            letCheckButtonCurrentTime(e)
                        }
                    }
                >
                    16:00
                </button>
                <button
                     onClick={
                        (e)=>{
                           setDateNote(
                                { ...dateNote, body: e.target.innerHTML}
                            );
                            letCheckButtonCurrentTime(e)
                        }
                    }
                >
                    18:00
                </button>
            </div>
        </div>
    );
};

export default SelectTimes;