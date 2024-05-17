import { useEffect, useState } from "react";
import lista from "../data/lista"
import {useParams} from "react-router-dom";
export const useBuscar = (keywords) => {

  let { categoria } = useParams();
  let categorizados = lista
  if(categoria && categoria !== ''){
    categorizados = lista.filter(function(item){return item.category === categoria});
  }

  const [listaFiltrada, setListaFiltrada] = useState(categorizados);

  useEffect(() => {

    let filtrados = categorizados;
    if(keywords && keywords !== ''){
      let expresion = new RegExp(`${keywords}.*`, "i");
      //filtrados = lista.filter(function(item){return item.category === keywords});
      filtrados = categorizados.filter(item => expresion.test(item.name));
    }
    setListaFiltrada(filtrados);
  }, [keywords, categoria, categorizados])

  return { listaFiltrada, setListaFiltrada }
}