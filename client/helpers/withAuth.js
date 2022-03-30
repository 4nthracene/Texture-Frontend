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
            console.log("_isAuth: ", _isAuth);
            setAuth(_isAuth);
            setUser(_user);
            console.log(_isAuth);
            if(_isAuth == null) {
                console.log("HELLO PLEASE", _isAuth);
                return router.push("/?auth=failed");
            }
        }, []);
        if(isAuth) {
            console.log("hi please")
            return <ProtectedRoute {...props} />;
        } else {
            return <></>;
        }
    };
}
