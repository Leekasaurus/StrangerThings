import {useNavigate} from "react-router-dom";

export default function userLogut({setToken}) {
    const navigate = useNavigate();
    
    return(
        <button onClick={() => {
            localStorage.removeItem("token");
            setToken("");
            navigate("auth/login")
        }}
        >
            Log Out
        </button>
    );
}