import React, { useState} from "react";
import Axios from "axios";
//import 'mdbreact/dist/css/mdb.css';
//import { MDBInputGroup, MDBInput, MDBBtn } from "mdbreact";
//import '@fortawesome/fontawesome-free/css/all.min.css';

function Inicio () {

    const [correo, setCorreo] = useState("");

    //const [loginStatus, setLoginStatus] = useState("");

    const mostrarDatos = () => {
        Axios.get("http://localhost:3001/estudiante", {
          correo: correo,
        }).fetch((response) => {
            setCorreo(response.json())
        })
    
    };

    return (
        <div>
        <h1>Registrado con Exito</h1>
        <h3>{mostrarDatos}</h3>
        </div>
    )
    
}

export default Inicio;