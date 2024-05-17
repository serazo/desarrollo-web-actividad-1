import React, {useContext} from 'react';
import {BuscarContext} from "./BuscarContext";

export const Header = () =>{
  const { updateBuscar } = useContext(BuscarContext);
  const handleChange = (event) => {
    updateBuscar(event.target.value)
  };
  return <header>
    <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 fixed-top">
      <div className="container-fluid">
        <div className="col-sm-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar serie o película"
              aria-label="Buscar serie o película"
              onChange={handleChange}
            />
            <button className="btn btn-dark" type="button" id="boton-buscar">Buscar</button>
          </div>
        </div>
        <form className="d-flex d-none d-sm-flex">
          <span className="navbar-text text-white">
            Bienvenid@, <b> Nombre de usuario</b>
            </span>
        </form>
      </div>
    </nav>
  </header>
};