import React, { useEffect, useState } from 'react'
import useUser, {logout} from "./useUser";
import { useRouter } from "next/router"



export default function withAuth(ProtectedRoute) {
    return (props) => {
        const [isAuth, setAuth] = useState(null);
        const [user, setUser] = useState(null);
        const router = useRouter();
        const _logout = () => {
            logout()
            setAuth(null);
            setUser(null);
        };
        useEffect(async () => {
            const [_isAuth, _user] = await useUser()
            setAuth(_isAuth);
            setUser(_user);
            if(!_isAuth) {
                router.push("/")
            }
        }, []);
        return <ProtectedRoute {...props} />;
    };
}
