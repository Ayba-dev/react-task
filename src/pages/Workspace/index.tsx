import React, {useState} from 'react';
import {useNotes} from "../../context/Context.tsx";
import {Button, TextField} from "@mui/material";
import {MdOutlineSystemUpdateAlt} from "react-icons/md";
import styles from './workspace.module.css'
import KeepMountedModal from "../../components/Modal";
import {FaCheck} from "react-icons/fa";

const WorkSpace = () => {
    const {getItem, updateNote} = useNotes()
    const [change, setChange] = useState('');
    const [openChange, setOpenChange] = useState(false);

    const clickUpdate = () => {
        updateNote(getItem.id, change)
        setOpenChange(false)

    }
    return (
        <div>
            <div className={styles.wrapper}>
                {
                    getItem &&
                    <>
                        <KeepMountedModal/>
                        <Button onClick={() => setOpenChange(!openChange)} startIcon={<MdOutlineSystemUpdateAlt/>}
                                variant="contained" color="success">
                            Редактировать
                        </Button>
                    </>
                }
            </div>
            {
                !openChange ? <h2>{getItem?.title}</h2> :
                    <div className={styles.check}>
                        <TextField onChange={(e) => setChange(e.target.value)}/><FaCheck onClick={clickUpdate}
                                                                                         size={40}/>
                    </div>
            }
        </div>
    )
        ;
};

export default WorkSpace;