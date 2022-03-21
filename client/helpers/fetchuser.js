import Cookies from "cookie-cutter"
import axios from "axios";

export default async () => {
    const GOOGLE_VERIFY_URI = "http://localhost:8000/auth/data";
    try{
        const response = await axios.get(GOOGLE_VERIFY_URI, { withCredentials: true })
        if(response && response.data) {
            Cookies.set("user", JSON.stringify(response.data));
        }
    } catch(error) {
        console.error(error.message);
    }
};
