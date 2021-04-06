import React from  'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }, 
    {
        title: 'Historial',
        path: '/Estudiantes-historial',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }, 
    {
        title: 'Cursos',
        path: '/Estudiantes-cursos',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Matricula',
        path: '/Estudiantes-matricula',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: '/Estudiantes-perfil',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Salir',
        path: '/login',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
   
]