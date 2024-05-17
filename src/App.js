import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from './views/Home';
import { Categorias } from './views/Categorias';
import { SobreNosotros } from './views/SobreNosotros';
import { DefaultComponent } from './components/DefaultComponent';
import {Ver} from "./views/Ver";
import {BuscarContext} from "./components/BuscarContext";
import './css/index.css';
import './css/simple-line-icons.css';
import {useState} from "react";


function App() {
  const [globalBuscar, setGlobalBuscar] = useState("");

  let updateBuscar = (value) => {
    setGlobalBuscar(value);
  };
  return (
    <BuscarContext.Provider value={{ globalBuscar, updateBuscar }}>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/categoria/:categoria" element={ <Categorias/> } />
            <Route exact path="/sobre-nosotros" element={ <SobreNosotros/> } />
            <Route exact path="/ver/:id" element={ <Ver/> } />
            <Route exact path="*" element={ <DefaultComponent/> } />
          </Routes>
      </BrowserRouter>
    </BuscarContext.Provider>
  );
}

export default App;
