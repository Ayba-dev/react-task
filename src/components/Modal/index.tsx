
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNotes} from "../../context/Context.tsx";
import {MdDelete} from "react-icons/md";
import styles from './modal.module.css'
import {useState} from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function KeepMountedModal() {
    const [open, setOpen] = useState(false)
    const {deleteItem, getItem} = useNotes()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onClickDelete = () => {
        deleteItem(getItem.id)
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpen} endIcon={<MdDelete/>} variant="outlined" color="error">
                Удалить
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Вы точно хотите удалить ?
                    </Typography>
                    <Typography className={styles.modal} id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        <Button onClick={onClickDelete}>Да</Button>
                        <Button onClick={() => setOpen(false)}>Нет</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}


















// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
// import {useNotes} from "../../context/Context.tsx";
//
// const style = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
//
// export default function ModalWindow() {
//     const {openModal, setOpenModal} = useNotes()
//     const handleClose = () => setOpenModal(false);
//
//     return (
//         <div>
//             <Modal
//                 keepMounted
//                 open={openModal}
//                 onClose={handleClose}
//                 aria-labelledby="keep-mounted-modal-title"
//                 aria-describedby="keep-mounted-modal-description"
//             >
//                 <Box sx={style}>
//                     <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
//                         Text in a modal
//                     </Typography>
//                     <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                     </Typography>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }