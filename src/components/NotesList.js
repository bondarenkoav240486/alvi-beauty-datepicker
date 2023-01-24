import React, {useMemo} from 'react';
import NoteItem from "./NoteItem";

import {useDispatch,useSelector} from "react-redux";
import {
        setPostsAction, 
        } 
        from "../toolkitRedux/toolkitSlice";

const NotesList = () => {
    const dispatch = useDispatch();
    const dateNotes = useSelector(state => state.toolkit.dateNotes);


    //POSTS sortedAndSearched....................................
    const sortedPosts = useMemo(()=>{
            return  [...dateNotes].sort( (a,b)=>{ 
                return a['body'].localeCompare(b['body']) 
            }) 
    },[dateNotes])
   

    return (
        <div className="postlist">
                {sortedPosts.map((post, index) =>
                    <NoteItem 
                        key={index}
                        number={index + 1} 
                        post={post}
                    />
                )}
        </div>
    );
};

export default NotesList ;