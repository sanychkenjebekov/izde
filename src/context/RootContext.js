import React, {useState} from 'react';
import {GlobalContext} from "./index";

const RootContext = ({children}) => {
    const [language, setLanguage] = useState('en-EU')
    const [profil, setProfil] = useState(true)
    const [users, setUsers] = useState(false)
    return (
        <GlobalContext.Provider value={{
            language,
            setLanguage,
            profil,
            setProfil,
            users,
            setUsers
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default RootContext;