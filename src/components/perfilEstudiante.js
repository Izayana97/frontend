import React, { useState, useEffect } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './perfilEstudiante.css'
import { IconContext} from 'react-icons'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, 
MDBDropdown, MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";

const PerfilEstudiante = () => {

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
    const { numeroIdentidad } = user;
    const { direccion } = user;
    const { edad } = user;
    const { telefono1 } = user;
    const { telefono2} = user;
    const { correo } = user;

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

    const[sidebar, setSidebar]= useState(false)

    const showSidebar = () => setSidebar(!sidebar)
  if (JSON.parse(localStorage.getItem('user'))) {
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           
           <div className="navbar">
               <Link to="#" className='menu-bars'>
                   <FaIcons.FaBars onClick={showSidebar}/>
               </Link>
               <Link >
               </Link>
               <a href="/Navbar" className="enlace">INICIO</a>
               <div className="margen1"></div>
               <MDBDropdown>
                <MDBDropdownToggle caret color="ins" className="color">
                  {nombreCompleto}
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Editar Perfil</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem><li onClick={logout}>Cerrar Sesion</li></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>   
               
           </div>
           <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardTitle>INFORMACION PERSONAL</MDBCardTitle>
            <MDBCardText>Nombre Completo: {nombreCompleto}</MDBCardText>
            <MDBCardText>Numero de Identidad: {numeroIdentidad}</MDBCardText>
            <MDBCardText>Direccion: {direccion}</MDBCardText>
            <MDBCardText>Edad: {edad}</MDBCardText>
            <MDBCardText>Telefono #1: {telefono1}</MDBCardText>
            <MDBCardText>Telefono #2: {telefono2}</MDBCardText>
            <MDBCardText>Correo:{correo}</MDBCardText>

          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
           <div >
           
           </div>

           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className='nav-menu-items' onClick={showSidebar}>
                   <li className="navbar-toggle">
                       <Link to="#" className='menu-bars'>
                           <AiIcons.AiOutlineClose />
                       </Link>
                   </li>
                   {SidebarData.map((item, index) => {
                       return(
                           <li Key={index} className={item.cName} >
                               <Link to={item.path}>
                                   {item.icon}
                                   <span>{item.title}</span>
                               </Link>
                           </li>
                       )
                   })}
               </ul>
           </nav>
           </IconContext.Provider>
           
        </>
        
    );
  }else{
    window.location.href = '/login'
  }
    
}

export default PerfilEstudiante;