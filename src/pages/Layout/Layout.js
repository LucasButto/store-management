import { Outlet } from "react-router-dom";

import { useContext } from "react";

import NavLayout from "../../components/Nav/NavLayout";
import Login from "../../components/Login/Login";

import AuthContext from "../../contexts/authContext/authContext";

// Componente que contendra las demas rutas  


const Layout = () => {
    
    const {info} = useContext(AuthContext)
    let logUser = localStorage.getItem("USER")

    return (
        <>
            <NavLayout/>
            <main>
                {info.status || logUser ? <Outlet/> : <Login/>}
            </main>
            
        </>
    )

}


export default Layout