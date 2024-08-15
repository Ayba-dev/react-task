import React from 'react';
import {Button, List, TextField} from "@mui/material";
import {useNotes} from "../../context/Context.tsx";
import styles from './sidebar.module.css'

const Sidebar = () => {

    const {title, setTitle, addItem, notes} = useNotes();

    return (
        <div className={styles.sidebar}>
            <div className={styles.wrapper}>
                <TextField
                    label="Search"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                />
                <Button
                    onClick={() => addItem(title)}
                    color={'success'}
                    variant="contained"
                >
                    Add
                </Button>
            </div>
            <List spacing="sm">
                <ul className={styles.list}>
                    {notes.map((item) => (
                        <div className={styles.time}>
                            <span className={styles.span}>{item.date}</span>
                            <li className={styles.link}>{item.title}</li>
                        </div>
                    ))}
                </ul>
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