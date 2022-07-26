import { Navigate } from "react-router-dom";

export default function RequiredAuth ({children}) {

    if(!localStorage.getItem("token")) {
        return <Navigate to="/Login"/>
    }
    return children;    
}