import React from 'react';
import {useNotes} from "../../context/Context.tsx";
import {Button} from "@mui/material";
import {MdOutlineSystemUpdateAlt} from "react-icons/md";
import styles from './workspace.module.css'
import KeepMountedModal from "../../components/Modal";
const WorkSpace = () => {
    const {getItem} = useNotes()
    return (
        <div>
            <div className={styles.wrapper}>
                {
                    getItem &&
                    <>
                        <KeepMountedModal/>
                        <Button startIcon={<MdOutlineSystemUpdateAlt/>} variant="contained" color="success">
                            Редактировать
                        </Button>
                    </>
                }
            </div>
            <h2>{getItem?.title}</h2>
        </div>
    )
        ;
};

export default WorkSpace;