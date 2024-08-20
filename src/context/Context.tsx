import React, {createContext, useContext, useState} from 'react';
import {INotes, IUser} from "../utils/types/types.ts";
import {v4} from 'uuid';

type ContainerProps = {
    children: React.ReactNode
}

interface TypeHooks {
    user: null;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>
    register: (user: IUser, callback: () => void) => void;
    setUser: React.Dispatch<React.SetStateAction<null>>;
    addItem: (title: string) => void;
    notes: INotes[];
    getItem: INotes;
    setGetItem: React.Dispatch<React.SetStateAction<null>>
    deleteItem: (id: string) => void;
    openModal : boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    updateNote: (id: string, content: string) => void
}


export const CustomContext = createContext<TypeHooks | undefined>(undefined);
export const Context = (props: ContainerProps) => {

    const [user, setUser] = useState(null);
    const [openModal, setOpenModal] = React.useState(false);
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState<INotes[]>(JSON.parse(localStorage.getItem('title')) || []);
    const [getItem, setGetItem] = useState(null)


    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    const register = (user: never, callback: Function) => {
        setUser(user)
        callback()
    }


    const addItem = (title: string) => {
        const newItem = {
            id: v4(),
            title: title,
            date: new Date().toLocaleTimeString()
        }
        setNotes([...notes, newItem])
        localStorage.setItem('title', JSON.stringify([...notes, newItem]))
        setTitle('')
    }

    const getElement = (id: string) => {
        const element = notes.find((item) => item.id === id)
            setGetItem(element)
    }
    const deleteItem = (id) => {
        setNotes(prevState => prevState.filter((item) => item.id !== id))
        setGetItem(null)
        localStorage.removeItem('title')
    }

    const updateNote = (id: string, content: string) => {
        const update = notes.map((item) => {
            return item.id === id ? {...item, title: content} : item
        })
        setNotes(update)
        setGetItem({...getItem, title: content})
    };


    const value = {
        user,
        register,
        setUser,
        title,
        setTitle,
        addItem,
        notes,
        getItem,
        setGetItem,
        getElement,
        deleteItem,
        openModal,
        setOpenModal,
        updateNote
    }
    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => {
    const context = useContext(CustomContext);
    if (!context) {
        throw new Error('useNotes must be used within a NotesProvider');
    }
    return context;
};


export default Context
