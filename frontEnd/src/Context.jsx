import { createContext, useState } from "react";

export const User = createContext({});

export default function UserProvider({children}){
    const [auth, setAuth] = useState({});
    const [refresh, setRefresh] = useState({});
    const [staff, setStaff] = useState({});
    const [name, setName] = useState('');
    return <User.Provider value = {{auth, setAuth, refresh, setRefresh , staff, setStaff, name, setName}}>{children}</User.Provider>
}