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

}


export const CustomContext = createContext<TypeHooks | undefined>(undefined);
export const Context = (props: ContainerProps) => {

    const [user, setUser] = useState(null);
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState<INotes[]>([]);
    const [getItem, setGetItem] = useState(null)


    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    const register = (user: never, callback: Function) => {
        setUser(user)
        callback()
    }


    const addItem = (title: string) => {
        setNotes([...notes, {
            id: v4(),
            title: title,
            date: new Date().toLocaleTimeString()
        }])
        setTitle('')
    }

    const getElement = (id: string) => {
        const  element   = notes.find((item) => item.id === id)
        if (element) {
            setGetItem(element)
        }
    }


    // const deleteNote = (id: string) => {
    //     setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    //     setSelectedNoteId(null);
    // };

    // const updateNote = (id: string, content: string) => {
    //     setNotes(prevNotes =>
    //         prevNotes.map(note =>
    //             note.id === id ? {...note, content} : note
    //         )
    //     );
    // };


    const value = {
        user,
        register,
        // updateNote,
        // deleteNote,
        setUser,
        title,
        setTitle,
        addItem,
        notes,
        getItem,
        setGetItem,
        getElement
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
