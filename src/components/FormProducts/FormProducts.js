import React from 'react'
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext/AuthContext";
import FormProductLoad from './FormProductLoad';
import FormProductSell from './FormProductSell';

import { Button } from 'react-bootstrap';

const FormProducts = () => {

    const {user} = useContext(AuthContext)
    const [showForm, setShowForm] = useState(false)
    

    const buttonName = () => {
        switch (user.role) {
            case "Vendedor":
                return "Vender Producto"
            case "Deposito":
                return "Cargar Producto"
            case "Comprador":
                return "Comprador"
            default:
                return "Error"
        }
    }
    
    const formDisplayHandler = () => {
        switch (user.role) {
            case "Vendedor":
                return ( <FormProductSell/> );
            case "Comprador":
                return ( <h1>Comprador</h1> );
            case "Deposito":
                return (<FormProductLoad/>);
            default:
                return (<></>)
        }
    }

    const showFormHandler = () => {
        setShowForm(!showForm)
    }

    return (
        <>
            <div className='container mb-3 text-center' >
                { showForm ? <Button onClick={showFormHandler} variant='danger'>cancelar</Button> : <Button variant='warning' onClick={showFormHandler} >{buttonName()}</Button>}    
            </div>
            <div>
                {showForm && formDisplayHandler()}
            </div>
        </>
    )

}

export default FormProducts