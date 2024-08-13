import React  from 'react';

import {Navigate} from "react-router-dom";
import {useNotes} from "../../context/Context.tsx";

const PrivateRouter = ({children}) => {

    const {user} = useNotes()


    if (user === null) {
        return <Navigate to={'/register'}/>
    }


    return children
};

export default PrivateRouter;