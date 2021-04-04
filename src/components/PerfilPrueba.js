import React, { useState, useEffect } from 'react';

const PerfilPrueba = () => {

    const [user, setUser] = useState({
        contrasenia: '',
        correo: '',
        direccion: '',
        edad: '',
        fechaRegistro: '',
        id: '',
        nombreCompleto: '',
        numeroIdentidad: '',
        telefono1: '',
        telefono2: '',
    });

    const { nombreCompleto } = user;

    useEffect(() => {
        getUser();
    }, []);

    
    const logout = () =>{
        localStorage.clear();
        window.location.href = '/login';
    }


    const getUser = () => {
        let data = JSON.parse(localStorage.getItem('user'));

        setUser(data.result[0]);
        console.log(data)
    }

    if (JSON.parse(localStorage.getItem('user'))) {
        return (
            <div>
                <h1>{ nombreCompleto }</h1> <br></br>

                <button className="btn btn-danger btn-sm" onClick={logout} >Cerrar</button>
    
            </div>
        )
    
    }else{
        window.location.href = '/login'

    }

  
}

export default PerfilPrueba;