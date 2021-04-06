import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import {SidebarData2 } from '../../components/SidebarData2'
import '../../components/Navbar.css'
import { IconContext} from 'react-icons'
import NavbarMaestro from './NavbarMaestro';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText,  MDBCardTitle } from "mdbreact";

const MaestroCursos=()=>{
  return(<>
    <NavbarMaestro>
    </NavbarMaestro>
    <main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Mis Cursos</h1>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col contenedor">
          <div class="card shadow-sm">
             <img src="../img/portfolio/alemania.png"></img>
            <div class="card-body">
              <p class="card-text">Idioma Aleman</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col contenedor">
          <div class="card shadow-sm">
          <img src="../img/portfolio/China_xian.jpg"></img>
            <div class="card-body">
              <p class="card-text">Idioma Mandarin </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col contenedor">
          <div class="card shadow-sm">
          <img src="../img/portfolio/francia1.png"></img>
            <div class="card-body">
              <p class="card-text">Idioma Frances</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>

        <div class="col contenedor">
          <div class="card shadow-sm">
            <img src="../img/portfolio/USA.png"></img>
            <div class="card-body">
              <p class="card-text">Idioma Ingles</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col contenedor">
          <div class="card shadow-sm">
          <img src="../img/portfolio/japon2.jpg"></img>
            <div class="card-body">
              <p class="card-text">Idioma Japones</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col contenedor">
          <div class="card shadow-sm">
          <img src="../img/portfolio/italia1.png"></img>
            <div class="card-body">
              <p class="card-text">Idioma Italiano</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</main>

  </>)
}
export default MaestroCursos;