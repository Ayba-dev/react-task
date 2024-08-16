import React from 'react';
import {useNotes} from "../../context/Context.tsx";

const WorkSpace = () => {

    const {getItem} = useNotes()
    return (
        <div>
            <h2>{getItem.title}</h2>
        </div>
    );
};

export default WorkSpace;