import React, { useState, useEffect } from "react";
import useUser, { logout } from "../helpers/useUser";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [ isAuth, setAuth ] = useState(null);
  const [ user, setUser ] = useState(null);
  const _logout = () => {
    logout()
    setAuth(null);
    setUser(null);
  };
  useEffect(async () => {
    const [_isAuth, _user] = await useUser()
    setAuth(_isAuth);
    setUser(_user);
  }, []);
  return <Component {...pageProps} isAuth={isAuth} setAuth={setAuth} user={user} setUser={setUser} _logout={_logout} />
}

export default MyApp
