import React, {useContext} from "react";
import {Grid} from "../components/Grid"
import { useParams } from 'react-router-dom';
import categorias from "../data/categorias"
import {BuscarContext} from "../components/BuscarContext";
import {useBuscar} from "../hooks/useBuscar";

const navigation = categorias.categorias;

export const Categorias = () =>{

  let { categoria } = useParams();

  let titulo = 'Categoría no encontrada';
  if(navigation.find( filtrado => filtrado.key === categoria))
    titulo = navigation.find( filtrado => filtrado.key === categoria).name

  const { globalBuscar } = useContext(BuscarContext);
  const {listaFiltrada} = useBuscar(globalBuscar);
  return (
    <main>
      <main>
        <Grid lista={listaFiltrada} titulo={titulo}/>
      </main>
    </main>
  )
};