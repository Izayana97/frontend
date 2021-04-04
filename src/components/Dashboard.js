import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidenav1 from './Sidenav1';
import Navbar1 from './Navbar1';
import '../css/styles.css';
import { Usuarios } from '../pages/Usuarios';
import { Clientes } from '../pages/Clientes';


export const Dashboard = () => {
    return (
        <div className="sb-nav-fixed" >
            <Navbar1/>
            <div id="layoutSidenav">
                <Sidenav1/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Dashboard</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <Switch>
                                <Route exact path='/dashboard/usuarios' component={Usuarios} />
                                <Route exact path='/dashboard/clientes' component={Clientes} />
                                <Redirect to="/dashboard"/>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
