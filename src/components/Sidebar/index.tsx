import React from 'react';
import {List, TextField} from "@mui/material";
import {useNotes} from "../../context/Context.tsx";

const Sidebar = () => {

    const {searchQuery, setSearchQuery} = useNotes();

    return (
        <div>
            <TextField
                label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
            />
            <List spacing="sm">
                {/*{notes.map(note => (*/}
                {/*    <List.Item key={note.id} onClick={() => setSelectedNote(note.id)}>*/}
                {/*        {note.title}*/}
                {/*    </List.Item>*/}
                {/*))}*/}
            </List>
        </div>
    );
};

export default Sidebar;