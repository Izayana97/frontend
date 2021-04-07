import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

/*import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";*/

import LandingPage from "./components/landingpage.component";

import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/team';
import Contact from './components/contact';
import Inicio from './components/inicio.component';
import Registro from './components/pruebaRegistro';

import Navbar from './containers/estudiantes/Navbar';
import Navbar2 from './components/Navbar2';
import Cursos from './components/cursos.component';
import Maestro from './components/maestro';
import PerfilEstudiante from './components/perfilEstudiante';
//
import LoginPrueba from './components/LoginPrueba';
import PerfilPrueba from './components/PerfilPrueba';
import Admin from './components/administrador';
//
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import MaestroCursos from './containers/maestros/MaestroCursos';
import Listados from './containers/maestros/listados';
import PerfilMaestro from './containers/maestros/PerfilMaestro';
import Navbar1 from './containers/administrador/navbar1';
import Navbar3 from './containers/administrador/Navbar3';
import NavbarStudent from './containers/estudiantes/navbarStudent';
import Historial from './containers/estudiantes/historial';
import PerfilEstudiantes from './containers/estudiantes/perfilEstudiante';
import EstudianteCursos from './containers/estudiantes/cursosEstudiante';
import EstudianteMatricula from './containers/estudiantes/Matricula';
import NavbarAdmin from './containers/administrador/navbarAdmin';
import ListaEstudiantes from './containers/administrador/listaEstudiantes';
import ListaMaestros from './containers/administrador/listaMaestros';
import AdminCursos from './containers/administrador/cursosAdmin';

function App() {
  return (<Router>
    <div className="App" >
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/Navigation" component ={Navigation} />
            <Route path="/Team" component ={Team} />
            <Route path="/About" component ={About} />
            <Route path="/Header" component ={Header} />
            <Route path="/Features" component ={Features} />
            <Route path="/Services" component ={Services} />
            <Route path="/Gallery" component ={Gallery} />
            <Route path="/Testimonials" component ={Testimonials} />
            <Route path="/Contact" component ={Contact} />
            <Route path="/Inicio" component = {Inicio} />
            <Route path="/Registro" component = {Registro} />

            <Route path="/Inicio-estudiantes" component = {Navbar} />
            <Route path="/Navbar-administrador" component = {Navbar1} />
            <Route path="/Navbar" component = {Navbar3} />
            <Route path="/NavbarStudent" component = {NavbarStudent} />
            <Route path="/Navbar2" component = {Navbar2} />
            <Route path="/Cursos" component = {Cursos} />
            <Route path="/Estudiantes-historial" component = {Historial} />
            <Route path="/Estudiantes-perfil" component = {PerfilEstudiantes} />
            <Route path="/Estudiantes-cursos" component = {EstudianteCursos} />
            <Route path="/Estudiantes-matricula" component = {EstudianteMatricula} />
            <Route path="/Maestro" component = {Maestro} />
            <Route path="/navbar-admin" component = {NavbarAdmin} />
            <Route path="/lista-estudiantes" component = {ListaEstudiantes} />
            <Route path="/lista-maestros" component = {ListaMaestros} />
            <Route path="/PerfilEstudiante" component= {PerfilEstudiante} />
            <Route path="/Admin-Cursos" component = {AdminCursos} />
            <Route path="/login" component = {LoginPrueba} />
            <Route path="/perfil-prueba" component = {PerfilPrueba} />
            <Route path="/admin" component = {Admin} />
            <Route path="/MaestroCursos" exact component={MaestroCursos}/>
            <Route path="/Listados" component={Listados}/>
            <Route path="/Perfil" component={PerfilMaestro}/>
            <Route exact path='/login1' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;