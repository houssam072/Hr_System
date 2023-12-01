// @ts-nocheck
import React, {useContext} from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {User} from './Context';



export default function RequireAuth() {
    const user = useContext(User);
    const is_staff = user.staff;
    const location = useLocation();

    return is_staff ? <Outlet /> : <Navigate state={{from:location}} replace to="/login" />;
}
