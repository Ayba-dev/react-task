import React, {useEffect} from 'react';
import {Button, List, TextField} from "@mui/material";
import {useNotes} from "../../context/Context.tsx";
import styles from './sidebar.module.css'
import {Link} from "react-router-dom";
import {MdDelete} from "react-icons/md";

const Sidebar = () => {

    const {title, setTitle, addItem, notes, getElement, getItem, deleteItem} = useNotes();


    const clickOnElement = (id: string) => {
        return getElement(id)
        console.log(getItem)
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.wrapper}>
                <TextField
                    label=""
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                />
                <Button
                    disabled={title == ''}
                    onClick={() => addItem(title)}
                    color={'success'}
                    variant="contained"
                >
                    Add
                </Button>
            </div>
            <List spacing="sm">
                <ul className={styles.list}>
                    {notes.length === 0 ? 'Empty'  : notes.map((item) => (
                        <div className={styles.item}>
                            <Link onClick={() => clickOnElement(item.id)} key={item.id} to={`/${item.id}`}
                                  className={styles.time}>
                                <span className={styles.span}>{item.date}</span>
                                <li className={styles.link}>{item.title}</li>
                            </Link>
                        </div>
                    ))}
                </ul>
            </List>
        </div>
    );
};

export default Sidebar;