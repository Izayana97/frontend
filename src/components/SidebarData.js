import React from  'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Historial',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
   
   
    {
        title: 'Calificaciones',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Matricula',
        path: '/poducts',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: '/PerfilEstudiante',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messager',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    /*{
        title: 'Salir',
        path: '/login',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },*/
   
]