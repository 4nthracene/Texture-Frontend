import Cookie from "cookie-cutter";
import fetchuser from "./fetchuser";
let user = null;
let isAuth = null;

const useUser = async () => {
    try {
        await fetchuser();
        if(Cookie.get("user")) {
            user = (await JSON.parse(Cookie.get("user"))).user;
            if(user) {
                isAuth = true;
            }
        }
    } catch(error) {
        console.error(error.message);
    }
    return [ isAuth, user ];
};

export const logout = () => {
    user = null;
    isAuth = null;
    Cookie.set("user", null);
};

export default useUser;
