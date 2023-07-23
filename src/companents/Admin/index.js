import React from 'react';
import {Route, Routes} from "react-router-dom";
import Payment from "../../Agents/Payment";
import Reatly from "../../Agents/Reatly";
import LoginUser from "../LoginAdmin/loginUser";

const Admin = () => {
    return (
        <>
        <Routes>
            <Route path={'/'} element={<LoginUser/>} />
            <Route path={'/payment'} element={<Payment/>} />
            <Route path={'/reality'} element={<Reatly/>} />
        </Routes>
        </>
    );
};

export default Admin;