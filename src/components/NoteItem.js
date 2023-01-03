import React, {useEffect} from 'react';
import MyModal from "./UI/MyModal/MyModal";

import {useDispatch,useSelector} from "react-redux";
import {setallNotesFindIdNotesAction,
        setModalAction, 
        setSaveAction, 
        setDateNoteAction, 
        setDateNotesAction,
    } from "../toolkitRedux/toolkitSlice";


const NoteItem = (props) => {

    const modal = useSelector(state => state.toolkit.modal);
    const dispatch = useDispatch();
    const allNotes = useSelector(state => state.toolkit.allNotes);
    const dateNotes = useSelector(state => state.toolkit.dateNotes);
    const setDateNotes = (par) => ( 
        dispatch(setDateNotesAction(par))
    );

    // const save = useSelector(state => state.toolkit.save);
    // const setSave = (par) => ( 
    //     dispatch(setSaveAction(par))
    // );

    const setModal = (par) => ( 
        dispatch(setModalAction(par))
    );
    const dateNote = useSelector(state => state.toolkit.dateNote);
    const setDateNote = (par) => ( 
        dispatch(setDateNoteAction(par))
    )

    const saveChanges = () => {
        let id = allNotes[0].selectedDate ;
        dispatch( setallNotesFindIdNotesAction(id) )
        localStorage.setItem('key2',JSON.stringify(allNotes));
    }

     const removePost = (post) => {
        // setDateNotes(dateNotes.filter(p=>p.id!==props.post.id));
        setDateNotes(dateNotes.filter(p=>p.id!==dateNote.id));
        saveChanges();
        // setModal(false);
    }

    const openPost = (post) => {
        setDateNote(dateNotes.find(p=>p.id==props.post.id))
    }


    return (
        <div className="post"
        >
            <div className="post__content"
            >
                {props.post.title
                +' '
                +props.post.body}
            </div>
            <div className="post__btns">
                <button
                    className="btn_remove_note"
                    onClick={
                        () => {
                            openPost(props.post);
                            setModal(true);
                        }
                    }
                >
                    X
                </button>
                <MyModal 
                    visible={modal}
                    setVisible={setModal}
                >       
                        <div className="background_wrapper">
                        <div className="text_remove_confirm">
                             Ви впeвнені, що бажаєте видалити запис?
                        </div>
                        <div className="btns_remove_confirm">
                            <button
                                onClick={
                                    () => {
                                        removePost(props.post);
                                        setModal(false);

                                    }
                                }
                            >
                                Так
                            </button>
                            <button
                                onClick={
                                    () => {
                                        setModal(false);
                                    }
                                }
                            >
                                Ні
                            </button>
                        </div>
                        </div>

                </MyModal>        
            </div>
        </div>
    );
};

export default NoteItem;