import React, {useState,useEffect} from 'react';
import {GlobalContext} from "./index";

const RootContext = ({children}) => {
    const [language, setLanguage] = useState('en-EU')
    const [profil, setProfil] = useState(true)
    const [users, setUsers] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [burgerUser, setBurgerUser] = useState(true);
    const [burgerProfil, setBurgerProfil] = useState(false);
    useEffect(() => {
        // Проверка наличия информации о пользователе в localStorage
        const storedUser = localStorage.getItem("user");
        const storedLoggedIn = localStorage.getItem("isLoggedIn");

        if (storedLoggedIn === "true" && storedUser) {
            setIsLoggedIn(true);
            // setUsers(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        // Логика входа в аккаунт
        setUsers(userData);
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Логика выхода из аккаунта
        setUsers(null);
        setIsLoggedIn(false);
    };

    useEffect(() => {
        // Сохранение информации о пользователе в localStorage
        localStorage.setItem("isLoggedIn", isLoggedIn);
        localStorage.setItem("user", JSON.stringify(users));
    }, [isLoggedIn, users]);
    return (
        <GlobalContext.Provider value={{
            language,
            setLanguage,
            profil,
            setProfil,
            users,
            setUsers,
            isLoggedIn,
            setIsLoggedIn,
            login,
            logout,
            burgerUser,
            setBurgerUser,
            burgerProfil,
            setBurgerProfil
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default RootContext;
