import React, {useContext} from "react";
import {Grid} from "../components/Grid"
import {useBuscar} from "../hooks/useBuscar";
import {BuscarContext} from "../components/BuscarContext";

export const Home = () =>{
  const { globalBuscar } = useContext(BuscarContext);
  const {listaFiltrada} = useBuscar(globalBuscar);
  return (
    <main>
      <Grid lista={listaFiltrada} titulo="Programación"/>
    </main>
  )
};