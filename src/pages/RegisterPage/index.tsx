import React from 'react';
import styles from './reigister.module.css'
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useNotes} from "../../context/Context.tsx";

const Register = () => {
    const value = {
        name: '',
        email: '',
        password: ''
    }

    const {register} = useNotes()

    const navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const form2 = new FormData(e.currentTarget)
        const form3 = new FormData(e.currentTarget)
        const user = {
            name: form.get('name'),
            email: form2.get('email'),
            password: form3.get('password')
        }
        if (user) {
            value.name = user.name!.toString()
            value.email = user.email!.toString()
            value.password = user.password!.toString()
        }
        localStorage.setItem('user', JSON.stringify(value))
        register(value, () => {
            navigate('/')
        })
        console.log(value)
    }

    return (
        <div className={styles.register}>
            <h2 className={styles.h2}>REGISTER FORM</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField placeholder={'name'} type={'text'} name={'name'} style={{width: 400}}/>
                <TextField placeholder={'email'} type={'email'} name={'email'} style={{width: 400}}/>
                <TextField placeholder={'password'} type={'password'} name={'password'} style={{width: 400}}/>
                <Button type={'submit'} style={{width: 400}} variant="contained" color="primary">
                    Success
                </Button>
            </form>
        </div>
    );
};

export default Register;