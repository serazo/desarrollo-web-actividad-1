import React, {useEffect, useState} from 'react';
import {NavButton} from "./NavButton";
import {useLocation} from "react-router";
import categorias from "../data/categorias"
import {Link} from "react-router-dom";
const navigation = categorias.categorias;


export const Navbar = () => {
  let location = useLocation();
  useEffect(() =>{
    navigation.forEach( (nav, index) => {
      if(nav.to === location.pathname){
        setActiveButtonIndex(index);
      }
    })
  }, [location]);

  const[activeButtonIndex, setActiveButtonIndex] = useState(null);
  return <div id="navbar" className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">
            <img src="/images/play-movie.png" alt="UNIR Straming" id="logo" /> UNIR Straming</span>
    </a>
    <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        {navigation.map((button, buttonIndex) =>
          <NavButton
            setActive={() => setActiveButtonIndex(buttonIndex)}
            isActive={activeButtonIndex === buttonIndex}
            key={buttonIndex} index={buttonIndex} title={button.name} href={button.to} />)
        }
      </ul>
      <hr/>
    <Link
      className="nav-link text-white"
      to='/sobre-nosotros'
    >
      Acerca de nosotros
    </Link>
  </div>
}